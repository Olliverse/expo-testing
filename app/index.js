import {StatusBar} from "expo-status-bar";
import {Dimensions, Pressable, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

import Button from '../components/commons/Button';
import ImageViewer from '../components/commons/ImageViewer';
import Accelerator from "../components/native_components/Accelerator";
import HorizontalSwipeView from "../components/HorizontalSwipeView";
import RandomAppInfo from "../components/native_components/RandomAppInfo";
import Frieren from "../components/Frieren";
import {Gesture, GestureHandlerRootView} from "react-native-gesture-handler";
import ThemeSwitch from "../components/commons/ThemeSwitch";
import {useThemeState} from "../contexts/ThemeContext";

export default function AppContainer() {
    const {theme} = useThemeState();
    const horizontalSwipeGesture = Gesture.Pan()

    return (
        <View>
            <StatusBar style="auto" hidden={true}/>

            <GestureHandlerRootView style={[styles.gestureContainer, {backgroundColor: theme.background}]}>
                <HorizontalSwipeView horizontalSwipeGesture={horizontalSwipeGesture}>
                    <View style={styles.innerContainer}>
                        <ThemeSwitch/>
                    </View>

                    <View style={styles.innerContainer}>
                        <ImageViewer img={require("../assets/images/main_image.png")}/>
                        <Button label="Choose a photo" style={{marginTop: 5}}/>
                        <Button label="Use this photo" style={{marginTop: 5}}/>
                    </View>

                    <View style={styles.innerContainer}>
                        <Accelerator/>
                    </View>

                    <View style={styles.innerContainer}>
                        <Link asChild href="/test">
                            <Pressable>
                                <Text>This Link does not persist the state</Text>
                            </Pressable>
                        </Link>
                    </View>

                    <View style={styles.innerContainer}>
                        <RandomAppInfo/>
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
        // height: '100%'
    },
});
