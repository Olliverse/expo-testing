import React, {useEffect} from "react";
import {useNavigation} from "expo-router";
import TestRoute from "../../components/custom/TestRoute";

export default function Test() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    return (
        <TestRoute defaultRoute={'/test/idk'}/>
    );
}