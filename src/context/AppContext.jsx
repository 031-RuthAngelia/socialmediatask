import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
    const [followedUsers, setFollowedUsers] = useState([]);
    const [theme, setTheme] = useState("light");

    const toggleFollow = (id) => {
        setFollowedUsers((prevFollowedUsers) => {
            if (prevFollowedUsers.includes(id)) {
                return prevFollowedUsers.filter((userId) => userId !== id); 
            } else {
                return [...prevFollowedUsers, id];
            }
        });
    };

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <AppContext.Provider value={{ followedUsers, toggleFollow, theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
};