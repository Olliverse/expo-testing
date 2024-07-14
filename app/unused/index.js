import React from "react";
import {Text, View} from "react-native";

export default function AppContainer() {
    return (
        <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
            <Text>Hey, du hast eine versteckte Seite gefunden! :)</Text>
        </View>
    );
}

