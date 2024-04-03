import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {getAuth} from "firebase/auth";
import {router} from "expo-router";

export default function Test() {
    const auth = getAuth()

    useEffect(() => {
        if (auth.currentUser) {
            router.replace(`/user/${auth.currentUser.uid}`);
        } else {
            router.replace(`/user/logged_out`);
        }
    }, []);

    return (
        <View>
            <Text>You're not even logged in!</Text>
        </View>
    );
}