import { useState } from "react";
import FormServicio from "./FormularioServicio";
import { useServiciosContext } from "@context/ServiciosContext";
import styles from "@styles/gestion-servicio.module.css";
import CirclePlus from "@assets/images/CirclePlus";
import SquarePen from "@assets/images/SquarePen";
import TrashIcon from "@assets/images/TrashIcon";

const GestionServicios = () => {
    // Cargando contexto de servicio
    const { servicios, eliminarServicio } = useServiciosContext();
    // Estados 
    const [mostrarForm, setMostrarForm] = useState(false);
    const [modoFormulario, setModoFormulario] = useState("agregar");
    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

    // Abrir formulario para AGREGAR
    const abrirFormularioAgregar = () => {
        console.info(`[AUDIT] Editar servicio: ${servicios.id}`); // Consola p/ Auditoría
        setModoFormulario("agregar");
        setServicioSeleccionado(null); // Sin servicio inicial
        setMostrarForm(true);
    };

    // Abrir formulario para EDITAR
    const abrirFormularioEditar = (servicio) => {
        setModoFormulario("editar");
        setServicioSeleccionado(servicio); // Pasar el servicio a editar
        setMostrarForm(true);
    };

    // Cerrar formulario
    const cerrarFormulario = () => {
        setMostrarForm(false);
        setServicioSeleccionado(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <div className={styles.cabecera}>
                    <h2>Lista de Servicios:</h2>
                    {/* Botón para agregar servicio */}
                    <button
                        onClick={abrirFormularioAgregar}
                        className={styles.botonAgregar}
                    >
                        <CirclePlus />
                        <p>Agregar Servicio</p>
                    </button>
                </div>
                {/* Lista de servicios */}
                <div>
                    {servicios.length === 0 ? (
                        <p>No hay servicios</p>
                    ) : (
                        <div style={{ display: "grid", gap: "5px" }}>
                            {servicios.map((servicio) => (
                                <div
                                    key={servicio.id}
                                    className={styles.servicioItem}
                                >
                                    <img className={styles.imagen} src={servicio.image} alt={servicio.title} />
                                    <h3>{servicio.title}</h3>
                                    <p>Precio: ${servicio.price}</p>
                                    {/* Botones para editar y eliminar este servicio */}
                                    <button
                                        className={styles.boton}
                                        onClick={() => abrirFormularioEditar(servicio)}
                                        aria-label={`Editar servicio ${servicio.title}`}
                                    >
                                        <SquarePen />
                                    </button>
                                    <button
                                        className={styles.boton}
                                        onClick={() => eliminarServicio(servicio.id)}
                                        aria-label={`Eliminar servicio ${servicio.title}`}
                                    >
                                        <TrashIcon />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Modal - Formulario condicional */}
                {mostrarForm && (
                    <FormServicio
                        servicioInicial={servicioSeleccionado || {}}
                        modo={modoFormulario}
                        onCerrar={cerrarFormulario}
                    />
                )}
            </div>
        </div>
    );
};

export default GestionServicios;