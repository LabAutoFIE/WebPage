import styles from "@styles/historia-laboratorio.module.css";
import { Helmet } from "react-helmet-async";

const HistoriaLaboratorio = () => {
    return (
        <>
            <Helmet>
                <title>Historia del Laboratorio de Automotores - Facultad de Ingeniería del Ejército</title>
                <meta
                    name="description"
                    content="Conoce la historia del Laboratorio de Automotores de la Facultad de Ingeniería del Ejército Argentino, creado en 1930 por Manuel Nicolás Savio. Un espacio académico y de investigación dedicado al desarrollo vehicular militar y civil."
                />
            </Helmet>
            <section className={styles.historiaContainer}>
                <h2 className={styles.titulo}>Historia del Laboratorio de Automotores:</h2>
                <p className={styles.parrafo}>
                    El Laboratorio de Automotores forma parte de la Facultad de Ingeniería del Ejército Argentino,
                    institución creada el <strong>6 de noviembre de 1930</strong> por iniciativa del entonces
                    Teniente Coronel <strong>Manuel Nicolás Savio</strong>, precursor del vínculo entre ciencia,
                    tecnología y defensa nacional.
                </p>
                <p className={styles.parrafo}>
                    Este laboratorio tiene como misión brindar apoyo académico a los estudiantes de la carrera de
                    Ingeniería Mecánica con orientación en automotores, así como ofrecer servicios de alta calidad
                    al sector industrial vinculado al desarrollo vehicular. Su infraestructura incluye bancos de
                    ensayo dinámico, como el banco de rodillos de <strong>150 HP</strong>, que permite realizar
                    pruebas de rendimiento, diagnóstico y simulación en condiciones controladas.
                </p>
                <p className={styles.parrafo}>
                    Además de su rol formativo, el laboratorio participa activamente en proyectos de investigación
                    financiados por organismos públicos y privados, tanto en el ámbito civil como en el de la defensa.
                    Su enfoque multidisciplinario permite colaborar con universidades, instituciones técnicas y
                    sectores productivos, consolidando su papel como referente en tecnología automotriz militar.
                </p>
                <p className={styles.parrafo}>
                    En el marco de la Universidad de la Defensa Nacional (UNDEF), el laboratorio representa un
                    ejemplo de articulación entre formación académica, investigación aplicada y compromiso con
                    el desarrollo estratégico del país.
                </p>
                <footer className={styles.fuente}>
                    Fuente: <a href="https://www.fie.undef.edu.ar/laboratorios/automotores/" target="_blank" rel="noopener noreferrer">Facultad de Ingeniería del Ejército</a>
                </footer>
            </section>
        </>
    );
};

export default HistoriaLaboratorio;