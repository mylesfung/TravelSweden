import { createContext, useState, useEffect } from 'react';

// 'createContext()' creates a React Context (reactive global variable/ state container)   then call 'useContext(UserContext)'
// Default null : no user provided yet with <UserContext.Provider value={}>
export const UserContext = createContext(null);

// Export Provider wrapper component
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUsername() {
            try {
                const response = await fetch('https://localhost:8080/api/service/current-user', {method: 'GET'});
                const data = await response.json();
                setUser(data);
            } catch (err) {
            console.error("Error fetching current User: ", err);
            }
        }
        getUsername();
        }, []);

    // Provide user value for UserContext export 
    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
    }
