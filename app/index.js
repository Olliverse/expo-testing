import {StatusBar} from "expo-status-bar";
import {Dimensions, Pressable, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

import Button from '../components/defaults/Button';
import ImageViewer from '../components/defaults/ImageViewer';
import Accelerator from "../components/native-components/Accelerator";
import SwipeableView from "../components/defaults/SwipeableView";
import RandomAppInfo from "../components/native-components/RandomAppInfo";
import Frieren from "../components/native-components/Frieren";

const ALI_PEPE_IMAGE = require("../assets/images/alipepe.png");
const RARE_PEPE_IMAGE = require("../assets/images/rarepepe.png");

export default function AppContainer() {
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto"/>
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

                <View style={[styles.innerContainer, {backgroundColor: "#969696"}]}>
                    <RandomAppInfo/>
                </View>

                <View style={[styles.innerContainer, {backgroundColor: "#b1b1b1"}]}>
                    <ImageViewer placeholderImageSource={RARE_PEPE_IMAGE}/>
                </View>

                <View style={[styles.innerContainer, {backgroundColor: "#b1b1b1"}]}>
                    <Frieren />
                </View>
            </SwipeableView>
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
