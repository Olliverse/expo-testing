import React, {useRef} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {Gesture, GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler';

const LeftRightSwipe = ({children, overallChildrenCount, currentPage, setCurrentPage}) => {
    const {width} = Dimensions.get('window');
    const pan = Gesture.Pan()
    const translateRef = useRef(new Animated.Value(0)).current;

    const updateCurrentPage = (translation) => {
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
            toValue: translateRef < 0 ? -width : width,
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
    })

    pan.onEnd(({translationX}) => {
        const swipeDistance = Math.abs(translationX);
        if (swipeDistance > width / 3 && updateCurrentPage(translationX)) {
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
