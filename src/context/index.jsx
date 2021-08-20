import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const searchContext = createContext()

export const SearchProvider = ({children}) => {

    const [ efeito, setEfeito ] = useState([])
    const [ page, setPage] = useState(false)


    function changePage(){
        setPage(true)
    }


    return (
        <searchContext.Provider value={{ efeito, setEfeito, changePage, page}}>
          {children}  
        </searchContext.Provider>
      )
    }
