import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {dark, light} from "../../styles/colors";
import {useThemeState} from "../../contexts/ThemeContext";

export default function SwitchPage() {
    const {theme, setTheme} = useThemeState();
    const [darkMode, setDarkMode] = useState(theme === dark);
    const [language, setLanguage] = useState("DE");

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setTheme(darkMode ? light : dark);
    };

    const toggleLanguage = () => {
        if (language === "DE") {
            setLanguage("EN");
        } else {
            setLanguage("DE");
        }
        // TODO: Update the rest of the application / save to context maybe
    };

    return (
        <View style={styles.mainContainer}>
            <View style={[styles.switchContainer, {backgroundColor: theme.primary2}]}>
                <Text style={[styles.label, {color: theme.text}]}>
                    {darkMode ? "Dark" : "Light"} Mode
                </Text>
                <Switch
                    trackColor={{false: theme.secondary2, true: theme.primary3}}
                    thumbColor={darkMode ? theme.primary1 : theme.secondary1}
                    onValueChange={toggleDarkMode}
                    value={darkMode}
                    style={styles.switch}
                    width={50}
                    height={30}
                />
            </View>
            <View style={[styles.switchContainer, {backgroundColor: theme.primary2}]}>
                <Text style={[styles.label, {color: theme.text}]}>
                    {language === "DE" ? "DE" : "EN"}
                </Text>
                <Switch
                    trackColor={{false: theme.secondary2, true: theme.primary3}}
                    thumbColor={language === "DE" ? theme.primary1 : theme.secondary1}
                    onValueChange={toggleLanguage}
                    value={language === "DE"}
                    style={styles.switch}
                    width={50}
                    height={30}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    switchContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 12,
        elevation: 3,
        width: "50%"
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    switch: {
        transform: [{scaleX: 0.8}, {scaleY: 0.8}],
    },
});
