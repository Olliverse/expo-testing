import TestRoute from "../../components/commons/TestRoute";
import React, {useEffect} from "react";
import {useNavigation} from "expo-router";

export default function Test() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    return (
        <TestRoute defaultRoute={'/test/idk'}/>
    );
}