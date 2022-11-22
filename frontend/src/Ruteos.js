import { Route, Routes } from "react-router-dom"
import { AddProducto } from "./components/AddProducto/AddProducto"
import { Inicio } from "./components/Inicio/Inicio"
import { AdminCategorias } from "./components/AdminCategorias/AdminCategorias"
import { ProductoCategoria } from "./components/ProductoCategoria/ProductoCategoria"
import { Carrito } from "./components/Carrito/Carrito"
import { CarritoCompras } from "./components/CarritoCompras/CarritoCompras"
import categoriaModel from "./models/categoriaModel"
import { InfoDomilicio } from "./components/InfoDomilicio/InfoDomilicio"
import { FormularioCategoria } from "./components/FormularioCategoria/FormularioCategoria"
import {Login} from './components/Login/Login'
import {Registro} from './components/Registro/Registro'
import {Ventas} from './components/Ventas/ventas'


export const Ruteos = () =>{

    const categorias = categoriaModel()

    return(
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/nuevo" element={<AddProducto/>}></Route>
            <Route path="/MiCarrito" element={<CarritoCompras></CarritoCompras>}></Route>
            <Route path="/nuevacategoria" element={<FormularioCategoria></FormularioCategoria>}></Route>
            <Route path="/Checkout" element={<InfoDomilicio></InfoDomilicio>}></Route>
            <Route path="/Ventas" element={<Ventas></Ventas>}></Route>
            {
                categorias.map((object,index) => {
                    return <Route key={index} path={object.nombre} element={<ProductoCategoria categoria={object} />}></Route>
                })
            }
        </Routes>
    )
}