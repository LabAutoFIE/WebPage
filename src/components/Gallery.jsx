import { Carousel } from 'react-bootstrap';
import styles from '@/styles/gallery.module.css';

const Gallery = () => {
    const images = [
        {
            src: "/images/mclaren-p1.webp",
            titulo: "Mc Laren P1 concept",
            descripcion: "Vehículo de alta gama.",
            width: 312,
            height: 216,
            etchpriority: "high",
        },
        {
            src: "/images/keating-berus.webp",
            titulo: "Keating Berus",
            descripcion: "1490 kW de potencia.",
            width: 312,
            height: 216,
            etchpriority: "high",
        },
        {
            src: "/images/citroen-c6.webp",
            titulo: "Citröen C6 GT Concept",
            descripcion: "Motor V8 4.0 l año 2008.",
            width: 312,
            height: 216,
            etchpriority: "high",
        },
        {
            src: "https://picsum.photos/800/400?random=1",
            titulo: "Imagen aleatoria 1",
            descripcion: "Ejemplo de foto de prueba.",
            width: 800,
            height: 400,
            etchpriority: "high",
        },
        {
            src: "https://picsum.photos/800/400?random=2",
            titulo: "Imagen aleatoria 2",
            descripcion: "Otra foto de ejemplo para el carrusel.",
            width: 800,
            height: 400,
            etchpriority: "high",
        }
    ];

    return (
        <Carousel className={styles.galleryCarousel}
            interval={4000}        // ⏱ tiempo entre slides
            pause="hover"          // ⏸ pausa al pasar el mouse
            indicators={true}      // 🔘 indicadores visibles
            controls={true}        // ⬅️➡️ controles visibles
            aria-label="Galería de imágenes de vehículos de concepto"
        >
            {images.map((img, index) => (
                <Carousel.Item key={index}>
                    <figure>
                        <img
                            className={`d-block w-100 ${styles.galleryImage}`}
                            src={img.src}
                            width={img.width}
                            height={img.height}
                            fetchPriority={index === 0 ? "high" : undefined}
                            loading={index === 0 ? "eager" : "lazy"}
                            alt={img.titulo}
                        />
                        <Carousel.Caption className={styles.galleryCaption}>
                            <figcaption>
                                <p className='h3'>{img.titulo}</p>
                                <p>{img.descripcion}</p>
                            </figcaption>
                        </Carousel.Caption>
                    </figure>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Gallery;