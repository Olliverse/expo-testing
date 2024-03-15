import React, {useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {Gesture, GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler';

const LeftRightSwipe = ({children, overallChildrenCount, currentPage, setCurrentPage}) => {
    if (children.length !== 3) {
        console.warn("No 3 children in Swipable View:" + children.length)
        return
    }

    const {width} = Dimensions.get('window');
    const pan = Gesture.Pan()
    const [translation, setTranslation] = useState(0);
    const translateRef = useRef(new Animated.Value(translation)).current;

    const updateCurrentPage = () => {
        if (translation < 0) {
            if (currentPage < overallChildrenCount) {
                console.log("Forward")
                setCurrentPage(currentPage + 1);
                return true;
            }
            console.log("Cannot go more forward")
        } else {
            if (currentPage > 1) {
                console.log("Backward")
                setCurrentPage(currentPage - 1);
                return true;
            }
            console.log("Cannot go more backward")
        }
        return false;
    }

    const swipeAnimation = () => {
        Animated.timing(translateRef, {
            toValue: translation < 0 ? -width : width,
            duration: 200,
            useNativeDriver: true
        }).start();
    }

    const drawbackAnimation = () => {
        Animated.spring(translateRef, {
            toValue: 0,
            bounciness: 15,
            useNativeDriver: true
        }).start();
    }

    pan.onChange(({translationX}) => {
        translateRef.setValue(translationX)
        setTranslation(translationX)
    })

    pan.onEnd(() => {
        const swipeDistance = Math.abs(translation);
        if (swipeDistance > width / 3 && updateCurrentPage()) {
            swipeAnimation();
        } else {
            drawbackAnimation();
        }
    })

    return (
        <GestureHandlerRootView style={styles.container}>
            <GestureDetector gesture={pan}>
                <Animated.View
                    style={[
                        styles.swipeContainer,
                        {
                            transform: [{translateX: translateRef}],
                            width: "300%"
                        }
                    ]}>
                    {children}
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    swipeContainer: {
        display: "flex",
        flexDirection: 'row',
        height: '100%'
    },
});

export default LeftRightSwipe;
