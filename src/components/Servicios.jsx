import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import loaderGif from '../assets/images/Loader.gif';
import { CarritoContext } from '@/context/CarritoContext';
import '@/styles/servicios.css';

const Servicios = () => {
    const [servicios, setServicios] = useState([]);
    const { agregarAlCarrito } = useContext(CarritoContext);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    /* API Externa PRODUCTOS / SERVICIOS */
    const URL = 'https://fakestoreapi.com/products?limit=19';

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setServicios(data);
                setCargando(false);
            })
            .catch(error => {
                setError('Error al obtener servicios:', error);
                setCargando(false);
            });
    }, []);

    if (cargando) return (
        <div className="loader-container">
            <img src={loaderGif} alt="Cargando servicios..." className="loader" />
            <p className="loader-text">Cargando servicios...</p>
        </div>
    );
    if (error) return <p>{error}</p>;

    return (
        <section className="servicios-grid">
            <h1>Servicios disponibles:</h1>
            {servicios.map(servicio => (
                <div key={servicio.id} className="servicio-card">
                    <img src={servicio.image} alt={servicio.title} height={120} width={120} />
                    <h3>{servicio.title}</h3>
                    {/*<p>{servicio.description}</p >*/}
                    <Link to={`/servicios/${servicio.id}`} className="link-detalles">
                        <FontAwesomeIcon icon={faFileLines} /> Detalle
                    </Link>
                    <p className="precio">${servicio.price}</p>
                    <div className="boton-agregar-container">
                        <button onClick={() => agregarAlCarrito(servicio)} className="boton-agregar">
                            <FontAwesomeIcon icon={faCartPlus} /> Agregar
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Servicios;
