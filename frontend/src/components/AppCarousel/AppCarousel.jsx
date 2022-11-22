import './AppCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import ImagenUno from '../../images/imagenuno.jpg';
import ImagenDos from '../../images/imagendos.jpg';
import ImagenTres from '../../images/imagentres.jpg';
import ImagenCuatro from '../../images/imagencuatro.jpg';
import ImagenCinco from '../../images/imagencinco.jpg';
import ImagenSeis from '../../images/imagenseis.jpg';
import ImagenSiete from '../../images/imagensiete.jpg';



export const AppCarousel = () =>{

    return(
        <>

            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ImagenUno}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Cartagena de Indias, la ciudada amurrallada</h3>
                    <p>Hay muchas joyas bien escondidas en este lugar, patrimonio mundial de la UNESCO</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ImagenDos}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Pasear, beber, comer, descansar. Repetir</h3>
                    <p>Estos hermosos monumentos nacionales están conectados por coloridas callejuelas, cuyos balcones de madera grabada y flores exóticas, se asoman a los viajeros.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ImagenTres}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Brisa, sol y playa</h3>
                    <p>En estos paradisíacos lugares podrán desconectarse de la rutina y recargar energía.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ImagenCuatro}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Playa Blanca</h3>
                    <p>Al ser parte del Caribe, una vez que esté en las Islas del Rosario, puede esperar que todas las playas tengan ese tono perfecto de agua turquesa y la arena más blanca y suave para descansar</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ImagenCinco}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Conoce el turismo gastronomico de Cartagena</h3>
                    <p>Aprender de historia es necesario, pero qué mejor forma de hacerlo que con grandes platos</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ImagenSeis}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Conoce el turismo gastronomico de Cartagena</h3>
                    <p>La gastronomía de Cartagena es popular por su cocina tradicional y la calidad de sus materias primas, con base fundamental en los productos del mar y los productos del campo. ¡Te costará elegir entre su gran oferta gastronómica!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ImagenSiete}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>La gastronomia tipica cartagenera te dejara con la boca abierta</h3>
                    <p>¿No crees? ¡Atreve a probarla!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                </Carousel>
        </>

    )

}