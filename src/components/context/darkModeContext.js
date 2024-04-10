import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer.js";

const INITIAL_STATE = {
    darkmode: false,
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

    return <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch}}>
    {children}
    </DarkModeContext.Provider>
}