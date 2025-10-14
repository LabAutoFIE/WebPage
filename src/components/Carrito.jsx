import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Carrito = ({ serviciosEnCarrito, serviciosEliminados }) => {
    return (
        <div>
            <h2>Carrito</h2>
            {serviciosEnCarrito.map((servicio, indice) => (
                <div key={indice}>
                    <img src={servicio.image} alt={servicio.title} height={80} width={80} />
                    <p> {servicio.title} : {servicio.price}$ </p>
                    <button onClick={() => serviciosEliminados(indice)} className="boton-eliminar">
                        <FontAwesomeIcon icon={faTrashAlt} /> Eliminar
                    </button>

                </div>
            ))}
        </div>
    );
};

export default Carrito;