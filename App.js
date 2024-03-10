import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";

import Button from './components/defaults/Button';
import ImageViewer from './components/ImageViewer';
import Accelerator from "./components/native-components/Accelerator";

const BACKGROUND_IMAGE = require("./assets/images/alipepe.png");

export default function App() {
    return (
        <View style={styles.mainContainer}>
            {/*TODO: StatusBar props genauer anschauen _> animated, etc.*/}
            <StatusBar style="auto" hidden={true}/>

            <View style={styles.innerContainer}>
                <ImageViewer placeholderImageSource={BACKGROUND_IMAGE}/>
            </View>

            <View style={styles.innerContainer}>
                <Button label="Choose a photo" theme={"primary"}/>
                <Button label="Use this photo" theme={"primary"} style={{marginTop: 5}}/>
            </View>
            M
            <View style={styles.innerContainer}>
                <Accelerator/>
            </View>
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
        marginTop: 10,
    },
});
