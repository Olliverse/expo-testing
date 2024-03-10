import {StatusBar} from "expo-status-bar";
import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Link, useLocalSearchParams} from 'expo-router';

export default function Hallo() {
    const {hallo} = useLocalSearchParams();
    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto"/>

            <Text>{hallo}</Text>
            <Link replace href="/">Back</Link>
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
