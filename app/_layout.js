import {Slot} from 'expo-router';
import {CurrentPageProvider} from "../components/context/PageContext";
import {ThemeProvider} from "../components/context/ThemeContext";

export default function HomeLayout() {
    return (
        <ThemeProvider>
            <CurrentPageProvider>
                <Slot/>
            </CurrentPageProvider>
        </ThemeProvider>
    )
}