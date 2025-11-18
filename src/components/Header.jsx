import styles from '@/styles/header.module.css';
import FloatingText from './FloatingText';
import logoFIE from '@/assets/images/EscudoLogoFIEAzul.png';
import logoLab from '@/assets/images/Auto-circulo.svg';
import Navbar from './Navbar';
import BotonHeader from './BotonHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; //Carrito
import { faUser } from '@fortawesome/free-solid-svg-icons'; //Usuario


const Header = () => {
    return (
        <header className={styles.header}>
            {/* Sección izquierda */}
            <div className={styles.header_left}>
                <FloatingText text={`El logotipo incorporado, es el que fuera ideado en el año 1996 por el CR (R) OIM Andrés Guillermo Fernández Cendoya, jefe de curso de la especialidad en aquella época, para utilizarlo en el SIMA ’96 (Simposio de Ingeniería Moderna Automotriz). Seguidamente fue adoptado, acompañándonos hasta la fecha, como el logotipo del Laboratorio de Automotores y la especialidad dictada en nuestra Facultad.`}>
                    <img src={logoLab} alt="Logo Laboratorio de Automotores" className={`${styles.logo} ${styles.logo_auto}`} />
                </FloatingText>
            </div>
            {/* Sección central */}
            <div className={styles.header_center}>
                <h1 className={styles.titulo_header}>Laboratorio de Automotores</h1>
            </div>
            {/* Sección derecha */}
            <div className={styles.header_right}>
                <a href="https://www.fie.undef.edu.ar/" target="_blank" rel="noopener noreferrer">
                    <img src={logoFIE} alt="Logo FIE" className={`${styles.logo} ${styles.logo_derecho}`} />
                </a>
                <div className={styles.botones_derecha}>
                    <BotonHeader texto="Log in" icono={<FontAwesomeIcon icon={faUser} />} to="/login" />
                    <BotonHeader texto="Carrito" icono={<FontAwesomeIcon icon={faShoppingCart} />} to="/carrito" />
                </div>
            </div>
            {/* Sección inferior */}
            <div className={styles.header_nav}>
                <Navbar />
            </div>
        </header >
    );
};

export default Header;
