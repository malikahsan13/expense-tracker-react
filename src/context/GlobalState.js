import React, { createContext, useContext, useReducer} from "react"
import AppReducer from "./AppReducer"

// set initial state
const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

// create Context
export const GlobalContext = createContext(initialState); 

// create provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return <GlobalContext.Provider value={{transactions: state.transactions}}>
        {children}
    </GlobalContext.Provider>

};