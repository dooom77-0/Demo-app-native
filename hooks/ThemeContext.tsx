import { createContext, useState } from "react";
type ThemeType = 'light' | 'dark';

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
    colors: {
        light: {
            background: string;
            text: string;
        };
        dark: {
            background: string;
            text: string;
        };
    };
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>("light");
    
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const colors = {
        light: {
            background: "#F2F2F2",
            text: "#121212",
        },
        dark: {
            background: "#1A1A1A",
            text: "#FFFFFF",
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
            {children}
        </ThemeContext.Provider>
    );

}