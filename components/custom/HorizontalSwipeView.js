import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import {GestureDetector} from "react-native-gesture-handler";
import {useCurrentPageState} from "../../contexts/PageContext";
import PropTypes from "prop-types";

const EmptyTemplateView = (id) => {
    return (
        <View style={styles.templateContainer} key={id}>
            <Text style={{color: "#e3e3e3"}}>
                Nothing{'\n'}to{'\n'}see{'\n'}here
            </Text>
        </View>
    )
}

const getSubChildren = (children, currentPage) => {
    if (currentPage > 1 && currentPage < children.length) {
        return [children[currentPage - 2], children[currentPage - 1], children[currentPage]];
    } else if (currentPage === 1) {
        return [EmptyTemplateView(0), children[0], children[1]]
    } else if (currentPage === children.length) {
        return [children[children.length - 2], children[children.length - 1], EmptyTemplateView(2)];
    } else {
        return [EmptyTemplateView(0), EmptyTemplateView(1), EmptyTemplateView(2)];
    }
}

const HorizontalSwipeView = ({children, horizontalSwipeGesture}) => {
    const {width} = Dimensions.get('window');
    const translateRef = useRef(new Animated.Value(0)).current;
    const childrenArray = React.Children.toArray(children)
    const {currentPage, setCurrentPage} = useCurrentPageState();
    const [childrenToRender, setChildrenToRender] = useState(getSubChildren(children, currentPage));

    useEffect(() => {
        translateRef.setValue(0)
        const newSubChildren = getSubChildren(childrenArray, currentPage)
        setChildrenToRender(newSubChildren);
    }, [currentPage]);

    const shouldSwipeLeft = (translation) => {
        return translation >= 0 && currentPage > 1;
    }

    const shouldSwipeRight = (translation) => {
        return translation < 0 && currentPage < childrenArray.length;
    }

    const shouldSwipe = (translation) => {
        return shouldSwipeLeft(translation) || shouldSwipeRight(translation);
    }

    const updateCurrentPage = (translation) => {
        if (shouldSwipeRight(translation)) {
            setCurrentPage(currentPage + 1)
        } else if (shouldSwipeLeft(translation)) {
            setCurrentPage(currentPage - 1)
        } else {
            console.log("Performed Animation but did not update")
        }
    }

    const performSwipeAnimation = (translationX) => {
        Animated.timing(translateRef, {
            toValue: (translationX < 0) ? (-width) : width,
            duration: 180,
            useNativeDriver: true
        }).start(() => updateCurrentPage(translationX));
    }

    const performDrawbackAnimation = () => {
        Animated.spring(translateRef, {
            toValue: 0,
            bounciness: 20,
            useNativeDriver: true
        }).start();
    }

    horizontalSwipeGesture
        .onChange(({translationX}) => {
            translateRef.setValue(translationX)
        })
        .onEnd(({translationX}) => {
            const swipeDistance = Math.abs(translationX);
            if (swipeDistance > width / 4 && shouldSwipe(translationX)) {
                performSwipeAnimation(translationX);
            } else {
                performDrawbackAnimation();
            }
        })

    return (
        <>
            {childrenArray[currentPage - 1].props.children.props.hideStatusbar === true ? (
                <StatusBar animated hidden/>) : null}

            <GestureDetector gesture={horizontalSwipeGesture}>
                <Animated.View
                    style={[
                        styles.swipeContainer,
                        {
                            transform: [{translateX: translateRef}],
                            width: "300%"
                        }
                    ]}>
                    {childrenToRender}
                </Animated.View>
            </GestureDetector>
        </>
    );
};

HorizontalSwipeView.propTypes = {
    children: PropTypes.array,
    horizontalSwipeGesture: PropTypes.object
};

const styles = StyleSheet.create({
    swipeContainer: {
        display: "flex",
        flexDirection: 'row',
        height: '100%'
    },
    templateContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
});

export default HorizontalSwipeView;
