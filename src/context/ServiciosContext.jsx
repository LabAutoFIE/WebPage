import { useState, useEffect, createContext, useContext } from 'react';

export const ServiciosContext = createContext();

export const ServiciosProvider = ({ children }) => {
    const [servicios, setServicios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    /* API Externa PRODUCTOS / SERVICIOS */
    /* const URL = 'https://fakestoreapi.com/products?limit=19';*/
    const API = "https://691c64903aaeed735c90a7b9.mockapi.io/servicios";

    // Cargo servicios al montar el componente
    useEffect(() => {
        cargarServicios();
    }, []);

    const cargarServicios = async () => {
        try {
            setCargando(true);
            setError(null);

            const respuesta = await fetch(API);

            if (!respuesta.ok)
                throw new Error(`Error HTTP: ${respuesta.status}`);

            const datos = await respuesta.json();
            setServicios(datos);

        } catch (error) {
            console.error("Error al cargar servicios:", error);
            setError(error.message || "Error al cargar los servicios");

        } finally {
            setCargando(false);
        }
    };

    // Funcion para agregar el servicio a la API
    const agregarServicio = async (servicio) => {
        try {
            setError(null);

            const respuesta = await fetch(API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(servicio),
            });
            const nuevoServicio = await respuesta.json();
            console.log("Servicio agregado: ", nuevoServicio);

            if (!respuesta.ok)
                throw new Error(`Error HTTP: ${respuesta.status}`);

            //Agregar el nuevo servicio a la lista
            setServicios([...servicios, nuevoServicio]);

        } catch (error) {
            console.error("Error al agregar:", error);
            const mensajeError = "Hubo un problema al agregar el servicio.";
            setError(mensajeError);
        }
    };

    const editarServicio = async (servicio) => {
        try {
            setError(null);

            const respuesta = await fetch(`${API}/${servicio.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(servicio),
            });

            if (!respuesta.ok)
                throw new Error(`Error HTTP: ${respuesta.status}`);

            const servicioActualizado = await respuesta.json();
            setServicios(servicios.map(p =>
                p.id === servicioActualizado.id ? servicioActualizado : p
            ));

        } catch (error) {
            console.error("Error al editar:", error);
            const mensajeError = "Hubo un problema al editar el servicio.";
            setError(mensajeError);
        }
    };

    // Funcion para eliminar un servicio de la API
    const eliminarServicio = async (id) => {
        const confirmar = window.confirm("¿Está seguro de eliminar el servicio?");

        if (confirmar) {
            try {
                setError(null);

                const respuesta = await fetch(`${API}/${id}`, {
                    method: "DELETE",
                }
                );

                if (!respuesta.ok)
                    throw new Error("Error al eliminar");

                // Filtra y crea un nuevo array sin el producto eliminado
                setServicios(servicios.filter(p => p.id !== id));
            }
            catch (error) {
                console.error(error.message);
                const mensajeError = "Hubo un problema al eliminar el servicio.";
                setError(mensajeError);
            }
        }
    };

    return (
        <ServiciosContext.Provider value={{
            servicios,
            cargando,
            error,
            cargarServicios,
            agregarServicio,
            editarServicio,
            eliminarServicio
        }}>
            {children}
        </ServiciosContext.Provider>
    );
};

export const useServiciosContext = () => useContext(ServiciosContext);