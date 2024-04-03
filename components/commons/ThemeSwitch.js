import {StyleSheet, Switch, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import {dark, light} from "../../styles/colors";
import {useThemeState} from "../../contexts/ThemeContext";

export default function ThemeSwitch() {
    const {theme, setTheme} = useThemeState();
    const [darkMode, setDarkMode] = useState(theme === dark);

    useEffect(() => {
        if (darkMode) {
            setTheme(dark)
        } else {
            setTheme(light)
        }
    }, [darkMode]);

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={[styles.label, {color: theme.text}]}>
                Dark Mode
            </Text>
            <Switch
                trackColor={{false: light.primary2, true: dark.primary2}}
                thumbColor={darkMode ? dark.background : light.background}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={setDarkMode}
                value={darkMode}
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
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 3,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});