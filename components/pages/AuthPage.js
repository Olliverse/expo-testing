import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {useThemeState} from "../../contexts/ThemeContext";
import {useUser} from "../../contexts/UserContext";
import Button from "../custom/Button";
import {useI18NState} from "../../contexts/I18NContext";

export default function AuthScreen() {
    const {i18n} = useI18NState()
    const {theme} = useThemeState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useUser();

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(undefined);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error.message)
            Alert.alert('Error', error.message);
        }
    };

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error.message)
            Alert.alert('Error', error.message);
        }
    };

    const bypassLogin = () => {
        setUser({id: undefined, email: 'random@example.com'});
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, {borderColor: theme.borderColor}]}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={[styles.input, {borderColor: theme.borderColor}]}
                placeholder={i18n.t("password")}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Button label={i18n.t("sign-up")} callback={handleSignUp}/>
            <Button label={i18n.t("sign-in")} callback={handleSignIn}/>
            <Text style={[styles.underlinedText, {color: theme.primary1}]} onPress={bypassLogin}>
                {i18n.t("bypass-login")}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
    },
    input: {
        width: '80%',
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    underlinedText: {
        marginTop: 10,
        textDecorationLine: 'underline',
    },
});
