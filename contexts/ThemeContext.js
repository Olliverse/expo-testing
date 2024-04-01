import React, {createContext, useContext, useMemo, useState} from 'react';
import PropTypes from "prop-types";


const colors = {
    light: {
        background: '#F5F5F5',
        primary: '#007AFF',
        secondary: '#9C27B0',
        text: '#000000',
        font: '#000000',
    },
    dark: {
        background: '#212121',
        primary: '#FF4081',
        secondary: '#4CAF50',
        text: '#FFFFFF',
        font: '#FFFFFF',
    },
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
