import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@/styles/footer.css';

const Footer = () => {
    const anioActual = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-contact">
                {/* Seccion de enlaces */}
                <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
                    <a
                        href="https://www.google.com/maps?q=FIE+Facultad+Ingeniería+Ejército+Manuel+Savio,+Buenos+Aires,+Argentina"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Av. Cabildo 15 - C1426AAA - CABA - ARGENTINA
                    </a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhoneAlt} /> +54 11 4779-3366
                </p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} />{' '}
                    <a href="mailto:automotores@fie.undef.edu.ar">automotores@fie.undef.edu.ar</a>
                </p>
            </div>
            <div>
                {/* Seccion de Copyright */}
                <p>Laboratorio de Automotores - FIE - UNDEF &copy; {anioActual}</p>
                <p>Todos los derechos reservados</p>
                <p>By: Gerhard E. RAITH</p>
            </div>


        </footer >
    );
};

export default Footer;