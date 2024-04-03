import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useThemeState } from "../contexts/ThemeContext";
import Button from "./commons/Button";
import { useCurrentUserState } from "../contexts/UserContext";

export default function AuthScreen() {
    const { theme } = useThemeState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { currentUser, setCurrentUser } = useCurrentUserState();

    const auth = {};

    // const auth = getAuth();

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setCurrentUser(user);
    //         } else {
    //             setCurrentUser(null);
    //         }
    //     });
    //
    //     // Cleanup subscription
    //     return () => unsubscribe();
    // }, []);

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert('Success', 'Account created successfully');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Success', 'Signed in successfully');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const setRandomUser = () => {
        // Example: Set random user
        setCurrentUser({ id: Math.random(), email: 'random@example.com' });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, { borderColor: theme.borderColor }]}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={[styles.input, { borderColor: theme.borderColor }]}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Button label="Sign Up" callback={handleSignUp} />
            <Button label="Sign In" callback={handleSignIn} />
            <Text style={[styles.underlinedText, { color: theme.primary1 }]} onPress={setRandomUser}>
                Don't feel like logging in right now?
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
