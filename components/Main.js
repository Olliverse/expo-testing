import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet, Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {Gesture, GestureHandlerRootView} from "react-native-gesture-handler";
import HorizontalSwipeView from "./HorizontalSwipeView";
import ThemeSwitch from "./ThemeSwitch";
import ImageDisplayTemplate from "./ImageDisplayPage";
import Accelerator from "./native_components/Accelerator";
import RandomAppInfo from "./native_components/RandomAppInfo";
import RouterPage from "./RouterPage";
import Frieren from "./Frieren";
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
