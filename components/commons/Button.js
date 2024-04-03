import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PropTypes from "prop-types";
import {useThemeState} from "../../contexts/ThemeContext";

function defaultFunc(label) {
    alert(`No callback given for '${label}'`)
}

export default function Button({label, style, onPress, callbackVars}) {
    const {theme} = useThemeState();

    const handleClick = () => {
        if (callbackVars) {
            onPress(callbackVars)
        } else if (onPress) {
            onPress();
        } else {
            defaultFunc(label)
        }
    }

    return (
        <View style={[styles.buttonContainer, {borderColor: "#b3b3b3"}, style]}>
            <Pressable
                style={styles.button}
                onPress={() => handleClick()}
            >
                <FontAwesome
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={{paddingRight: 8}}
                />
                <Text style={[styles.buttonLabel, {color: theme.text}]}>{label}</Text>
            </Pressable>
        </View>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object,
    onPress: PropTypes.func,
    callbackVars: PropTypes.func,
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderWidth: 4,
        borderRadius: 18
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
    buttonLabel: {
        fontSize: 16,
    },
});
