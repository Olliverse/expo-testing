import React, {useEffect} from "react";
import {useLocalSearchParams, useNavigation} from "expo-router";
import {StyleSheet, Text, View} from "react-native";
import {useThemeState} from "../../contexts/ThemeContext";
import TestRoute from "../../components/custom/TestRoute";
import {useI18NState} from "../../contexts/I18NContext";

export default function SomeVar() {
    const {i18n} = useI18NState()
    const {theme} = useThemeState();
    const {some_var} = useLocalSearchParams();
    const navigation = useNavigation();

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
                    {i18n.t("route-current")}: {some_var}
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