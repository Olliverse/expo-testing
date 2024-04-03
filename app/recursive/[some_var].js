import TestRoute from "../../components/commons/TestRoute";
import React from "react";
import {useLocalSearchParams} from "expo-router";
import {StyleSheet, Text, View} from "react-native";
import {useThemeState} from "../../contexts/ThemeContext";

export default function SomeVar() {
    const {some_var} = useLocalSearchParams();
    const {theme} = useThemeState();

    return (
        <>
            <TestRoute defaultRoute={`/recursive/${some_var}`}/>
            <View style={styles.absoluteContainer}>
                <Text style={[styles.label, {color: theme.text}]}>
                    Current Route: {some_var}
                </Text>
            </View>
        </>

    );
}
const styles = StyleSheet.create({
    absoluteContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{translateX: -50}, {translateY: -180}],
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});