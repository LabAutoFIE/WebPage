import BotonHeader from './BotonHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBookOpen, faUsers, faTools, faBoxOpen, faToolbox, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '@context/AuthContext';
import styles from '@/styles/navbar.module.css';

const Navbar = () => {
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin';

    return (
        <div className={styles.navWrapper}>
            <nav className={`navbar navbar-expand-lg navbar-dark ${styles.nav}`}>
                {/* Brand solo visible en móviles */}
                <a className="navbar-brand d-block d-lg-none ps-3" href="/">Laboratorio</a>

                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenido colapsable */}
                <div className={`collapse navbar-collapse ${styles.navHeader}`} id="navbarContent">
                    <div className={`navbar-nav ${styles.navHeader}`}>
                        {/* Botón común */}
                        <BotonHeader texto="Home" icono={<FontAwesomeIcon icon={faHouse} />} to="/" />

                        {/* Condicional por tipo de usuario */}
                        {isAdmin ? (
                            <>
                                <BotonHeader texto="Servicios" icono={<FontAwesomeIcon icon={faBoxOpen} />} to="/servicios" />
                                <BotonHeader texto="Administrador" icono={<FontAwesomeIcon icon={faTools} />} to="/admin" />
                            </>
                        ) : (
                            <>
                                <BotonHeader texto="Historia" icono={<FontAwesomeIcon icon={faBookOpen} />} to="/historia" />
                                <BotonHeader texto="Staff" icono={<FontAwesomeIcon icon={faUsers} />} to="/staff" />
                                <BotonHeader texto="Servicios" icono={<FontAwesomeIcon icon={faBoxOpen} />} to="/servicios" />
                                <BotonHeader texto="Equipamiento" icono={<FontAwesomeIcon icon={faToolbox} />} to="/equipos" />
                                <BotonHeader texto="Contacto" icono={<FontAwesomeIcon icon={faEnvelope} />} to="/contacto" />
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;