import { useState } from 'react';
import Servicios from '../components/Servicios';
import Carrito from '../components/Carrito';

const Home = () => {
    const [carrito, setCarrito] = useState([]);
    // Uso el spread operator (...) p/ copiar array existente y añadir el nuevo producto.
    const agregarAlCarrito = (servicio) => {
        setCarrito([...carrito, servicio]);
    };
    // Uso filter() p/ crear un nuevo array que excluye el elemento con el índice dado.
    const eliminarDelCarrito = (indiceAEliminar) => {
        setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
    };

    return (
        <>
            {/*AQUI RENDERIZO LA PAGINA HOME*/}
            <h1>Bienvenido al Laboratorio de Automotores - Facultad de Ingeniería del Ejército</h1>
            <p>El Laboratorio de Automotores de la Facultad de Ingeniería del Ejército constituye un espacio técnico-académico dedicado al estudio, diagnóstico y evaluación de sistemas vehiculares militares y civiles. Equipado con tecnología especializada y operado por personal altamente capacitado, el laboratorio permite realizar prácticas de mantenimiento, análisis de rendimiento, simulaciones mecánicas y ensayos de componentes automotrices. Su misión es fortalecer la formación profesional de los futuros ingenieros militares y civiles, promoviendo la investigación aplicada, la innovación en movilidad táctica y el desarrollo de soluciones sostenibles para el parque automotor institucional.</p>
            <hr />
            <Servicios agregarPServicio={agregarAlCarrito} />
            <hr />
            <Carrito
                serviciosEnCarrito={carrito}
                serviciosEliminados={eliminarDelCarrito}
            />
        </>
    );
};

export default Home;