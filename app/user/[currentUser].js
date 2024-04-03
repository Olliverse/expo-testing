import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import {useThemeState} from "../../contexts/ThemeContext";

export default function CurrentUser() {
    const {currentUser} = useLocalSearchParams();
    const {theme} = useThemeState();


    return (
        <View style={[styles.mainContainer, {backgroundColor: theme.background}]}>
            <StatusBar style="auto"/>

            <View style={[styles.textBox, {borderColor: theme.primary3}]}>
                <Text style={[styles.text, {color: theme.text, fontWeight: "bold"}]}>
                    Current Route is: {hallo}
                </Text>
                {testData.map(item => (
                    <Text key={item.id} style={[styles.text, {color: theme.text}]}>
                        {item.text}
                    </Text>
                ))}
            </View>

            <Link replace href="/" style={styles.link}>
                back to start
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
