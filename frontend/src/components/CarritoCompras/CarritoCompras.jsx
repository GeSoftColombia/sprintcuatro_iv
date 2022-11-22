import { useContext, useState } from "react"
import { DataContext } from "../../Context/DataProvider"
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

export const CarritoCompras = () => {

    const provider = useContext(DataContext);
    var itemSubtotal= 0;

    const [subtotal,setSubTotal] = useState(0);
    const [iva,setIva] = useState(0);
    const [total,setTotal] = useState(0);

    if(provider.carrito.length <= 0){
        return(
            <div class="alert alert-warning" role="alert">
                Aun no tiene elementos en el carrito de compras.
            </div>
        )
    }

    provider.carrito.map((object,index) => {
        var item = subtotal;
        console.log(itemSubtotal = itemSubtotal + object.precio);
        //setSubTotal(item =  item + object.precio)
    })

    //setSubTotal(itemSubtotal);

    return(
       <div className="continer">
        <div className="row mt-2">
            <div className="col">
                <h1>Mi carrito de compras</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-6">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre articulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       provider.carrito.map((object,index) => {
                            return <tr>
                                        <td>{object.id}</td>
                                        <td>{object.nombre}</td>
                                        <td>${object.precio}</td>
                                        <td><button className="btn btn-primary">+</button>
                                                <input value={1} type="text"></input>
                                            <button className="btn btn-danger">-</button></td>
                                        <td><box-icon type='solid' name='trash'></box-icon></td>
                                    </tr>
                       }) 
                   }
                </tbody>
            </Table>
            </div>
            <div className="col-6 align-middle">
                <div className="card align-middle" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Resumen de su compra</h5>
                        <div className="row">
                            <div className="col-6">SubTotal:</div>
                            <div className="col-6">{subtotal}</div>
                        </div>
                        <div className="row">
                            <div className="col-6">IVA:</div>
                            <div className="col-6">{iva}</div>
                        </div>
                        <div className="row">
                            <div className="col-6">Total:</div>
                            <div className="col-6">{total}</div>
                        </div>
                        <hr></hr>
                        <Link className="btn btn-success" to="/Checkout">Pagar!</Link>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}