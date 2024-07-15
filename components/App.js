import React from 'react';
import {useThemeState} from "../contexts/ThemeContext";
import {Stack} from "expo-router";


export default function App() {
    const {theme} = useThemeState();
    return (
        <Stack screenOptions={{
            animation: "slide_from_bottom",
            headerShown: true,
            headerStyle: {
                backgroundColor: theme.primary1,
            },
            headerTintColor: theme.headerText,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}/>
        // <Stack />
    );
}