import {StatusBar} from "expo-status-bar";
import {Dimensions, StyleSheet, View} from "react-native";
import {Link} from "expo-router";

import Button from '../components/defaults/Button';
import ImageViewer from '../components/ImageViewer';
import Accelerator from "../components/native-components/Accelerator";
import SwipeableView from "../components/native-components/SwipeableView";

const BACKGROUND_IMAGE = require("../assets/images/alipepe.png");

export default function App() {
    return (
        <View style={styles.mainContainer}>
            { /* TODO: StatusBar props genauer anschauen _> animated, etc. */}
            <StatusBar style="auto"/>

            <SwipeableView>
                <View style={styles.innerContainer}>
                    <ImageViewer placeholderImageSource={BACKGROUND_IMAGE}/>
                    <Button label="Choose a photo" theme={"primary"} style={{marginTop: 5}}/>
                    <Button label="Use this photo" theme={"primary"} style={{marginTop: 5}}/>
                </View>

                <View style={styles.innerContainer}>
                    <Accelerator/>
                </View>

                <View style={styles.innerContainer}>
                    <Link href="/test">
                        <Button label="Weg hier" theme={"primary"} style={{marginTop: 5}}/>
                    </Link>
                </View>

                {/*<View style={styles.innerContainer}>*/}
                {/*    <Button label="just a button" theme={"primary"} style={{marginTop: 5}}/>*/}
                {/*</View>*/}

                {/*<View style={styles.innerContainer}>*/}
                {/*    <Button label="just a button" theme={"primary"} style={{marginTop: 5}}/>*/}
                {/*</View>*/}
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
        // width: '100%',
        height: '100%'
    },
});
