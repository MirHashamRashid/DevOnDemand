import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('theme-1');

   

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };
    useEffect(() =>{
        document.body.className = theme;
    },[theme])
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}