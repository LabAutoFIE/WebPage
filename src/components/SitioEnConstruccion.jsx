import '@/styles/sitio-en-construccion.css';
import imagenConstruccion from '@/assets/images/SitioEnConstruccion.gif';


function SitioEnConstruccion({ mensaje = "Este sitio está en construcción..." }) {
    return (
        <div className="sitio-construccion">
            <img src={imagenConstruccion} alt="Sitio en construcción" className="imagen-construccion"
            />
            <h2>{mensaje}</h2>
        </div>
    );
};

export default SitioEnConstruccion;