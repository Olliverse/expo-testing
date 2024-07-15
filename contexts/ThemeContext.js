import React, {createContext, useContext, useMemo, useState} from 'react';
import PropTypes from "prop-types";
import {dark, light} from "../styles/colors";
import {useColorScheme} from "react-native";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({children}) => {
    const colorScheme = useColorScheme();

    function determineInitialTheme(schema) {
        if (schema === "light") {
            return light;
        } else if (schema === "dark") {
            return dark;
        } else {
            console.log("Warning: schema was ", schema)
        }
    }

    const [theme, setTheme] = useState(determineInitialTheme(colorScheme));

    const context = useMemo(() => {
        return {theme, setTheme}
    }, [theme]);

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.any,
};

export const useThemeState = () => useContext(ThemeContext);
