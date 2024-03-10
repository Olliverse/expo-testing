import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

function defaultFunc(label) {
    alert(`"${label}" pressed.`)
}

export default function Button({label, theme, style, callback, callbackVars}) {
    if (theme === "primary") {
        return (
            <View style={[style, styles.buttonContainer, {borderWidth: 4, borderColor: "#b3b3b3", borderRadius: 18}]}>
                <Pressable
                    style={[styles.button, {backgroundColor: "#fff"}]}
                    onPress={() => callbackVars ? callback(callbackVars) : (callback ? callback() : defaultFunc(label))}
                >
                    <FontAwesome
                        name="picture-o"
                        size={18}
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
            <Pressable style={styles.button}
                       onPress={() => callbackVars ? callback(callbackVars) : (callback ? callback() : defaultFunc(label))}
            >
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#7e7e7e",
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});
