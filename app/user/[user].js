import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Link, router, useLocalSearchParams, useNavigation} from "expo-router";
import {useThemeState} from "../../contexts/ThemeContext";
import {getAuth, signOut} from "firebase/auth";
import {useUser} from "../../contexts/UserContext";
import Button from "../../components/custom/Button";
import {useI18NState} from "../../contexts/I18NContext";

export default function User() {
    const {i18n} = useI18NState()
    const {theme} = useThemeState();
    // Weil der Varname "user" belegt ist, müssen folgende 2 lines verwendet werden
    const currentUser = useUser().user;
    const setUser = useUser().setUser;

    const navigation = useNavigation();
    const {user} = useLocalSearchParams();
    const auth = getAuth();


    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: `/user/${user}`
        });
    }, [navigation]);

    const signOutClicked = async () => {
        try {
            await signOut(auth);
            setUser(undefined);
            router.replace("/")
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    }

    return (
        <View style={[styles.mainContainer, {backgroundColor: theme.background}]}>
            <View style={[styles.textBox, {borderColor: theme.primary3}]}>
                <Text style={[styles.text, {color: theme.text, fontWeight: "bold"}]}>
                    {i18n.t("route-is")}: {user} {i18n.t("due-to-uid")}
                </Text>
                <Text style={[styles.text, {color: theme.text}]}>
                    Name: {currentUser ? currentUser.username : i18n.t("not-set")}
                </Text>
                <Text style={[styles.text, {color: theme.text}]}>
                    email: {currentUser ? currentUser.email : i18n.t("not-set")}
                </Text>
            </View>

            <Button label="Logout" callback={signOutClicked} style={{background: theme.secondary1}}/>

            <Link pop href="/" style={[styles.link, {color: theme.secondary1}]}>
                {i18n.t("route-start")}
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
