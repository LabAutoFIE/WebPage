import { Carousel } from 'react-bootstrap';
import styles from '@/styles/gallery.module.css';

const Gallery = () => {
    const images = [
        {
            src: "https://www.bing.com/th/id/OIP.Hl2BLji3d4QUkcz0fxiO0gHaEK?w=247&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            titulo: "Mc Laren P1 concept",
            descripcion: "Vehículo de alta gama."
        },
        {
            src: "https://www.bing.com/th/id/OIP.rJnAPB0IX9hx7pam9GGqugHaEK?w=248&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            titulo: "Keating Berus",
            descripcion: "1490 kW de potencia."
        },
        {
            src: "https://www.bing.com/th/id/OIP.RtLaLgpWax-V-a9cM2naYgHaEo?w=245&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            titulo: "Citröen C6 GT Concept",
            descripcion: "Motor V8 4.0 l año 2008."
        },
        {
            src: "https://picsum.photos/800/400?random=1",
            titulo: "Imagen aleatoria 1",
            descripcion: "Ejemplo de foto de prueba."
        },
        {
            src: "https://picsum.photos/800/400?random=2",
            titulo: "Imagen aleatoria 2",
            descripcion: "Otra foto de ejemplo para el carrusel."
        }
    ];

    return (
        <Carousel className={styles.galleryCarousel}>
            {images.map((img, index) => (
                <Carousel.Item key={index}>
                    <img
                        className={`d-block w-100 ${styles.galleryImage}`}
                        src={img.src}
                        alt={img.titulo}
                    />
                    <Carousel.Caption className={styles.galleryCaption}>
                        <h5>{img.titulo}</h5>
                        <p>{img.descripcion}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Gallery;