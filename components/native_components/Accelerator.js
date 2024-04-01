import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Accelerometer} from 'expo-sensors';
import MiniButton from "../commons/MiniButton";

export default function Accelerator() {

    const [{x, y, z}, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);

    const _slow = () => Accelerometer.setUpdateInterval(750);
    const _fast = () => Accelerometer.setUpdateInterval(16);

    const _subscribe = () => {
        setSubscription(Accelerometer.addListener(setData));
    };

    const _unsubscribe = () => {
        if (subscription) {
            subscription.remove();
        }
        setSubscription(null);
    };

    return (
        <View style={styles.container}>

            <Text style={{fontSize: 24, fontWeight: "bold", marginTop: 100}}>
                Information from Native Accelerometer API (expo-sensors):
            </Text>
            <View style={styles.rowContainer}>
                <Text style={styles.text}>x: {x.toFixed(2)}</Text>
                <Text style={styles.text}>y: {y.toFixed(2)}</Text>
                <Text style={styles.text}>z: {z.toFixed(2)}</Text>
            </View>
            <View style={styles.rowContainer}>
                <MiniButton label={subscription ? 'On' : 'Off'} callback={subscription ? _unsubscribe : _subscribe}/>
                <MiniButton label={"Slow"} callback={_slow}/>
                <MiniButton label={"Fast"} callback={_fast}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
    },
    text: {
        color: "black",
        fontSize: 16,
        marginLeft: 10,
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }
});
