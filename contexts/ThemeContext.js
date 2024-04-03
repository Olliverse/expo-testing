import React, {createContext, useContext, useMemo, useState} from 'react';
import PropTypes from "prop-types";
import {light} from "../styles/colors";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(light);

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
