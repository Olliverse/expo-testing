import React, {createContext, useContext, useMemo, useState} from 'react';
import PropTypes from "prop-types";

const DEFAULT_VALUE = 2;

const PageContext = createContext({undefined});

export const CurrentPageProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState(DEFAULT_VALUE);
    const contextValue = useMemo(() => ({currentPage, setCurrentPage}), [currentPage]);

    return (
        <PageContext.Provider value={contextValue}>
            {children}
        </PageContext.Provider>
    );
};

CurrentPageProvider.propTypes = {
    children: PropTypes.any,
};

export const useCurrentPageState = () => useContext(PageContext);
