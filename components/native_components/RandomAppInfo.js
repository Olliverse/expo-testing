import {ScrollView, Text} from 'react-native';
import * as Application from 'expo-application';

export default function RandomAppInfo() {
    return (
        <>
            <Text style={{fontSize: 24, fontWeight: "bold", marginTop: 100}}>
                Information from Native API (expo-application):
            </Text>
            <ScrollView style={{marginTop: 50}}>
                <Text>applicationId: {Application.applicationId}</Text>
                <Text>applicationName: {Application.applicationName}</Text>
                <Text>nativeApplicationVersion: {Application.nativeApplicationVersion}</Text>
                <Text>nativeBuildVersion: {Application.nativeBuildVersion}</Text>
                <Text>getAndroidId: {Application.getAndroidId()}</Text>
            </ScrollView>
        </>
    );
}