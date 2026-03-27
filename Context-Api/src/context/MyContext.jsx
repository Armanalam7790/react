import { createContext, useState } from "react";

export let Mystore = createContext()

export let ContextProvider = ({children}) => {
    const [count, setcount] = useState(0)
    const [toggle, settoggle] = useState('')
    return <Mystore.Provider value={{count,setcount, toggle, settoggle}}>
            {children}
    </Mystore.Provider>
}