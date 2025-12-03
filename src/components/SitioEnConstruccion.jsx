import { Helmet } from "react-helmet-async";
import '@/styles/sitio-en-construccion.css';
import imagenConstruccion from '@/assets/images/SitioEnConstruccion.gif';

function SitioEnConstruccion({ mensaje = "Este sitio está en construcción..." }) {
    return (
        <>
            {/* SEO con Helmet */}
            <Helmet>
                <title>Sitio en construcción - LabAuto</title>
                <meta
                    name="description"
                    content="Este sitio del Laboratorio de Automotores se encuentra en construcción. Vuelve pronto para más información."
                />
            </Helmet>

            <div className="sitio-construccion">
                <img src={imagenConstruccion} alt="Sitio en construcción" className="imagen-construccion"
                />
                <h2>{mensaje}</h2>
            </div>
        </>
    );
};

export default SitioEnConstruccion;