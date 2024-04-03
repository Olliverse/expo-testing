import {Slot} from 'expo-router';
import {CurrentPageProvider} from "../contexts/PageContext";
import {ThemeProvider} from "../contexts/ThemeContext";
import {CurrentUserProvider} from "../contexts/UserContext";

/*
* This is the entrypoint of the application and can be defined in some of the config files
* */
export default function HomeLayout() {
    return (
        <ThemeProvider>
            <CurrentUserProvider>
                <CurrentPageProvider>
                    <Slot/>
                </CurrentPageProvider>
            </CurrentUserProvider>
        </ThemeProvider>
    )
}