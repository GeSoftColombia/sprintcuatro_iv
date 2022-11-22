import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import categoriaModel from "../../models/categoriaModel";
import { AppCarousel } from "../AppCarousel/AppCarousel";
import {AppFooter} from '../Footer/Footer';
import { Categoria } from "../Categoria/Categoria";


export const Inicio = () =>{

   var categorias = categoriaModel();

    return(
      <>
        <AppCarousel></AppCarousel>

        <div className="container">
          <div className="row">
              {
                categorias.map((object,index) => {
                      return <Categoria info={object}></Categoria>
                  })
              }
          </div>
        </div>
        <AppFooter></AppFooter>
      </>
    )
}