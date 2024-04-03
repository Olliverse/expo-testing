import {StatusBar} from "expo-status-bar";
import {Dimensions, Pressable, StyleSheet, Text, View} from "react-native";

import Accelerator from "../components/native_components/Accelerator";
import HorizontalSwipeView from "../components/HorizontalSwipeView";
import RandomAppInfo from "../components/native_components/RandomAppInfo";
import Frieren from "../components/Frieren";
import {Gesture, GestureHandlerRootView} from "react-native-gesture-handler";
import ThemeSwitch from "../components/ThemeSwitch";
import {useThemeState} from "../contexts/ThemeContext";
import ImageDisplayTemplate from "../components/ImageDisplayTemplate";
import RouterPage from "../components/RouterPage";


/*
* This is the default route "/"
* */
export default function AppContainer() {
    const {theme} = useThemeState();
    const horizontalSwipeGesture = Gesture.Pan();

    return (
        <View>
            <StatusBar style="auto"/>

            <GestureHandlerRootView style={[styles.gestureContainer, {backgroundColor: theme.background}]}>
                <HorizontalSwipeView horizontalSwipeGesture={horizontalSwipeGesture}>
                    <View style={styles.innerContainer}>
                        <ThemeSwitch/>
                    </View>

                    <View style={styles.innerContainer}>
                        <ImageDisplayTemplate />
                    </View>

                    <View style={styles.innerContainer}>
                        <Accelerator/>
                    </View>

                    <View style={styles.innerContainer}>
                        <RandomAppInfo/>
                    </View>

                    <View style={styles.innerContainer}>
                        <RouterPage />
                    </View>

                    <View style={styles.innerContainer}>
                        <Frieren/>
                    </View>
                </HorizontalSwipeView>
            </GestureHandlerRootView>
        </View>
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
