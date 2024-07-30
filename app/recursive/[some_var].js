import React, {useEffect} from "react";
import {useLocalSearchParams, useNavigation} from "expo-router";
import {StyleSheet, Text, View} from "react-native";
import {useThemeState} from "../../contexts/ThemeContext";
import TestRoute from "../../components/custom/TestRoute";

export default function SomeVar() {
    const navigation = useNavigation();
    const {some_var} = useLocalSearchParams();
    const {theme} = useThemeState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: `/recursive/${some_var}`
        });
    }, [navigation]);

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