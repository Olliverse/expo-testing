import {StatusBar} from "expo-status-bar";
import {Dimensions, Pressable, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

import Button from '../components/defaults/Button';
import ImageViewer from '../components/ImageViewer';
import Accelerator from "../components/native-components/Accelerator";
import SwipeableView from "../components/defaults/SwipeableView";
import {useEffect} from "react";
import {CurrentPageProvider} from "../components/context/PageContext";

const ALI_PEPE_IMAGE = require("../assets/images/alipepe.png");
const RARE_PEPE_IMAGE = require("../assets/images/rarepepe.png");

export default function AppContainer() {
    useEffect(() => {
        console.log('MOUNTED');
        return () => {
            console.log('UNMOUNTED');
        };
    }, []);

    /*
    https://docs.expo.dev/router/appearance/
    React.useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      // When all loading is setup, unmount the splash screen component.
      SplashScreen.hideAsync();
      setReady(true);
    }, 1000);
  }, []);
  */

    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto"/>

            <CurrentPageProvider>
                <SwipeableView>
                    <View style={[styles.innerContainer, {backgroundColor: "#969696"}]}>
                        <ImageViewer placeholderImageSource={ALI_PEPE_IMAGE}/>
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

                    <View style={[styles.innerContainer, {backgroundColor: "#b1b1b1"}]}>
                        <ImageViewer placeholderImageSource={RARE_PEPE_IMAGE}/>
                    </View>
                </SwipeableView>
            </CurrentPageProvider>
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
    innerContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: '100%'
    },
});
