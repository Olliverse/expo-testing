import React, {createContext, useContext, useMemo, useState} from 'react';
import PropTypes from "prop-types";


const UserContext = createContext(undefined);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(undefined);

    const contextValue = useMemo(() => ({user, setUser}), [user]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.any,
};

export const useUser = () => useContext(UserContext);
