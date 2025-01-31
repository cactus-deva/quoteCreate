import { createContext, useState } from "react";
export const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode)
    }

    const randomBackgroundColor = () => {
        let r = Math.floor(Math.random()*255)
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)

        let color = `rgb(${r}, ${g}, ${b})`
        return color
    }

    return (
        <DarkModeContext.Provider value={
            {
                isDarkMode,
                toggleDarkMode,
                randomBackgroundColor,
            }
        }>
            {children}
        </DarkModeContext.Provider>
    )
}