import { useContext } from 'react';
import { useServiciosContext } from '@/context/ServiciosContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import loaderGif from '../assets/images/Loader.gif';
import { CarritoContext } from '@/context/CarritoContext';
import { Helmet } from 'react-helmet-async';   // 👈 p/ SEO
import '@/styles/servicios.css';

const Servicios = () => {
    // Uso contextos Carrito /Servicios:
    const { agregarAlCarrito } = useContext(CarritoContext);
    const { servicios, cargando, error } = useServiciosContext();

    if (cargando) return (
        <div className="loader-container">
            <img src={loaderGif} alt="Cargando servicios..." className="loader" loading="lazy" />
            <p className="loader-text">Cargando servicios...</p>
        </div>
    );
    if (error) return <p>{error}</p>;

    return (
        <section className="servicios-grid">
            {/* SEO c/ Helmet */}
            <Helmet>

                <title>Servicios disponibles - LabAuto</title>
                <meta
                    name="description"
                    content="Explora los servicios disponibles en el laboratorio automotriz: pruebas, ensayos y más."
                />
            </Helmet>
            <h1>Servicios disponibles:</h1>

            {servicios.map(servicio => (
                <article key={servicio.id} className="servicio-card">
                    <img src={servicio.image} alt={`Imagen del servicio ${servicio.title}`} height={120} width={120} loading="lazy" />
                    <h3>{servicio.title}</h3>
                    {/*<p>{servicio.description}</p >*/}
                    <Link to={`/servicios/${servicio.id}`} className="link-detalles">
                        <FontAwesomeIcon icon={faFileLines} /> Detalle
                    </Link>
                    <p className="precio">${servicio.price}</p>
                    <div className="boton-agregar-container">
                        <button onClick={() => agregarAlCarrito(servicio)} className="boton-agregar"
                            aria-label={`Agregar ${servicio.title} al carrito`} >
                            <FontAwesomeIcon icon={faCartPlus} /> Agregar
                        </button>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Servicios;
