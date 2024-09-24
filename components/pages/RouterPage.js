import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useThemeState} from "../../contexts/ThemeContext";
import LinkButton from "../custom/LinkButton";
import {useI18NState} from "../../contexts/I18NContext";

export default function RouterPage() {
    const {i18n} = useI18NState()
    const {theme} = useThemeState();

    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 20,
                color: theme.text,
            }}>Expo Router Test</Text>
            <LinkButton label={`${i18n.t("route-to")} /test`} path={'/test'}/>
            <LinkButton label={`${i18n.t("route-to")} /recursive`} path={'/recursive'}
                        style={{marginBottom: 15, marginTop: 15}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        paddingBottom: 170,
    },
});
