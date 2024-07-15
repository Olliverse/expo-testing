import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Gesture, GestureHandlerRootView} from "react-native-gesture-handler";
import HorizontalSwipeView from "./main_components/HorizontalSwipeView";
import ThemeSwitch from "./main_components/ThemeSwitch";
import ImageDisplayTemplate from "./main_components/ImageDisplayPage";
import Accelerator from "./native_components/Accelerator";
import RandomAppInfo from "./native_components/RandomAppInfo";
import RouterPage from "./main_components/RouterPage";
import Frieren from "./main_components/Frieren";
import {useThemeState} from "../contexts/ThemeContext";


export default function Main() {
    const {theme} = useThemeState();
    const horizontalSwipeGesture = Gesture.Pan();

    return (
        <GestureHandlerRootView style={[styles.gestureContainer, {backgroundColor: theme.background}]}>
            <HorizontalSwipeView horizontalSwipeGesture={horizontalSwipeGesture}>
                <View style={styles.innerContainer}>
                    <ThemeSwitch/>
                </View>

                <View style={styles.innerContainer}>
                    <ImageDisplayTemplate/>
                </View>

                <View style={styles.innerContainer}>
                    <Accelerator/>
                </View>

                <View style={styles.innerContainer}>
                    <RandomAppInfo/>
                </View>

                <View style={styles.innerContainer}>
                    <RouterPage/>
                </View>

                <View style={styles.innerContainer}>
                    <Frieren/>
                </View>
            </HorizontalSwipeView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    gestureContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
    },
    innerContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
});
