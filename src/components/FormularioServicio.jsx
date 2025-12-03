import { useState } from "react";
import { useServiciosContext } from "@context/ServiciosContext";
import styles from "@styles/formulario-servicio.module.css";
import X from "@assets/icons/X";

const FormServicio = ({ servicioInicial = {}, modo = "agregar", onCerrar }) => {

    const [servicio, setServicio] = useState(servicioInicial);
    const { agregarServicio, editarServicio } = useServiciosContext();

    const manejarChange = (evento) => {
        const { name, value } = evento.target;
        setServicio({ ...servicio, [name]: value });
    };

    const manejarSubmit = async (evento) => {
        evento.preventDefault();
        if (modo === "agregar") {
            await agregarServicio(servicio);
        } else {
            await editarServicio(servicio);
        }
        onCerrar();
    };

    return (
        <div
            className={styles.modalOverlay}
            aria-modal="true"
            role="dialog"
        >
            <div className={styles.modalContainer}>
                {/* Contenido del Modal */}
                <div className={styles.modalContent}>
                    {/* Encabezado del Modal */}
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalHeaderTitle}>
                            {modo === "agregar" ? "Agregar Servicio" : "Editar Servicio"}
                        </h3>
                        <button
                            type="button"
                            onClick={onCerrar}
                            className={styles.closeButton}
                        >
                            <X />
                        </button>
                    </div>
                    {/* Cuerpo del Modal */}
                    <form onSubmit={manejarSubmit}>
                        <div className={styles.formGrid}>
                            {/* Campo Título */}
                            <div className={styles.colSpan2}>
                                <label className={styles.formLabel}>
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className={styles.formInputBase}
                                    placeholder="Ingrese el nombre del servicio"
                                    value={servicio.title || ""}
                                    onChange={manejarChange}
                                    required
                                />
                            </div>
                            {/* Campo Precio */}
                            <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                                <label className={styles.formLabel}>
                                    Precio
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className={styles.formInputBase}
                                    placeholder="$0.00"
                                    value={servicio.price || ""}
                                    onChange={manejarChange}
                                    required
                                    min="0"
                                    step="any"
                                />
                            </div>

                            {/* Campo Descripcion */}
                            <div className={styles.colSpan2}>
                                <label className={styles.formLabel}>
                                    Descripción del Servicio
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows="4"
                                    className={styles.formInputBase}
                                    placeholder="Escribir descripción del servicio aquí"
                                    value={servicio.description || ""}
                                    onChange={manejarChange}
                                    required
                                ></textarea>
                            </div>
                            {/* Campo Categoría */}
                            <div className={styles.colSpan2}>
                                <label className={styles.formLabel}>
                                    Categoría del Servicio
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    id="category"
                                    className={styles.formInputBase}
                                    placeholder="Escribir categoría del servicio aquí"
                                    value={servicio.category || ""}
                                    onChange={manejarChange}
                                    required
                                />
                            </div>
                            {/* Campo URL de Imagen */}
                            <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                                <label className={styles.formLabel}>
                                    URL de Imagen
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    id="image"
                                    className={styles.formInputBase}
                                    placeholder="https://ejemplo.com/imagen.jpg"
                                    value={servicio.image || ""}
                                    onChange={manejarChange}
                                />
                            </div>

                        </div>
                        {/* Botones de Accion */}
                        <div className={styles.modalActions}>
                            {/* Boton Primario */}
                            <button
                                type="submit"
                                className={`${styles.btnBase} ${styles.btnPrimary}`}
                            >
                                {modo === "agregar" ? <>Agregar</> : <>Actualizar</>}
                            </button>
                            {/* Boton Secundario o de cancelar */}
                            <button
                                type="button"
                                onClick={onCerrar}
                                className={`${styles.btnBase} ${styles.btnSecondary}`}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormServicio;