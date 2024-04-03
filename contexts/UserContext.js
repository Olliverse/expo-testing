import React, {createContext, useContext, useMemo, useState} from 'react';
import PropTypes from "prop-types";

const DEFAULT_VALUE = 2;

const PageContext = createContext(undefined);

export const CurrentUserProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState(DEFAULT_VALUE);
    const resetCurrentPage = () => {
        setCurrentPage(DEFAULT_VALUE);
    };

    const contextValue = useMemo(() => ({currentPage, setCurrentPage, resetCurrentPage}), [currentPage]);

    return (
        <PageContext.Provider value={contextValue}>
            {children}
        </PageContext.Provider>
    );
};

CurrentUserProvider.propTypes = {
    children: PropTypes.any,
};

export const useCurrentUserState = () => useContext(UserContext);
