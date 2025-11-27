import { NavLink } from 'react-router-dom';
import styles from '@/styles/boton-header.module.css';

const BotonHeader = ({ texto, icono, to, tipo = 'button', onClick, variant = 'default' }) => {
    const claseBase = `${styles.botonHeader} ${styles[variant] || ''}`;

    return to ? (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${claseBase} ${isActive ? styles.activo : ''}`
            }
        >
            <span className={styles.icono}>{icono}</span> {texto}
        </NavLink>
    ) : (
        <button type={tipo} className={claseBase} onClick={onClick}>
            <span className={styles.icono}>{icono}</span> {texto}
        </button>
    );
};

export default BotonHeader;