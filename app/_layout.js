import {Slot} from 'expo-router';
import {CurrentPageProvider} from "../components/context/PageContext";

export default function HomeLayout() {
    return (
        <CurrentPageProvider>
            <Slot/>
        </CurrentPageProvider>
    )
}
// <ThemeProvider value={DarkTheme}>
//     <Slot />
// </ThemeProvider>