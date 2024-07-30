import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PropTypes from "prop-types";
import {useThemeState} from "../../contexts/ThemeContext";

export default function MiniButton({label, style, callback, iconName}) {
    const {theme} = useThemeState();

    return (
        <View style={[styles.buttonContainer, {borderColor: theme.borderColor}, style]}>
            <Pressable
                style={({pressed}) => [
                    styles.button,
                    {backgroundColor: pressed ? theme.primary3 : theme.primary2},
                ]}
                onPress={() => callback()}
                android_ripple={{color: theme.primary3}}
            >
                <FontAwesome
                    name={iconName}
                    size={16}
                    color={theme.icon}
                />
                <Text style={[styles.label, {color: theme.text}]}>
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
    iconName: PropTypes.string,
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 80,
        height: 40,
        borderWidth: 1,
        borderRadius: 15,
        overflow: 'hidden',
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});
