import React, {useEffect, useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {dark, light} from "../../styles/colors";
import {useThemeState} from "../../contexts/ThemeContext";
import {useI18NState} from "../../contexts/I18NContext";

export default function SwitchPage() {
    const {theme, setTheme} = useThemeState();
    const {language, setLanguage, i18n} = useI18NState();
    const [darkMode, setDarkMode] = useState(theme === dark);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setTheme(darkMode ? light : dark);
    };

    const toggleLanguage = () => {
        if (language === "de") {
            setLanguage("en");
        } else {
            setLanguage("de");
        }
    };

    useEffect(() => {
        console.log(language)
    }, [language]);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{i18n.t("theme-selection")}</Text>
            <View style={[styles.switchContainer, {backgroundColor: theme.primary2}]}>
                <Text style={[styles.label, {color: theme.text}]}>
                    {darkMode ? i18n.t("dark") : i18n.t("light")}
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
            <Text style={styles.title}>{i18n.t("language-selection")}</Text>
            <View style={[styles.switchContainer, {backgroundColor: theme.primary2}]}>
                <Text style={[styles.label, {color: theme.text}]}>
                    {language === "de" ? "de" : "en"}
                </Text>
                <Switch
                    trackColor={{false: theme.secondary2, true: theme.primary3}}
                    thumbColor={language === "de" ? theme.primary1 : theme.secondary1}
                    onValueChange={toggleLanguage}
                    value={language === "de"}
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
        marginBottom: 30,
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    }
});
