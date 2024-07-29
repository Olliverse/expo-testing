import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Accelerometer} from 'expo-sensors';
import MiniButton from '../commons/MiniButton';
import {useThemeState} from '../../contexts/ThemeContext';
import Button from "../commons/Button";

export default function NativeSensor() {
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
                Information from Native Accelerometer API (expo-sensors):
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
                    <MiniButton label={'Slow'} callback={_slow} style={{width: "40%"}}/>
                    <MiniButton label={'Fast'} callback={_fast} style={{width: "40%"}}/>
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
