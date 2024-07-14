import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeState} from '../../contexts/ThemeContext';
import {Link} from "expo-router";

export default function LinkButton({label, path, style}) {
    const {theme} = useThemeState();

    return (
        <Link href={path} asChild >
            <Pressable style={style}>
                <Text style={[styles.link, {color: theme.primary1}]}>
                    {label}
                </Text>
            </Pressable>
        </Link>
    );
}

LinkButton.propTypes = {
    label: PropTypes.string,
    path: PropTypes.string,
    style: PropTypes.object
};

const styles = StyleSheet.create({
    link: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
