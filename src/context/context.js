import { createContext,useState } from "react";


export const themes= {
    dark:{
        name : 'dark',
        backgroundColor: 'gray',
        color : 'white',
    },
    light:{
        name : 'light',
        backgroundColor: 'white',
        color : 'black',
    }
}

const ThemeContext = createContext({...themes.dark});

export default ThemeContext;


export const ThemeContextProvider = function({children}){
    const [theme,setTheme] = useState(themes.dark);
    return (
        <ThemeContext.Provider value={{...theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}