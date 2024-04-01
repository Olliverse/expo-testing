import {Slot} from 'expo-router';
import {CurrentPageProvider} from "../contexts/PageContext";
import {ThemeProvider} from "../contexts/ThemeContext";

export default function HomeLayout() {
    return (
        <ThemeProvider>
            <CurrentPageProvider>
                <Slot/>
            </CurrentPageProvider>
        </ThemeProvider>
    )
}