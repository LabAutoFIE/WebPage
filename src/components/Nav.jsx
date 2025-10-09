import React from 'react';
import BotonHeader from './BotonHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons'; // o faUserTie, faPeopleGroup
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons'; // o faCogs, faDesktop, faIndustry
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/nav.css';

const Nav = () => {
    return (
        <div className='nav'>
            <nav className="nav-header">
                <BotonHeader texto="Home" icono={<FontAwesomeIcon icon={faHouse} />} />
                <BotonHeader texto="Historia" icono={<FontAwesomeIcon icon={faBookOpen} />} />
                <BotonHeader texto="Staff" icono={<FontAwesomeIcon icon={faUsers} />} to="/staff" />
                <BotonHeader texto="Servicios" icono={<FontAwesomeIcon icon={faBoxOpen} />} />
                <BotonHeader texto="Equipamiento" icono={<FontAwesomeIcon icon={faToolbox} />} to="/equipos" />
                <BotonHeader texto="Contacto" icono={<FontAwesomeIcon icon={faEnvelope} />} to="/contacto" />
                <BotonHeader texto="Carrito" icono={<FontAwesomeIcon icon={faShoppingCart} />} />
            </nav>
        </div>
    );
};

export default Nav; 