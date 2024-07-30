import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useThemeState} from "../../contexts/ThemeContext";
import LinkButton from "../custom/LinkButton";

export default function RouterPage() {
    const {theme} = useThemeState();

    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 20,
                color: theme.text,
            }}>Expo Router Test</Text>
            <LinkButton label={'Route to /test'} path={'/test'}/>
            <LinkButton label={'Route to /recursive'} path={'/recursive'} style={{marginBottom: 15, marginTop: 15}}/>
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
