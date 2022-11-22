import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
import { Link } from "react-router-dom";
import { AppCarousel } from "../AppCarousel/AppCarousel";
import { Carrito } from "../Carrito/Carrito";
import categoriaModel from "../../models/categoriaModel";
import Login from "../Login/Login";

export const Header = () => {
  const Titulo = "Gesoftcol";

  const categorias = categoriaModel();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {Titulo}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  {categorias.map((object, key) => {
                    return (
                      <li key={key}>
                        <Link class="dropdown-item" to={object.nombre}>
                          {object.nombre}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <NavDropdown title="Administración" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/nuevo">Nuevo Producto</NavDropdown.Item>
              <NavDropdown.Item href="/nuevacategoria">
                Nueva Categoria
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Ventas">
                Resumen Ventas
              </NavDropdown.Item>
            </NavDropdown>  
            </ul>
            
            
            
            <Carrito></Carrito>
            <div>
              <Link className="btn btn-dark" to="/login">
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
