import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const UserContext = createContext();

//useTheme
export const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
};

//ThemeProvider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`theme-${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
};


//UserContext
export const useUser = () => {
    const context = useContext(UserContext);
    return context;
};
//UserProvider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, login }}>
            {children}
        </UserContext.Provider>
    );
};