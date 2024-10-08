import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Accelerometer} from 'expo-sensors';
import {useThemeState} from '../../contexts/ThemeContext';
import MiniButton from "../custom/MiniButton";
import Button from "../custom/Button";
import {useI18NState} from "../../contexts/I18NContext";

export default function  NativeSensor() {
    const {i18n} = useI18NState()
    const {theme} = useThemeState();

    const [{x, y, z}, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        const _subscribe = () => {
            setSubscription(Accelerometer.addListener(setData));
        };

        const _unsubscribe = () => {
            if (subscription) {
                subscription.remove();
            }
            setSubscription(null);
        };

        return () => _unsubscribe();
    }, []);

    const _slow = () => Accelerometer.setUpdateInterval(750);
    const _fast = () => Accelerometer.setUpdateInterval(16);

    const _toggleSubscription = () => {
        if (subscription) {
            subscription.remove();
            setSubscription(null);
        } else {
            setSubscription(Accelerometer.addListener(setData));
        }
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: theme.text}]}>
                {i18n.t("expo-sensors-info")}:
            </Text>
            <View style={styles.dataContainer}>
                <View style={styles.dataRow}>
                    <Text style={[styles.dataLabel, {color: theme.text}]}>x:</Text>
                    <Text style={[styles.dataValue, {color: theme.text}]}>{x.toFixed(2)}</Text>
                </View>
                <View style={styles.dataRow}>
                    <Text style={[styles.dataLabel, {color: theme.text}]}>y:</Text>
                    <Text style={[styles.dataValue, {color: theme.text}]}>{y.toFixed(2)}</Text>
                </View>
                <View style={styles.dataRow}>
                    <Text style={[styles.dataLabel, {color: theme.text}]}>z:</Text>
                    <Text style={[styles.dataValue, {color: theme.text}]}>{z.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <Button label={subscription ? 'Stop' : 'Start'} callback={_toggleSubscription}
                            iconName={subscription ? 'pause' : 'play'}/>
                </View>
                <View style={styles.buttonRow}>
                    <MiniButton label={i18n.t("slow")} callback={_slow} style={{width: "40%"}}/>
                    <MiniButton label={i18n.t("fast")} callback={_fast} style={{width: "40%"}}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    dataContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    dataRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dataLabel: {
        fontSize: 16,
        marginRight: 5,
    },
    dataValue: {
        fontSize: 16,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
    },
});
