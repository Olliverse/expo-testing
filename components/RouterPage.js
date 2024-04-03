import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import LinkButton from "./commons/LinkButton";
import {useThemeState} from "../contexts/ThemeContext";

export default function RouterPage() {
    const {theme} = useThemeState();

    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 20,
                color: theme.text,
            }}>Expo Router</Text>
            <LinkButton label={'Route to /test'} path={'/test'} style={{marginBottom: 10}}/>
            <LinkButton label={'Route to /recursive'} path={'/recursive'}/>
            <LinkButton label={'Route to your user page'} path={'/user'}/>
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
