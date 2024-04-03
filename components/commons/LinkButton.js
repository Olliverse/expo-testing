import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeState} from '../../contexts/ThemeContext';
import {router} from "expo-router";

export default function LinkButton({label, path, style}) {
    const {theme} = useThemeState();

    const handlePress = () => {
        router.push(path);
    };

    return (
        <Pressable onPress={handlePress} style={style}>
            <Text style={[styles.link, {color: theme.primary1}]}>
                {label}
            </Text>
        </Pressable>
    );
}

LinkButton.propTypes = {
    label: PropTypes.string,
    path: PropTypes.string,
};

const styles = StyleSheet.create({
    link: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
