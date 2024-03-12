import React, {useRef, useState} from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import {GestureHandlerRootView, PanGestureHandler, State} from 'react-native-gesture-handler';


const SwipeableView = ({children}) => {
    const [curPage, setCurPage] = useState(1);
    const panGestureHandler = useRef(null);
    const translateX = useRef(new Animated.Value(0)).current;

    const { width } = Dimensions.get('window');

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationX: translateX } }],
        { useNativeDriver: true }
    );

    const updatePage = (translationX) => {
        if (translationX > 0) {
            if (curPage < children.length) {
                setCurPage(curPage + 1);
            }
        } else {
            if (curPage > 1) {
                setCurPage(curPage - 1);
            }
        }
    }

    const onHandlerStateChange = ({ nativeEvent }) => {
        console.log(curPage)
        if (nativeEvent.state === State.END) {
            const swipeDistance = Math.abs(nativeEvent.translationX);
            if (swipeDistance > width / 3) {
                updatePage(nativeEvent.translationX);
                nativeEvent.translationX > 0 ? console.log("Swipe right") : console.log("Swipe left")
                Animated.timing(translateX, {
                    toValue: nativeEvent.translationX > 0 ? width * curPage : (width * curPage) - width,
                    duration: 200,
                    useNativeDriver: true
                }).start();
            } else {
                Animated.spring(translateX, {
                    toValue: curPage,
                    bounciness: 15,
                    useNativeDriver: true
                }).start();
            }
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
                            transform: [{ translateX: translateX }],
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
