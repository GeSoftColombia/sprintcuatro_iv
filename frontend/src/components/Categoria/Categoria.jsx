import { Link } from "react-router-dom";



export const Categoria = (props)=> {

    return(
        <div class="card mb-4">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={props.info.imagen} className="card-img-top" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">{props.info.nombre}</h3>
        <p class="card-text">{props.info.descripcion}</p>
        <Link className="btn btn-primary" to={props.info.nombre}>BUSCAR PRODUCTOS</Link>
      </div>
    </div>
  </div>
</div>
)
}



