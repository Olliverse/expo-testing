import React, {createContext, useContext, useMemo, useState} from 'react';
import PropTypes from "prop-types";
import {darkColor, lightColor} from "../styles/colors";


const colors = {
    light: lightColor,
    dark: darkColor
};

const DEFAULT_VALUE = 'light'
const ThemeContext = createContext(DEFAULT_VALUE);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(DEFAULT_VALUE);
    const contextValue = useMemo(() => ({theme, setTheme, colors: colors[theme]}), [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.any,
};

export const useThemeState = () => useContext(ThemeContext);
