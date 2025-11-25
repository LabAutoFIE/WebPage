import { useContext } from "react";
import { CarritoContext } from "@/context/CarritoContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Eliminar / Carrito
import styles from '@/styles/carrito.module.css';

const Carrito = () => {
    const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);
    //console.log("Contenido actual del carrito:", carrito); // 👈 Diagnóstico
    // Calculo de totales:
    const totalPrecio = carrito.reduce((acumulado, servicio) => acumulado + servicio.price * servicio.cantidad, 0);
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <div>
            <h2 className="mb-3">
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                Carrito:
            </h2>
            {/* Tabla responsive con Bootstrap */}
            <div className="table-responsive">
                <table className={`table table-striped table-bordered align-middle ${styles.table}`}>
                    <thead className="table-light">
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
                                <td className="text-center">{item.cantidad}</td>
                                <td><img src={item.image} alt={item.title} height={60} /></td>
                                <td>{item.title}</td>
                                <td>{Number(item.price).toFixed(2)} $</td>
                                <td>{(Number(item.price) * item.cantidad).toFixed(2)} $</td>
                                <td>
                                    {/* Botón híbrido: Bootstrap + estilo */}
                                    <button onClick={() => eliminarDelCarrito(item.id)} className={`btn btn-sm d-flex align-items-center gap-2 ${styles.botonEliminar}`}
                                    >
                                        <FontAwesomeIcon icon={faTrashAlt} /> Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Muestro totales */}
            <h3 className="mt-3">
                Total de productos: {totalCantidad} <br />
                Precio total: {totalPrecio.toFixed(2)} $
            </h3>
            <button onClick={vaciarCarrito} className={`btn mt-3 d-flex align-items-center gap-2 ${styles.botonEliminar}`}>
                <FontAwesomeIcon icon={faShoppingCart} /> Vaciar <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Carrito;