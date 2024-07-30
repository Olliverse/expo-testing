import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PropTypes from "prop-types";
import {useThemeState} from "../../contexts/ThemeContext";

export default function Button({label, style, callback, iconName}) {
    const {theme} = useThemeState();

    return (
        <Pressable
            style={({pressed}) => [
                styles.button,
                {
                    backgroundColor: pressed ? theme.primary3 : theme.primary2,
                    borderColor: theme.borderColor,
                },
                style
            ]}
            onPress={() => callback()}
            accessibilityRole="button"
            accessible={true}
            accessibilityLabel={label}
        >
            <View style={styles.buttonContent}>
                {iconName && <FontAwesome name={iconName} size={20} color={theme.text} style={styles.icon}/>}
                <Text style={[styles.label, {color: theme.text}]}>{label}</Text>
            </View>
        </Pressable>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    callback: PropTypes.func,
    iconName: PropTypes.string,
};

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 50,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        paddingRight: 8,
    },
});
