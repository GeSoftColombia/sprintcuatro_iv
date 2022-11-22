import './AddProducto.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



export const AddProducto = () => {

    return(
        <div className='container text-align-center'>
            <div className='row'>
            <h4>Ingresar los datos para el nuevo producto</h4>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre producto</Form.Label>
                        <Form.Control type="text" placeholder="Por favor ingrese el Nombre del producto" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" placeholder="Por favor coloque la descripción del producto" />
                    </Form.Group>

                    <Form.Label>Valor</Form.Label>
                    <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control placeholder="Por favor coloque el valor del producto" />
                    <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="text" placeholder="Por favor coloque la imagen del producto" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
        </div>
    )

}