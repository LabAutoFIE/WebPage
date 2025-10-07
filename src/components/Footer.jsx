import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contact">
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
                <p>Laboratorio de Automotores - FIE - UNDEF &copy; 2025</p>
                <p>Desarrollado por: Gerhard E. RAITH</p>
            </div>


        </footer >
    );
};

export default Footer;