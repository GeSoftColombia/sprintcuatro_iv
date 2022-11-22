import './Comidas.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const Comidas = () =>{

    const listadoComidas = [
        {
            id: 1,
            name:"Consume",
            descripcion: "Sopa de Pescado",
            precio: 10000,
            image:''
        },
        {
            id: 2,
            name:"Salchipapas",
            descripcion: "Plato de papas y salchichas fritas",
            precio: 20000,
            image:''
        },
        {
            id: 3,
            name:"Hamburguesa",
            descripcion: "Jean azul, super bueno",
            precio: 25000,
            image:''
        },
        {
            id: 4,
            name:"Pescado",
            descripcion: "Mojarra 350gr",
            precio: 25000,
            image:''
        },
        {
            id: 5,
            name:"Pollo",
            descripcion: "Plato de Pollo Frito",
            precio: 25000,
            image:''
        },
        {
            id: 6,
            name:"Pollo",
            descripcion: "Pechuga de Pollo",
            precio: 25000,
            image:''
        },
        {
            id: 7,
            name:"Cerdo",
            descripcion: "Lomo de Cerdo",
            precio: 25000,
            image:''
        },
        {
            id: 8,
            name:"Carne",
            descripcion: "Carne a la Plancha",
            precio: 35000,
            image:''
        },
        {
            id: 9,
            name:"Pescado",
            descripcion: "Mojarra de 500gr",
            precio: 35000,
            image:''
        },
        {
            id: 10,
            name:"Pescado",
            descripcion: "Mojarra Roja de 500gr",
            precio: 35000,
            image:''
        },
        {
            id: 11,
            name:"Camarón",
            descripcion: "Ceviche de Camarón",
            precio: 50000,
            image:''
        },
        {
            id: 12,
            name:"Pescado",
            descripcion: "Sierra 500gr",
            precio: 50000,
            image:''
        },
        {
            id: 13,
            name:"Pescado",
            descripcion: "Róbalo 500gr",
            precio: 60000,
            image:''
        },
        {
            id: 14,
            name:"Pescado",
            descripcion: "Cevivhe de Róbalo",
            precio: 50000,
            image:''
        },
        {
            id: 15,
            name:"Pescado",
            descripcion: "Pargo 500gr",
            precio: 70000,
            image:''
        },
        {
            id: 16,
            name:"Camarón",
            descripcion: "Camarón al ajillo",
            precio: 70000,
            image:''
        },
        {
            id: 17,
            name:"Langosta",
            descripcion: "Langosta 500gr",
            precio: 120000,
            image:''
        },
        {
            id: 18,
            name:"Mariscos",
            descripcion: "Cazuela de Mariscos",
            precio: 80000,
            image:''
        },
        {
            id: 19,
            name:"Mariscos",
            descripcion: "Picada Mixta de Mariscos",
            precio: 250000,
            image:''
        }
    ]


    return (
        <>
            {
                listadoComidas.map((value,key) => {
                    return <Card border="primary" className="cards" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={value.image} />
                                <Card.Body>
                                <Card.Title>{value.name}</Card.Title>
                                <Card.Text>
                                   {value.descripcion}
                                </Card.Text>
                                <Card.Text>
                                   $ {value.precio}
                                </Card.Text>
                                <Button variant="primary">
                                    Agregar al carrito
                                    <box-icon name='cart-add'></box-icon>
                                </Button>
                                </Card.Body>
                            </Card>


                })
            }
        </>
    )
}