import { createContext, useEffect, useState } from "react";


export const DataContext = createContext();


export const DataProvider = (props) =>{

    const [carritoCompras,setCarrito] = useState([]);

    useEffect(() =>{
        setCarrito(carritoCompras)
    },[carritoCompras])

    const value = {
        carrito: carritoCompras,
        setCarrito : setCarrito
    }

    return(
        <>
            <DataContext.Provider value={value}>
                {props.children}
            </DataContext.Provider>
        </>
    )
}