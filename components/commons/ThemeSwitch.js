import {StyleSheet, Switch, Text, View} from 'react-native';
import {useThemeState} from "../../contexts/ThemeContext";
import {useEffect, useState} from "react";
import {darkColor, lightColor} from "../../styles/colors";

export default function ThemeSwitch() {
    const {theme, setTheme} = useThemeState();
    const [darkMode, setDarkMode] = useState(theme === "dark");

    useEffect(() => {
        if(darkMode && theme === "light") {
            setTheme("dark")
        }
        if(!darkMode && theme === "dark") {
            setTheme("light")
        }
    }, [darkMode]);

    function getContainerColor() {
        switch (theme) {
            case "light":
                return {backgroundColor: lightColor.background}
            case "dark":
                return {backgroundColor: darkColor.background}
            default:
                console.log(`No theme selected: ${theme}`)
                return {backgroundColor: lightColor.background}
        }
    }

    return (
        <View style={[styles.container, getContainerColor()]}>
            <Text style={styles.label}>Dark Mode</Text>
            <Switch
                trackColor={{false: lightColor.secondary1, true: darkColor.secondary1}}
                thumbColor={darkMode ? darkColor.background : lightColor.background}
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
        color: '#333',
    },
});