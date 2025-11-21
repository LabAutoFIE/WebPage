import GestionServicio from "@components/GestionServicio";

const Admin = () => {
    return (
        <>
            <h1>Administración:</h1>
            <h2>Bienvenido Administrador!</h2>
            <p>Aquí vamos a gestionar los servicios de la API MockAPI con el formulario p/ agregar/editar/eliminar servicios.</p>
            <GestionServicio />
        </>
    );
};

export default Admin;