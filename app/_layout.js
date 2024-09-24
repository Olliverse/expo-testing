import {CurrentPageProvider} from "../contexts/PageContext";
import {ThemeProvider} from "../contexts/ThemeContext";
import React from "react";
import App from "../components/App";
import {I18NProvider} from "../contexts/I18NContext";

/*
* This is the entrypoint of the application and can be defined in some of the config files
* */
export default function HomeLayout() {
    return (

        <ThemeProvider>
            <I18NProvider>
                <CurrentPageProvider>
                    <App/>
                </CurrentPageProvider>
            </I18NProvider>
        </ThemeProvider>
    )
}