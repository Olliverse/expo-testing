import {StyleSheet, Switch, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import {dark, light} from "../../styles/colors";
import PropTypes from "prop-types";
import MiniButton from "./MiniButton";
import {useThemeState} from "../../contexts/ThemeContext";

export default function ThemeSwitch({setTheme}) {
    const {theme} = useThemeState();
    const [darkMode, setDarkMode] = useState(theme.background === "#212121");

    useEffect(() => {
        if (darkMode) {
            setTheme("dark")
        }
        if (!darkMode) {
            setTheme("light")
        }
    }, [darkMode]);

    console.log("switch" , theme)

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

MiniButton.propTypes = {
    // theme: PropTypes.object,
    setTheme: PropTypes.func,
};

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