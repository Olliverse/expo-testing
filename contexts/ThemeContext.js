import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {dark, light} from "../styles/colors";

const THEMES = {
    light: light,
    dark: dark
};

const DEFAULT_VALUE = 'light'
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(DEFAULT_VALUE);
    const [colors, setColors] = useState(THEMES[DEFAULT_VALUE]);

    useEffect(() => {
        setColors(THEMES[theme]);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme: colors, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.any,
};

export const useThemeState = () => useContext(ThemeContext);
