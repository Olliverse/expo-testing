import React from "react";
import TestRoute from "../../components/custom/TestRoute";

export default function Recursive() {
    return (
        <TestRoute defaultRoute={'/recursive/1'}/>
    );
}