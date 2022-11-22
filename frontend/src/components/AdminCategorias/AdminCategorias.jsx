import { Comidas } from "../Comidas/Comidas";
import { Bebidas } from "../Bebidas/Bebidas";
import { Miscelaneas } from "../Miscelaneas/Miscelaneas";

export const AdminCategorias = (props) => {
    const nombreCategoria = props.name;

    if(nombreCategoria === "Comidas"){
        return(
            <>
               <Comidas></Comidas>
            </>
        )
    }
    else if(nombreCategoria === "Bebidas"){
        return(
            <>
               <Bebidas></Bebidas>
            </>
        )
    }
    else{
        return(
            <>
               <Miscelaneas></Miscelaneas>
            </>
        )
    }
}