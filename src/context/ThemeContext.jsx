import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
const [darkMode, setDarkMode] = useState(false);

const toggleTheme = () => {
    setDarkMode(prev => !prev);
};

return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        {children}
    </div>
    </ThemeContext.Provider>
);
};

