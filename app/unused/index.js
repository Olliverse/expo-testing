import React from "react";
import {Text, View} from "react-native";
import {useI18NState} from "../../contexts/I18NContext";

export default function AppContainer() {
    const {i18n} = useI18NState()

    return (
        <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
            <Text>{i18n.t("hidden-page")} :)</Text>
        </View>
    );
}

