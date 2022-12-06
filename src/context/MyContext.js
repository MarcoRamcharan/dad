import { createContext, useReducer} from "react";

export const MyContext = createContext()

export const myReducer = (state, action) => {
    switch(action.type){

        case 'SET_PROJECT':
            return {...state, project:action.payload}

        default:
            return state
    }
}








export const MyContextProvider = ({children}) => {
    const [state, dispatch]= useReducer(myReducer,{
        project: '/projects/estates'
    })
    

    console.log('mycontextstate', state)

    return(
        <MyContext.Provider value={{...state, dispatch}}>
            {children}
        </MyContext.Provider>
    )
}