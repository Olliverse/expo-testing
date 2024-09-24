import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Gesture, GestureHandlerRootView} from "react-native-gesture-handler";
import HorizontalSwipeView from "./custom/HorizontalSwipeView";
import NativeImageSelection from "./pages/ImageDisplayPage";
import NativeSensor from "./native_components/NativeSensor";
import NativeAppInfo from "./native_components/NativeAppInfo";
import RouterPage from "./pages/RouterPage";
import MangaPage from "./pages/MangaPage";
import {useThemeState} from "../contexts/ThemeContext";
import RecipePage from "./pages/RecipePage";
import SwitchPage from "./pages/SwitchPage";


export default function Main() {
    const {theme} = useThemeState();
    const horizontalSwipeGesture = Gesture.Pan();

    return (
        <GestureHandlerRootView style={[styles.gestureContainer, {backgroundColor: theme.background}]}>
            <HorizontalSwipeView horizontalSwipeGesture={horizontalSwipeGesture}>
                <View style={styles.innerContainer}>
                    <SwitchPage/>
                </View>

                <View style={styles.innerContainer}>
                    <NativeImageSelection/>
                </View>

                <View style={styles.innerContainer}>
                    <RecipePage/>
                </View>

                <View style={styles.innerContainer}>
                    <>
                        <NativeSensor/>
                        <NativeAppInfo/>
                    </>
                </View>

                <View style={styles.innerContainer}>
                    <RouterPage/>
                </View>

                <View style={styles.innerContainer}>
                    <MangaPage hideStatusbar={true}/>
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
