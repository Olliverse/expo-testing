import TestRoute from "../../components/commons/TestRoute";
import {Text} from "react-native";
import React from "react";

export default function Recursive() {
    return (
        <TestRoute defaultRoute={'/recursive/1'}/>
    );
}