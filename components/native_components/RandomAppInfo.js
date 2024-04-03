import {StyleSheet, Text, View} from 'react-native';
import * as Application from 'expo-application';
import {useThemeState} from '../../contexts/ThemeContext';

export default function RandomAppInfo() {
    const {theme} = useThemeState();

    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: theme.text}]}>
                Information from Native API (expo-application):
            </Text>
            <Text style={{color: theme.text, marginTop: 30}}>applicationId: {Application.applicationId}</Text>
            <Text style={{color: theme.text}}>applicationName: {Application.applicationName}</Text>
            <Text
                style={{color: theme.text}}>nativeApplicationVersion: {Application.nativeApplicationVersion}</Text>
            <Text style={{color: theme.text}}>nativeBuildVersion: {Application.nativeBuildVersion}</Text>
            <Text style={{color: theme.text}}>getAndroidId: {Application.getAndroidId()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        paddingBottom: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 100,
        textAlign: 'center',
    },
});
