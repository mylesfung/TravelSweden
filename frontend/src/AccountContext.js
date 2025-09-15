import { createContext, useState, useEffect } from 'react';

// 'createContext()' creates a React Context (reactive global variable/ state container)   then call 'useContext(AccountContext)'
// Default null : no user provided yet with <AccountContext.Provider value={}>
export const AccountContext = createContext(null);

// Export Provider wrapper component
export function AccountProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUsername() {
            try {
                const response = await fetch('https://localhost:8080/api/service/account/current', {method: 'GET'});
                const data = await response.json();
                setUser(data);
            } catch (err) {
            console.error("Error fetching current User: ", err);
            }
        }
        getUsername();
        }, []);

    // Provide user value for AccountContext export 
    return <AccountContext.Provider value={user}>
        {children}
    </AccountContext.Provider>
    }
