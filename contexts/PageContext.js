import React, {createContext, useContext, useMemo, useState} from 'react';
import PropTypes from "prop-types";

const DEFAULT_VALUE = 2;

const PageContext = createContext(undefined);

export const CurrentPageProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState(DEFAULT_VALUE);
    const resetCurrentPage = () => {
        setCurrentPage(DEFAULT_VALUE);
    };

    // TODO: Prevent close logic on start menu
    // useEffect(() => {
    //     const backAction = () => {
    //         if (router.canGoBack()) {
    //             return false; // Use router logic
    //         }
    //         console.log(currentPage)
    //         if (currentPage === DEFAULT_VALUE) {
    //             console.log("closing")
    //             BackHandler.exitApp()
    //             return false;
    //         } else {
    //             console.log("go page " + DEFAULT_VALUE)
    //             setCurrentPage(DEFAULT_VALUE)
    //             return true; // Prevents closing and go to start
    //         }
    //     };
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    //
    //     return () => {
    //         backHandler.remove()
    //     };
    // }, []);

    const contextValue = useMemo(() => ({currentPage, setCurrentPage, resetCurrentPage}), [currentPage]);

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
