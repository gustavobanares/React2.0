import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
    // switch
}


export const TitleColorContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(titleColorReducer, {color: 'purple'})

    console.log('Title color context:', state)

    return(
        <TitleColorContextProvider value={{ ...state}}>{children}</TitleColorContextProvider>
    )

}