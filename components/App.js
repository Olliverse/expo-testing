import React from 'react';
import {useThemeState} from "../contexts/ThemeContext";
import {Stack} from "expo-router";


export default function App() {
    const {theme} = useThemeState();
    return (
        <Stack screenOptions={{
            animation: "slide_from_bottom",
            headerShown: false,
            headerStyle: {
                backgroundColor: theme.primary1,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}/>
    );
}