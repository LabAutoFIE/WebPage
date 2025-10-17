import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import loaderGif from '../assets/images/Loader.gif';
import '@/styles/servicio-detalle.css';

const ServicioDetalle = () => {
    const { id } = useParams();
    const [servicio, setServicio] = useState(null);

    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(respuesta => respuesta.json())
            .then(dato => {
                setServicio(dato);
                setCargando(false);
            })
            .catch(error => {
                setError('Error al obtener descripción:', error);
                setCargando(false);
            });
    }, [id]);

    if (cargando) return (
        <div className="loader-container">
            <img src={loaderGif} alt="Cargando descripciones..." className="loader" />
            <p className="loader-text">Cargando descripciones...</p>
        </div>
    );
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className="detalle-servicio">
                <h2 className="detalle-titulo">Descripción del Servicio Nº: {id}</h2>
                <img
                    src={servicio.image}
                    alt={servicio.title}
                    className="detalle-imagen"
                    width={120}
                    height={120}
                />
                <h3 className="detalle-nombre">{servicio.title}</h3>
                <p className="detalle-descripcion">{servicio.description}</p>
            </div>

        </>

    );
}

export default ServicioDetalle;