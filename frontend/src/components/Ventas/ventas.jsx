
import React, {useState} from 'react'
import data from '../../mock-data.json'

export function Meta(){
    return{
        title: 'GeSoftCol - Consolidado de Ventas',
        description: ''
    }
}


export const Ventas = () => {

  const [registros, setRegistros] = useState(data);

  return (
    <table className="table">
        <h1 className="heading">
            Consolidado de Ventas
        </h1>

        <div className='col'>
            <div className='col'>
                    <h2>
                        Reporte de Ventas
                    </h2>

                    <div>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Factura de Venta</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead> 

                                <tbody>
                                    { registros.map((registro) => (
                                        <tr>
                                            <td>{registro.fecha}</td>
                                            <td>{registro.id}</td>
                                            <td>{registro.valor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                </div>

                <table className="table table-striped">
                    <h3>
                        Consolidado de ventas
                    </h3>
                    <p>
                        Total: $ 1.750.000
                    </p>
                </table>
        </div>

    </table>
  )
}

export default Ventas

