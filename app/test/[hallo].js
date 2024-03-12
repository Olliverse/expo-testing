import {StatusBar} from "expo-status-bar";
import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Link, useLocalSearchParams} from 'expo-router';

export default function Hallo() {
    const {hallo} = useLocalSearchParams();
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto"/>

            <Text style={styles.text}>{hallo}</Text>
            <Link replace href="/"></Link>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: '#25292e',
    },
    text: {
        height: 60,
        width: 240,
        color: "black",
        backgroundColor: 'white',
        borderWidth: 4,
        borderColor: "#b3b3b3",
        borderRadius: 18,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 32,
    },
});
