import {StatusBar, StyleSheet, TextInput, View} from 'react-native';
import PropTypes from "prop-types";
import {router} from "expo-router";
import {useState} from "react";
import Button from "./commons/Button";

function routeBack() {
    router.replace("/");
}

function routeTo(path) {
    router.push(path);
}

export default function RouterTest() {
    const [text, setText] = useState('/test/idk');

    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto"/>

            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
            <Button label={"Route back"} style={{marginTop: 25}} onPress={() => routeBack()}></Button>
            <Button label={`Route to ${text}`} style={{marginTop: 10}} onPress={() => routeTo(text)}></Button>
        </View>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object,
    onPress: PropTypes.func,
    callbackVars: PropTypes.func,
};

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
    },
    input: {
        height: 60,
        width: 240,
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor: "#b3b3b3",
        borderRadius: 18,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        color: 'black',
    },
    button: {
        marginTop: 10,
    }
});