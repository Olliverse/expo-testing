import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from "prop-types";

const THEMES = {
    light: {
        background: '#F5F5F5',
        primary1: '#005EA5',
        primary2: '#1A89FF',
        primary3: '#4A90E2',
        secondary1: '#900C3F',
        secondary2: '#C70039',
        secondary3: '#E6002A',
        text: '#000000',
        font: '#000000',
        complementary: '#FF0000',
        accent: '#FFC107',
    },
    dark: {
        background: '#212121',
        primary1: '#003566',
        primary2: '#005EA5',
        primary3: '#0077B5',
        secondary1: '#64001A',
        secondary2: '#900C3F',
        secondary3: '#C70039',
        text: '#FFFFFF',
        font: '#FFFFFF',
        complementary: '#FFFF00',
        accent: '#00FF00',
    }
};

const DEFAULT_VALUE = 'light'
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(DEFAULT_VALUE);
    const [colors, setColors] = useState(THEMES[DEFAULT_VALUE]);

    useEffect(() => {
        console.log("Setting to: ", theme)
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
