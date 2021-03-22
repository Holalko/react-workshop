// TODO: create dark mode context here
import React, {FC, useState} from "react";

type DarkModeContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext = React.createContext<DarkModeContextType>({
        isDarkMode: false,
        toggleDarkMode: () => null
    }
);

export const DarkModeProvider: FC = (props) => {
    const [darkMode, setDarkMode] = useState(false);
    return <DarkModeContext.Provider {...props}
                                     value={{
                                         isDarkMode: darkMode,
                                         toggleDarkMode: () => setDarkMode(prev => !prev)
                                     }}/>
}


export const useDarkMode = (): DarkModeContextType => {
    const context = React.useContext(DarkModeContext);
    if (!context) {
        throw new Error("Must be used inside DarkModeProvider!")
    }
    return context;
}