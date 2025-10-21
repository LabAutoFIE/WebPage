import { useContext } from "react";
import { CarritoContext } from "@/context/CarritoContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Eliminar / Carrito
import '@/styles/carrito.css';

const Carrito = () => {
    const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);
    //console.log("Contenido actual del carrito:", carrito); // 👈 Diagnóstico
    // Calculo de totales:
    const totalPrecio = carrito.reduce((acumulado, servicio) => acumulado + servicio.price * servicio.cantidad, 0);
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <div>
            <h2>
                <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '0.5rem' }} />
                Carrito:
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Imagen</th>
                        <th>Título</th>
                        <th>Precio unitario</th>
                        <th>Subtotal</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((item) => (
                        <tr key={item.id}>
                            <td style={{ textAlign: 'center' }}>{item.cantidad}</td>
                            <td><img src={item.image} alt={item.title} height={60} /></td>
                            <td>{item.title}</td>
                            <td>{item.price.toFixed(2)} $</td>
                            <td>{(item.price * item.cantidad).toFixed(2)} $</td>
                            <td>
                                <button onClick={() => eliminarDelCarrito(item.id)} className="boton-eliminar">
                                    <FontAwesomeIcon icon={faTrashAlt} /> Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Muestro totales */}
            <h3 style={{ marginTop: '1rem' }}>
                Total de productos: {totalCantidad} <br />
                Precio total: {totalPrecio.toFixed(2)} $
            </h3>
            <button onClick={vaciarCarrito} className="boton-eliminar" style={{ marginTop: '1rem' }}>
                <FontAwesomeIcon icon={faShoppingCart} /> Vaciar <FontAwesomeIcon icon={faTrashAlt} />
            </button>

        </div>
    );
};

export default Carrito;