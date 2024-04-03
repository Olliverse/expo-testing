import {StatusBar} from "expo-status-bar";
import {View} from "react-native";
import Main from "../components/Main";
import {useCurrentUserState} from "../contexts/UserContext";
import AuthScreen from "../components/AuthPage";

/*
* This is the default route "/"
* */
export default function AppContainer() {
    const {currentUser} = useCurrentUserState()

    return (
        <View>
            <StatusBar style="auto"/>
            { currentUser === undefined ? <AuthScreen/> : <Main/>}
        </View>
    );
}

