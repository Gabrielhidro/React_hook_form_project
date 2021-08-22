import { createContext, useState } from "react";

export const searchContext = createContext()

export const SearchProvider = ({children}) => {

    const [ convertArr, setConvertArr ] = useState([])
    const [ page, setPage] = useState(false)

    function changePage(){
        setPage(true)
    }


    return (
        <searchContext.Provider value={{ convertArr, setConvertArr, changePage, page}}>
          {children}  
        </searchContext.Provider>
      )
    }
