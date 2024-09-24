import React from "react";
import {StatusBar, View} from "react-native";
import Main from "../components/Main";

/*
* This is the default route "/"
* */
export default function AppContainer() {
    return (
        <View>
            <StatusBar animated/>
            <Main/>
        </View>
    );
}
