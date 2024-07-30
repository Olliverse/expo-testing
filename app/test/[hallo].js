import {StyleSheet, Text, View} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import {useThemeState} from "../../contexts/ThemeContext";
import {useI18NState} from "../../contexts/I18NContext";

export default function Hallo() {
    const {i18n} = useI18NState()
    const {theme} = useThemeState();
    const {hallo} = useLocalSearchParams();

    const testData = [
        {id: 1, text: i18n.t("your-ads")},
        {id: 2, text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {
            id: 3,
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ];

    return (
        <View style={[styles.mainContainer, {backgroundColor: theme.background}]}>
            <View style={[styles.textBox, {borderColor: theme.primary3}]}>
                <Text style={[styles.text, {color: theme.text, fontWeight: "bold"}]}>
                    {i18n.t("route-current")}: {hallo}
                </Text>
                {testData.map(item => (
                    <Text key={item.id} style={[styles.text, {color: theme.text}]}>
                        {item.text}
                    </Text>
                ))}
            </View>

            <Link pop href="/" style={styles.link}>
                {i18n.t("route-start")}
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textBox: {
        width: "80%",
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
    link: {
        color: "#007bff",
        fontSize: 18,
        textDecorationLine: "underline",
    },
});
