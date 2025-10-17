import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Eliminar
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Carrito

const Carrito = ({ serviciosEnCarrito, serviciosEliminados }) => {
    // Calculo el total:
    const total = serviciosEnCarrito.reduce((acumulado, servicio) => acumulado + servicio.price, 0);

    return (
        <div>
            <h2>
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '0.5rem' }} />
                Carrito:
            </h2>
            {serviciosEnCarrito.map((servicio, indice) => (
                <div key={indice}>
                    <img src={servicio.image} alt={servicio.title} height={80} width={80} />
                    <p> {servicio.title} : {servicio.price}$ </p>
                    <button onClick={() => serviciosEliminados(indice)} className="boton-eliminar">
                        <FontAwesomeIcon icon={faTrashAlt} /> Eliminar
                    </button>
                </div>
            ))}
            {/* Muestro total */}
            <h3 style={{ marginTop: '1rem' }}>Total: {total.toFixed(2)} $</h3>
        </div>
    );
};

export default Carrito;