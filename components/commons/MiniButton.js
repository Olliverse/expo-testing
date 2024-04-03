import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PropTypes from "prop-types";
import {useThemeState} from "../../contexts/ThemeContext";

export default function MiniButton({label, style, callback, callbackVars, iconName}) {
    const {theme} = useThemeState();

    return (
        <View style={[styles.buttonContainer, {borderColor: theme.background}, style]}>
            <Pressable
                style={[styles.button, {backgroundColor: theme.primary1}]}
                onPress={() => callbackVars ? callback(callbackVars) : callback()}
            >
                <FontAwesome
                    name={iconName}
                    size={11}
                    color={theme.secondary1}
                    style={styles.buttonIcon}
                />
                <Text style={{fontSize: 11, color: theme.text}}>
                    {label}
                </Text>
            </Pressable>
        </View>
    );
}

MiniButton.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object,
    callback: PropTypes.func,
    callbackVars: PropTypes.func,
    iconName: PropTypes.string,
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 60,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        borderWidth: 2,
        borderRadius: 8
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
});