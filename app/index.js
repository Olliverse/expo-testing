import React from "react";
import {StatusBar, View} from "react-native";
import Main from "../components/Main";
import AuthScreen from "../components/pages/AuthPage";
import {useUser} from "../contexts/UserContext";

/*
* This is the default route "/"
* */
export default function AppContainer() {
    const {user} = useUser()
    return (
        <View>
            <StatusBar style="auto"/>
            {user ? <Main/> : <AuthScreen/>}
        </View>
    );
}

