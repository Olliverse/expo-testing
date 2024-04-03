import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { dark, light } from "../styles/colors";
import { useThemeState } from "../contexts/ThemeContext";

export default function ThemeSwitch() {
    const { theme, setTheme } = useThemeState();
    const [darkMode, setDarkMode] = useState(theme === dark);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setTheme(darkMode ? light : dark);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.label, { color: theme.text }]}>
                Dark Mode
            </Text>
            <Switch
                trackColor={{ false: light.primary2, true: dark.primary2 }}
                thumbColor={darkMode ? dark.primary3 : light.primary3}
                onValueChange={toggleDarkMode}
                value={darkMode}
                style={styles.switch}
                width={50}
                height={30}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 20,
        elevation: 3,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    switch: {
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
});
