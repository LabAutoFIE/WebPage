import BotonHeader from './BotonHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons'; // o faUserTie, faPeopleGroup
import { faTools } from '@fortawesome/free-solid-svg-icons'; // Usuario admin
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons'; // o faCogs, faDesktop, faIndustry
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Salir
import { useAuth } from '../context/AuthContext';
import '@/styles/navbar.css';

const Navbar = () => {
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin';

    return (
        <div className='nav'>
            <nav className="nav-header">
                {/* Botón común p/ todos */}
                <BotonHeader texto="Home" icono={<FontAwesomeIcon icon={faHouse} />} to="/" />

                {/* Condicional por tipo de usuario */}
                {isAdmin ? (
                    <>
                        <BotonHeader texto="Servicios" icono={<FontAwesomeIcon icon={faBoxOpen} />} to="/servicios" />
                        <BotonHeader texto="Administrador" icono={<FontAwesomeIcon icon={faTools} />} to="/admin" />
                        <BotonHeader texto="Salir" icono={<FontAwesomeIcon icon={faSignOutAlt} />} to="/logout" />
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
            </nav>
        </div>
    );
};

export default Navbar; 