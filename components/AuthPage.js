import React, {useState} from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function AuthScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(getAuth(), email, password);
            Alert.alert('Success', 'Account created successfully');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            Alert.alert('Success', 'Signed in successfully');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleSignUp} />
            <Button title="Sign In" onPress={handleSignIn} />
        </View>
    );
}
