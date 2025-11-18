import { Link } from 'react-router-dom';
import styles from '@/styles/boton-header.module.css';

const BotonHeader = ({ texto, icono, to, tipo = 'button', onClick }) => {
    return to ? (
        <Link to={to} className={styles.boton_header}>
            <span className={styles.icono}>{icono}</span> {texto}
        </Link>
    ) : (
        <button type={tipo} className={styles.boton_header} onClick={onClick}>
            <span className={styles.icono}>{icono}</span> {texto}
        </button>
    );
};

export default BotonHeader;