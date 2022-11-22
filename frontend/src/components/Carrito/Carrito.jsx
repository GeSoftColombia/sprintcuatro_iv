import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider"



export const Carrito = () => {


    const provider = useContext(DataContext);

    const [cantidad,setCantidad] = useState(provider.carrito.length);

    useEffect(() => {
        setCantidad(provider.carrito.length)
    })

    return(
        <>
            <Link to='/MiCarrito'>
            <box-icon name='cart'></box-icon>
            </Link>
            <h6>{cantidad}</h6>
        </>
    )
}