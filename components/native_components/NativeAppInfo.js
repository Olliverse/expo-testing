import {Platform, StyleSheet, Text, View} from 'react-native';
import * as Application from 'expo-application';
import {useThemeState} from '../../contexts/ThemeContext';
import {useI18NState} from "../../contexts/I18NContext";
import {useEffect, useState} from "react";


export default function NativeAppInfo() {
    const {i18n} = useI18NState()
    const {theme} = useThemeState();
    const [deviceId, setDeviceId] = useState("undefined")

    useEffect(() => {
        loadPlatformSpecificText()
    }, []);

    async function loadPlatformSpecificText() {
        switch (Platform.OS) {
            case 'ios':
                setDeviceId(await Application.getIosIdForVendorAsync());
                break;
            case 'android':
                setDeviceId(Application.getAndroidId());
                break;
            default:
                setDeviceId("undefined");
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: theme.text}]}>
                {i18n.t("expo-application-info")}:
            </Text>
            <View style={styles.textContainer}>
                <View style={styles.row}>
                    <Text style={{color: theme.text, fontWeight: 'bold'}}>Expo app ID: </Text>
                    <Text style={{color: theme.text}}>{Application.applicationId}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{color: theme.text, fontWeight: 'bold'}}>Expo app name: </Text>
                    <Text style={{color: theme.text}}>{Application.applicationName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{color: theme.text, fontWeight: 'bold'}}>Smartphone ID: </Text>
                    <Text style={{color: theme.text}}>{deviceId}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 100,
        textAlign: 'center',
    },
    textContainer: {
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
});
