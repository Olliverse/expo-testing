import {CurrentPageProvider} from "../contexts/PageContext";
import {ThemeProvider} from "../contexts/ThemeContext";
import {AuthProvider} from "../contexts/UserContext";
import React from "react";
import App from "../components/App";

/*
* This is the entrypoint of the application and can be defined in some of the config files
* */
export default function HomeLayout() {
    require("../firebaseConfig");


    return (
        <ThemeProvider>
            <AuthProvider>
                <CurrentPageProvider>
                    <App/>
                </CurrentPageProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}