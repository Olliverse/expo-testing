import React, {createContext, useState, useContext, useMemo} from 'react';

const PageContext = createContext();

export const CurrentPageProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(6);
    const contextValue = useMemo(() => ({ currentPage, setCurrentPage }), [currentPage]);

    return (
        <PageContext.Provider value={contextValue}>
            {children}
        </PageContext.Provider>
    );
};

export const useCurrentPageState = () =>  useContext(PageContext);
