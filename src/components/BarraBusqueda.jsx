import { useSearch } from "@context/BusquedaContext";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@assets/icons/SearchIcon"; // Busqueda
import styles from '@/styles/barra-busqueda.module.css';

const BarraBusqueda = () => {
    const { busqueda, setBusqueda } = useSearch();
    const navigate = useNavigate();

    const manejarBusqueda = (evento) => {
        const valor = evento.target.value;
        setBusqueda(valor);

        // Si hay texto, navegar página de búsqueda
        if (valor.trim()) {
            navigate("/busqueda");
        }
    };
    return (
        <form className="d-flex justify-content-center my-2">
            <div className={`input-group ${styles.barraBusqueda}`}>
                <span className={`input-group-text ${styles.icono}`}>
                    <SearchIcon className={styles.searchIcon} />
                </span>
                <input
                    type="search"
                    id="search"
                    className={`form-control ${styles.input}`}
                    placeholder="Buscar Servicios..."
                    value={busqueda}
                    onChange={manejarBusqueda}
                />
            </div>
        </form>
    );
};

export default BarraBusqueda;