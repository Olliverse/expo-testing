import React, {useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler, State} from 'react-native-gesture-handler';

const LeftRightSwipe = ({children, currentPage, setCurrentPage, offset}) => {
    console.log("children.length")
    console.log(children.length)
    console.log("children")
    console.log(children)
    const {width} = Dimensions.get('window');
    const pan = Gesture.Pan()

    const [translateX, setTranslateX] = useState(0);
    const translateXRef = useRef(new Animated.Value(translateX)).current;

    pan.onChange(({translationX}) => {
        const trans = translationX + offset * width
        translateXRef.setValue(trans)
        setTranslateX(trans)
    })

    pan.onEnd(() => {
        const performSwipe = () => {
            const swipeDistance = Math.abs(translateX);
            if (swipeDistance > width / 3) {
                translateX < 0 ?  setCurrentPage(currentPage - 1) : setCurrentPage(currentPage + 1)
                Animated.timing(translateXRef, {
                    toValue: translateX < 0 ?  -width : width,
                    duration: 200,
                    useNativeDriver: true
                }).start();
                return;
            }

            Animated.spring(translateXRef, {
                toValue: 0,
                bounciness: 15,
                useNativeDriver: true
            }).start();
        }
        performSwipe();
    })

    return (
        <GestureHandlerRootView style={styles.container}>
            <GestureDetector gesture={pan}>
                <Animated.View
                    style={[
                        styles.swipeContainer,
                        {
                            transform: [{translateX: translateXRef}],
                            width: `${children.length ? children.length : 1}00%`
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
