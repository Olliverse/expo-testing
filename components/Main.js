import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Gesture, GestureHandlerRootView} from "react-native-gesture-handler";
import HorizontalSwipeView from "./main_components/HorizontalSwipeView";
import ThemeSwitch from "./main_components/ThemeSwitchPage";
import NativeImageSelection from "./main_components/ImageDisplayPage";
import NativeSensor from "./native_components/NativeSensor";
import NativeAppInfo from "./native_components/NativeAppInfo";
import RouterPage from "./main_components/RouterPage";
import Frieren from "./main_components/MangaPage";
import {useThemeState} from "../contexts/ThemeContext";
import Recipes from "./main_components/RecipePage";


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
                    <NativeImageSelection/>
                </View>

                <View style={styles.innerContainer}>
                    <Recipes/>
                </View>

                <View style={styles.innerContainer}>
                    <NativeSensor/>
                    <NativeAppInfo/>
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
