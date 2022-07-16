import { createContext, useReducer,useContext, useEffect} from "react";
import Data from "./Data";
import reducer from "./reducer";

const appContext=createContext()

const initialState={
    itemCount:1,
    carts:Data,
    totalAmount:11,
}


 const AppProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer, initialState)


    // to increase item quantity by 1
    const increaseItem=(id)=>{
     dispatch({
        type:"INCREMENT",
        payload:id
    })}


        // to decrease item quantity by 1
    const decreaseItem=(id)=>{
        dispatch({
           type:"DECREMENT",
           payload:id
       })} 



    //    to delete all items at once
    const clearItem=(id)=>{
        dispatch({
            type:"CLEAR_ITEM",
            payload:id,
        })
    }

    // to delete individual item
    const removeItem=(id)=>{
       return dispatch({
            type:"REMOVE",
            payload:id,
        })
    }

    // using useEffect to update the data
    useEffect(() => {
      dispatch({
        type:"ITEM_COUNT"
      })
    }, [state.carts])
    

    return (
        <appContext.Provider value={{...state,clearItem,removeItem,increaseItem,decreaseItem}}>
            {children}
        </appContext.Provider>
    )
}

export  const useGlobalContext=()=>{
    return useContext(appContext )
}  
export { AppProvider,appContext}