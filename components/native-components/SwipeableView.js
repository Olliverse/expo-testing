import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler, State} from 'react-native-gesture-handler';

const SwipeableView = ({children}) => {
    const {width} = Dimensions.get('window');
    const pan = Gesture.Pan()

    const [curPage, setCurPage] = useState(1);
    const [translateX, setTranslateX] = useState(0);
    const translateXRef = useRef(new Animated.Value(translateX)).current;

    useEffect(() => {
        console.log("page: " + curPage)
    }, [curPage]);

    pan.onChange(({translationX}) => {
        const trans = translationX + curPage * width
        translateXRef.setValue(trans)
        setTranslateX(trans)
    })

    pan.onEnd(() => {
        const updatePage = () => {
            if (translateX < 0) {
                if (curPage < children.length) {
                    setCurPage(curPage + 1);
                    return true;
                }
            } else if (curPage > 1) {
                setCurPage(curPage - 1);
                return true;
            }
        }

        const performSwipe = () => {
            const swipeDistance = Math.abs(translateX);
            if (swipeDistance > width / 2 && updatePage()) {
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

export default SwipeableView;
