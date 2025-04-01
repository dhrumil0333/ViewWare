import { createContext, useState } from "react";

// Create Context
export const LogContext = createContext();

export const LogProvider = ({ children }) => {
    const [profile, setProfile] = useState("notUser");
    const [logEmail, setlogEmail] = useState("");

    return (
        <LogContext.Provider value={{ profile, setProfile , logEmail, setlogEmail}}>
            {children}
        </LogContext.Provider>
    );
}; 
 