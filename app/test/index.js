import {StatusBar} from "expo-status-bar";
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";
import {router} from "expo-router";

function routeBack() {
    router.replace("/");
}

function routeTo(path) {
    router.replace(path);
}

export default function Test() {
    const [text, onChangeText] = useState('Useless Text');

    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto"/>

            <Button title={"Route back"} onPress={() => routeBack()}></Button>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <Button title={"Route back"} onPress={() => routeBack()}></Button>
            <Button title={`Route to ${text}`} onPress={() => routeTo(text)}></Button>
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
});
