import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {router} from "expo-router";
import Button from "./Button";
import {useThemeState} from "../../contexts/ThemeContext";
import {useCurrentPageState} from "../../contexts/PageContext";
import PropTypes from "prop-types";
import {useI18NState} from "../../contexts/I18NContext";

export default function TestRoute({defaultRoute = "test/idk"}) {
    const {i18n} = useI18NState()
    const {theme} = useThemeState();
    const {resetCurrentPage} = useCurrentPageState();
    const [newRoute, setNewRoute] = useState(defaultRoute);

    function routeTo(newRoute) {
        router.push(newRoute);
    }

    function routeBack() {
        router.back();
    }

    function routeHome(path) {
        resetCurrentPage()
        router.navigate(path);
    }

    return (
        <View style={[styles.mainContainer, {backgroundColor: theme.background}]}>
            <TextInput
                style={[styles.input, {borderColor: theme.primary1, color: theme.text}]}
                onChangeText={setNewRoute}
                value={newRoute}
            />
            <Button label={`${i18n.t("route-to")} ${newRoute}`} style={styles.button}
                    callback={() => routeTo(newRoute)}
                    iconName="arrow-right"/>
            <Button label={i18n.t("route-back")} style={styles.button} callback={() => routeBack()}
                    iconName="arrow-left"/>
            <Button label={i18n.t("route-home")} style={styles.button} callback={() => routeHome("/")} iconName="home"/>
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
