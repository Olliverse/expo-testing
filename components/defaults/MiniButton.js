import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function MiniButton({label, theme, style, callback, callbackVars}) {
    if (theme === "primary") {
        return (
            <View style={[style, styles.buttonContainer, {borderWidth: 2, borderColor: "#b3b3b3", borderRadius: 8}]}>
                <Pressable
                    style={[styles.button, {backgroundColor: "#fff"}]}
                    onPress={() => callbackVars ? callback(callbackVars) : callback()}
                >
                    <FontAwesome
                        name="picture-o"
                        size={11}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, {color: "#25292e"}]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                onPress={() => callbackVars ? callback(callbackVars) : callback()}
            >
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 60,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    },
    button: {
        borderRadius: 4,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 4,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 11,
    },
});
