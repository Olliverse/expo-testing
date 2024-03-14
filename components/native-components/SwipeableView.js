import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {GestureHandlerRootView, PanGestureHandler, State} from 'react-native-gesture-handler';

const SwipeableView = ({children}) => {
    const {width} = Dimensions.get('window');

    const [curPage, setCurPage] = useState(1);

    const panGestureHandler = useRef(null);
    const translateX = useRef(new Animated.Value(width)).current;

    const translateXCopy = useRef(null);
    translateXCopy.current = {...translateX}

    console.log("translateX", translateX)
    console.log("translateXCopy", translateXCopy.current)

    const onGestureEvent = Animated.event(
        [{nativeEvent: {translationX: translateX}}],
        {useNativeDriver: true}
    );

    useEffect(() => {
        console.log("page: " + curPage)
    }, [curPage]);

    const onHandlerStateChange = ({nativeEvent}) => {

        const updatePage = (translationX) => {
            if (translationX < 0) {
                if (curPage < children.length) {
                    setCurPage(curPage + 1);
                    return true;
                }
            } else if (curPage > 1) {
                setCurPage(curPage - 1);
                return true;
            }
        }

        function performSwipe() {
            const swipeDistance = Math.abs(nativeEvent.translationX);
            if (swipeDistance > width / 2 && updatePage(nativeEvent.translationX)) {
                Animated.timing(translateX, {
                    toValue: nativeEvent.translationX < 0 ?  -width : width,
                    duration: 200,
                    useNativeDriver: true
                }).start();
                return;
            }

            Animated.spring(translateX, {
                toValue: 0,
                bounciness: 15,
                useNativeDriver: true
            }).start();
        }

        if (nativeEvent.state === State.END) {
            performSwipe();
        }
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <PanGestureHandler
                ref={panGestureHandler}
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}>
                <Animated.View
                    style={[
                        styles.swipeContainer,
                        {
                            // transform: [{translateX: Animated.subtract(Animated.add(translateX, width), width * (curPage - 1))}],
                            transform: [{translateX: translateX}],
                            width: `${children.length ? children.length : 1}00%`
                        }
                    ]}>
                    {children}
                </Animated.View>
            </PanGestureHandler>
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
