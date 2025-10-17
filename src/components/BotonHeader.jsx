import { Link } from 'react-router-dom';
import '@/styles/boton-header.css';

const BotonHeader = ({ texto, icono, to, tipo = 'button', onClick }) => {
    return to ? (
        <Link to={to} className="boton-header">
            {icono} {texto}
        </Link>
    ) : (
        <button type={tipo} className="boton-header" onClick={onClick}>
            {icono} {texto}
        </button>
    );
};

export default BotonHeader;

