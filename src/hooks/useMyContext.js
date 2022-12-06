import { MyContext } from "../context/MyContext";
import { useContext } from "react";

export const useMyContext = () =>{
    const context = useContext(MyContext)

    if(!context){
        throw Error('conext must be used in workout context proivder')
    }

    return context
}