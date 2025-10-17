import '../styles/header.css';
import FloatingText from './FloatingText';
import logoFIE from '../assets/images/EscudoLogoFIEAzul.png';
import logoLab from '../assets/images/Auto-circulo.svg';
import Nav from './Nav';
import BotonHeader from './BotonHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; //Carrito
import { faUser } from '@fortawesome/free-solid-svg-icons'; //Usuario


const Header = () => {
    return (
        <header className="header">
            {/* Sección izquierda */}
            <div className="header-left">
                <FloatingText text={`El logotipo incorporado, es el que fuera ideado en el año 1996 por el CR (R) OIM Andrés Guillermo Fernández Cendoya, jefe de curso de la especialidad en aquella época, para utilizarlo en el SIMA ’96 (Simposio de Ingeniería Moderna Automotriz). Seguidamente fue adoptado, acompañándonos hasta la fecha, como el logotipo del Laboratorio de Automotores y la especialidad dictada en nuestra Facultad.`}>
                    <img src={logoLab} alt="Logo Laboratorio de Automotores" className="logo logo-auto" />
                </FloatingText>
            </div>
            {/* Sección central */}
            <div className="header-center">
                <h1 className="titulo-header">Laboratorio de Automotores</h1>
            </div>
            {/* Sección derecha */}
            <div className="header-right">
                <a href="https://www.fie.undef.edu.ar/" target="_blank" rel="noopener noreferrer">
                    <img src={logoFIE} alt="Logo FIE" className="logo logo-derecho" />
                </a>
                <div className="botones-derecha">
                    <BotonHeader texto="Log in" icono={<FontAwesomeIcon icon={faUser} />} to="/login" />
                    <BotonHeader texto="Carrito" icono={<FontAwesomeIcon icon={faShoppingCart} />} to="/carrito" />
                </div>
            </div>
            {/* Sección inferior */}
            <div className="header-center">
                <Nav />
            </div>
        </header >
    );
};

export default Header;
