import React from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import {useThemeState} from "../../contexts/ThemeContext";
import {getAuth, signOut} from "firebase/auth";
import Button from "../../components/commons/Button";
import {useUser} from "../../contexts/UserContext";

export default function User() {
    const {user} = useLocalSearchParams();

    const {theme} = useThemeState();
    const currentUser = useUser().user;
    const setUser = useUser().setUser;

    const auth = getAuth();
    const signOutClicked = async () => {
        try {
            await signOut(auth);
            setUser(undefined);
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    }

    return (
        <View style={[styles.mainContainer, {backgroundColor: theme.background}]}>
            <StatusBar style="auto"/>

            <View style={[styles.textBox, {borderColor: theme.primary3}]}>
                <Text style={[styles.text, {color: theme.text, fontWeight: "bold"}]}>
                    Route is: {user} -> wegen UID
                </Text>
                <Text style={[styles.text, {color: theme.text}]}>
                    Name: {currentUser ? currentUser.username : "nicht gesetzt"}
                </Text>
                <Text style={[styles.text, {color: theme.text}]}>
                    email: {currentUser ? currentUser.email : "nicht gesetzt"}
                </Text>
            </View>

            <Button label="Logout" callback={signOutClicked} style={{background: theme.secondary1}}/>

            <Link replace href="/" style={[styles.link, {color: theme.secondary1}]}>
                Back to Start
            </Link>
        </View>
    )
        ;
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
        marginTop: 15,
        fontSize: 18,
        textDecorationLine: "underline",
    },
});
