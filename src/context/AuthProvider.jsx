import React, { createContext } from 'react';
import { getLocalStorage } from '../utlis/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const data = getLocalStorage();
    console.log(data);

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
