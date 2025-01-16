'use client';
import * as React from "react";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import Themes from "src/modules/Theme/ThemeConfig"
import useMediaQuery from "@mui/material/useMediaQuery";
import {useEffect} from "react";
import {ReactNode} from "react";
import {AllThemes} from "src/modules/Theme/ThemeTypes";

const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: () => {console.log("hello!")}
});

interface ThemeProvideProps {
    children: ReactNode;
}

/**
 * Wraps the theme provided from styled components and adds
 * our light/dark functionality
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const ApplicationThemeProvider: React.FC<ThemeProvideProps> = ({children}) => {
    const [theme, setTheme] = useState("light");
    const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme) {
            setTheme(storedTheme);

        } else if (prefersDark) {
            setTheme("dark");
        }
    }, [prefersDark]);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme); // Update the theme state
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={Themes[theme as keyof AllThemes] || Themes.light}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
};

export {ApplicationThemeProvider, ThemeContext};
