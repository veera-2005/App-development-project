// import React, { useMemo, useState } from 'react';

// export const Context = React.createContext();

// const GlobeData = ({ children }) => {
//     const [loggedIn, setLoggedIn] = useState(() => {
//         const data = localStorage.getItem("LogIn");
//         return data ? JSON.parse(data) : false;
//     });

//     const [userData, setUserDataState] = useState(() => {
//         const data = localStorage.getItem("userData");
//         return data ? JSON.parse(data) : null;
//     });

//     const [isAdmin, setIsAdmin] = useState(() => {
//         const data = localStorage.getItem("isAdmin");
//         return data ? JSON.parse(data) : false;
//     });

//     const [isManager, setIsManager] = useState(() => {
//         const data = localStorage.getItem("isManager");
//         return data ? JSON.parse(data) : false;
//     });

//     const role = useMemo(() => {
//         if (isAdmin) return 'Admin';
//         if (isManager) return 'Manager';
//         return 'user'; // Default role for logged-in users who are not Admin or Manager
//     }, [isAdmin, isManager]);

//     const setUserData = (data) => {
//         setUserDataState(data);
//         localStorage.setItem("userData", JSON.stringify(data));
//     };

//     const Contexts = useMemo(() => {
//         return {
//             loggedIn,
//             userData,
//             isAdmin,
//             isManager,
//             role, // Add role to context
//             LogIn: (user) => {
//                 setLoggedIn(true);
//                 setUserData(user);
//                 setIsAdmin(user.role === 'Admin');
//                 setIsManager(user.role === 'Manager');
//                 localStorage.setItem("LogIn", JSON.stringify(true));
//                 localStorage.setItem("isAdmin", JSON.stringify(user.role === 'Admin'));
//                 localStorage.setItem("isManager", JSON.stringify(user.role === 'Manager'));

//             },
//             LogOut: () => {
//                 setLoggedIn(false);
//                 setUserData(null);
//                 setIsAdmin(false);
//                 setIsManager(false);
//                 localStorage.setItem("LogIn", JSON.stringify(false));
//                 localStorage.setItem("isAdmin", JSON.stringify(false));
//                 localStorage.setItem("isManager", JSON.stringify(false));
//             },
//             setUserData,
//         };
//     }, [loggedIn, userData, isAdmin, isManager, role]);

//     return (
//         <Context.Provider value={Contexts}>
//             {children}
//         </Context.Provider>
//     );
// };

// export default GlobeData;

// import React, { useMemo, useState } from 'react';

// export const Context = React.createContext();

// const GlobeData = ({ children }) => {
//     const [loggedIn, setLoggedIn] = useState(() => {
//         const data = localStorage.getItem("LogIn");
//         return data ? JSON.parse(data) : false;
//     });

//     const [userData, setUserDataState] = useState(() => {
//         const data = localStorage.getItem("userData");
//         return data ? JSON.parse(data) : null;
//     });

//     const [isAdmin, setIsAdmin] = useState(() => {
//         const data = localStorage.getItem("isAdmin");
//         return data ? JSON.parse(data) : false;
//     });

//     const [isManager, setIsManager] = useState(() => {
//         const data = localStorage.getItem("isManager");
//         return data ? JSON.parse(data) : false;
//     });

//     const role = useMemo(() => {
//         if (isAdmin) return 'Admin';
//         if (isManager) return 'Manager';
//         return 'user'; // Default role for logged-in users who are not Admin or Manager
//     }, [isAdmin, isManager]);

//     const setUserData = (data) => {
//         setUserDataState(data);
//         localStorage.setItem("userData", JSON.stringify(data));
//     };

//     const Contexts = useMemo(() => {
//         return {
//             loggedIn,
//             userData,
//             isAdmin,
//             isManager,
//             role, // Add role to context
//             LogIn: (user) => {
//                 setLoggedIn(true);
//                 setUserData(user);
//                 setIsAdmin(user.role === 'Admin');
//                 setIsManager(user.role === 'Manager');
//                 localStorage.setItem("LogIn", JSON.stringify(true));
//                 localStorage.setItem("isAdmin", JSON.stringify(user.role === 'Admin'));
//                 localStorage.setItem("isManager", JSON.stringify(user.role === 'Manager'));

//             },
//             LogOut: () => {
//                 setLoggedIn(false);
//                 setUserData(null);
//                 setIsAdmin(false);
//                 setIsManager(false);
//                 localStorage.setItem("LogIn", JSON.stringify(false));
//                 localStorage.setItem("isAdmin", JSON.stringify(false));
//                 localStorage.setItem("isManager", JSON.stringify(false));
//             },
//             setUserData,
//         };
//     }, [loggedIn, userData, isAdmin, isManager, role]);

//     return (
//         <Context.Provider value={Contexts}>
//             {children}
//         </Context.Provider>
//     );
// };

// export default GlobeData;

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

    const [isManager, setIsManager] = useState(() => {
        const data = localStorage.getItem("isManager");
        return data ? JSON.parse(data) : false;
    });

    const setUserData = (data) => {
        setUserDataState(data);
        localStorage.setItem("userData", JSON.stringify(data));
    };

    const contextValue = useMemo(() => ({
        loggedIn,
        userData,
        isAdmin,
        isManager,
        role: isAdmin ? 'Admin' : isManager ? 'Manager' : 'user',
        LogIn: (user) => {
            setLoggedIn(true);
            setUserData(user);
            setIsAdmin(user.role === 'Admin');
            setIsManager(user.role === 'Manager');
            localStorage.setItem("LogIn", JSON.stringify(true));
            localStorage.setItem("isAdmin", JSON.stringify(user.role === 'Admin'));
            localStorage.setItem("isManager", JSON.stringify(user.role === 'Manager'));
        },
        LogOut: () => {
            setLoggedIn(false);
            setUserData(null);
            setIsAdmin(false);
            setIsManager(false);
            localStorage.setItem("LogIn", JSON.stringify(false));
            localStorage.setItem("isAdmin", JSON.stringify(false));
            localStorage.setItem("isManager", JSON.stringify(false));
        },
        setUserData,
    }), [loggedIn, userData, isAdmin, isManager]);

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default GlobeData;























