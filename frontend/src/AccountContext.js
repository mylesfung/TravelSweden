import { createContext, useState, useEffect } from 'react';

// 'createContext()' creates a React Context (reactive global variable/ state container)   then call 'useContext(AccountContext)'
// Default null : no user provided yet with <AccountContext.Provider value={}>
export const AccountContext = createContext(null);

// Export Provider wrapper component
export function AccountProvider({ children }) {
    const [account, setAccount] = useState({ "username": "Anonymous" });

    useEffect(() => {
        async function getCurrentUser() {
            try {
                const response = await fetch('http://localhost:8080/api/service/account/current', {
                    method: "GET",
                    credentials: "include"  // Send JSESSIONID to Spring Security
                });
                if (response.ok) {
                    const data = await response.json();
                    setAccount(data);
                } else if (response.status === 401) {
                    setAccount({ username: "Anonymous" }); // not logged in to Spring Security
                }
            } catch (err) {
                console.error("Error fetching current user:", err);
                setAccount({ username: "Anonymous" });
            }
        }
        getCurrentUser();
        }, []);

    // Provide object value for AccountContext export 
    return <AccountContext.Provider value={{ account, setAccount }}>
        {children}
    </AccountContext.Provider>
    }
