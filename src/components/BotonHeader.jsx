import { Link } from 'react-router-dom';
import styles from '@/styles/boton-header.module.css';

const BotonHeader = ({ texto, icono, to, tipo = 'button', onClick, variant = 'default' }) => {
    const claseBoton = `${styles.boton_header} ${styles[variant] || ''}`;

    return to ? (
        <Link to={to} className={claseBoton}>
            <span className={styles.icono}>{icono}</span> {texto}
        </Link>
    ) : (
        <button type={tipo} className={claseBoton} onClick={onClick}>
            <span className={styles.icono}>{icono}</span> {texto}
        </button>
    );
};

export default BotonHeader;