import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/footer.module.css';

const Footer = () => {
    const anioActual = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* Flex responsivo c/ Bootstrap */}
                <div className="d-flex flex-wrap justify-content-between">

                    {/* Columna izquierda */}
                    <div className={styles.footerColumn}>
                        <div className={styles.footerContact}>
                            <p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
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
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:automotores@fie.undef.edu.ar">automotores@fie.undef.edu.ar</a>
                            </p>
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className={`${styles.footerColumn} text-md-end text-center`}>
                        <p>Laboratorio de Automotores - FIE - UNDEF &copy; {anioActual}</p>
                        <p>Todos los derechos reservados</p>
                        <p>By: Gerhard E. RAITH</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
