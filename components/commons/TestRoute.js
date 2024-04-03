import React, { useState } from 'react';
import { StatusBar, StyleSheet, TextInput, View } from 'react-native';
import {router, useLocalSearchParams} from "expo-router";
import Button from "./Button";
import { useThemeState } from "../../contexts/ThemeContext";
import {useCurrentPageState} from "../../contexts/PageContext";
import PropTypes from "prop-types";

export default function TestRoute({defaultRoute = "test/idk"}) {
    const [newRoute, setNewRoute] = useState(defaultRoute);
    const { theme } = useThemeState();
    const { resetCurrentPage } = useCurrentPageState();

    function routeTo(newRoute) {
        router.push(newRoute);
    }

    function routeBack() {
        router.back();
    }

    function routeHome(path) {
        resetCurrentPage()
        router.push(path);
    }

    return (
        <View style={[styles.mainContainer, { backgroundColor: theme.background }]}>
            <StatusBar style="auto"/>
            <TextInput
                style={[styles.input, { borderColor: theme.primary1, color: theme.text }]}
                onChangeText={setNewRoute}
                value={newRoute}
            />
            <Button label={`Route to ${newRoute}`} style={styles.button} callback={() => routeTo(newRoute)} iconName="arrow-right" />
            <Button label={"Route back"} style={styles.button} callback={() => routeBack()} iconName="arrow-left" />
            <Button label={"Go Home"} style={styles.button} callback={() => routeHome("/")} iconName="home" />
        </View>
    );
}

TestRoute.propTypes = {
    defaultRoute: PropTypes.string,
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 35
    },
    input: {
        height: 60,
        width: 240,
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        fontSize: 16,
    },
    button: {
        marginTop: 10,
    }
});
