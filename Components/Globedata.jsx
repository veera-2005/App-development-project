
import React, { useMemo, useState } from 'react';

export const Context = React.createContext();

const GlobeData = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(() => {
        const data = localStorage.getItem("LogIn");
        return data ? JSON.parse(data) : false;
    });

    const [userData, setUserDataState] = useState(() => {
        const data = localStorage.getItem("userData");
        return data ? JSON.parse(data) : null;
    });

    const [isAdmin, setIsAdmin] = useState(() => {
        const data = localStorage.getItem("isAdmin");
        return data ? JSON.parse(data) : false;
    });

    const setUserData = (data) => {
        setUserDataState(data);
        localStorage.setItem("userData", JSON.stringify(data));
    };

    const Contexts = useMemo(() => {
        return {
            loggedIn,
            userData,
            isAdmin,
            LogIn: (user) => {
                setLoggedIn(true);
                setUserData(user);
                setIsAdmin(user.Role === 'Admin');
                localStorage.setItem("LogIn", JSON.stringify(true));
                localStorage.setItem("isAdmin", JSON.stringify(user.Role === 'Admin'));
            },
            LogOut: () => {
                setLoggedIn(false);
                setUserData(null);
                setIsAdmin(false);
                localStorage.setItem("LogIn", JSON.stringify(false));
                localStorage.setItem("isAdmin", JSON.stringify(false));
            },
            setUserData,
        };
    }, [loggedIn, userData, isAdmin]);

    return (
        <Context.Provider value={Contexts}>
            {children}
        </Context.Provider>
    );
};

export default GlobeData;