import { createContext,useState } from "react";


export const themes= {
    dark:{
        name : 'dark',
        backgroundColor: 'gray',
        color : 'black',
    },
    light:{
        name : 'light',
        backgroundColor: 'blue',
        color : 'white',
    }
}

const ThemeContext = createContext({});

export default ThemeContext;


export const ThemeContextProvider = function({children}){
    const [theme,setTheme] = useState(themes.dark);
    return (
        <ThemeContext.Provider value={{...theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}