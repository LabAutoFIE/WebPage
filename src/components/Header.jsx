import { useContext } from 'react';
import styles from '@/styles/header.module.css';
import FloatingText from './FloatingText';
import Navbar from './Navbar';
import BotonHeader from './BotonHeader';
import logoFIE from '@/assets/images/EscudoLogoFIEAzul.png';
import logoLab from '@/assets/images/Auto-circulo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; //Carrito / Usuario Log in / Log out
import { useAuth } from '@context/AuthContext';
import { CarritoContext } from '@context/CarritoContext';

const Header = () => {
    const { carrito } = useContext(CarritoContext);
    const { user } = useAuth();
    const estaLogeado = !!user;
    const contadorEnCarrito = carrito.length || 0;
    //console.log("Header renderizado. Usuario:", user);

    return (
        <header className={styles.header}>
            {/* Sección izquierda */}
            <div className={styles.headerLeft}>
                <FloatingText text={`El logotipo incorporado, es el que fuera ideado en el año 1996 por el CR (R) OIM Andrés Guillermo Fernández Cendoya, jefe de curso de la especialidad en aquella época, para utilizarlo en el SIMA ’96 (Simposio de Ingeniería Moderna Automotriz). Seguidamente fue adoptado, acompañándonos hasta la fecha, como el logotipo del Laboratorio de Automotores y la especialidad dictada en nuestra Facultad.`}>
                    <img src={logoLab} alt="Logo Laboratorio de Automotores" className={`${styles.logo} ${styles.logoAuto}`} />
                </FloatingText>
            </div>
            {/* Sección central */}
            <div className={styles.headerCenter}>
                <h1 className={styles.tituloHeader}>Laboratorio de Automotores</h1>
            </div>
            {/* Sección derecha */}
            <div className={styles.headerRight}>
                <a href="https://www.fie.undef.edu.ar/" target="_blank" rel="noopener noreferrer">
                    <img src={logoFIE} alt="Logo FIE" className={`${styles.logo} ${styles.logoDerecho}`} />
                </a>
                <div className={styles.botonesDerecha}>
                    {estaLogeado ? (
                        <BotonHeader
                            texto="Log out"
                            icono={<FontAwesomeIcon icon={faSignOutAlt} />}
                            to="/Logout"
                            variant="logout"
                        />
                    ) : (
                        <BotonHeader
                            texto="Log in"
                            icono={<FontAwesomeIcon icon={faUser} />}
                            to="/login"
                        />
                    )}

                    <BotonHeader
                        texto={`Carrito (${contadorEnCarrito})`}
                        icono={<FontAwesomeIcon icon={faShoppingCart} />}
                        to="/carrito"
                    />
                </div>
            </div>
            {/* Sección inferior */}
            <div className={styles.headerNav}>
                <Navbar />
            </div>
        </header >
    );
};

export default Header;