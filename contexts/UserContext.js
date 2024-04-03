import React, {createContext, useContext, useMemo, useState} from 'react';
import PropTypes from "prop-types";


const UserContext = createContext(undefined);

export const CurrentUserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(undefined);

    const contextValue = useMemo(() => ({currentUser, setCurrentUser}), [currentUser]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

CurrentUserProvider.propTypes = {
    children: PropTypes.any,
};

export const useCurrentUserState = () => useContext(UserContext);
