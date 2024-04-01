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

export default function AppContainer() {
    const horizontalSwipeGesture = Gesture.Pan()
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto"/>
            <GestureHandlerRootView style={styles.gestureContainer}>
                <HorizontalSwipeView horizontalSwipeGesture={horizontalSwipeGesture}>
                    <View style={[styles.innerContainer, {backgroundColor: "#969696"}]}>
                        <ImageViewer placeholderImageSource={require("../assets/images/main_image.png")}/>
                        <Button label="Choose a photo" theme={"primary"} style={{marginTop: 5}}/>
                        <Button label="Use this photo" theme={"primary"} style={{marginTop: 5}}/>
                    </View>

                    <View style={[styles.innerContainer, {backgroundColor: "#b1b1b1"}]}>
                        <Accelerator/>
                    </View>

                    <View style={[styles.innerContainer, {backgroundColor: "#969696"}]}>
                        <Link asChild href="/test">
                            <Pressable>
                                <Text>This Link does not persist the state</Text>
                            </Pressable>
                        </Link>
                    </View>

                    <View style={[styles.innerContainer, {backgroundColor: "#969696"}]}>
                        <RandomAppInfo/>
                    </View>

                    <View style={[styles.innerContainer, {backgroundColor: "#b1b1b1"}]}>
                        <Frieren/>
                    </View>
                </HorizontalSwipeView>
            </GestureHandlerRootView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        alignItems: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: '#25292e',
    },
    gestureContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    innerContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: '100%'
    },
});
