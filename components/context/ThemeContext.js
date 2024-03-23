import React, {createContext, useContext, useMemo, useState} from 'react';
import PropTypes from "prop-types";

const DEFAULT_VALUE = 'light'
const ThemeContext = createContext(DEFAULT_VALUE);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(DEFAULT_VALUE);
    const contextValue = useMemo(() => ({theme, setTheme}), [theme]);

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
