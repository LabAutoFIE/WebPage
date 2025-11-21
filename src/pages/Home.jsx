import Servicios from '@/components/Servicios';
import styles from '@/styles/home.module.css';

const Home = () => {

    return (
        <>
            {/*AQUI RENDERIZO LA PAGINA HOME*/}
            <h1 className={styles.titulo}>Bienvenido al Laboratorio de Automotores</h1>
            <h2 className={styles.titulo}>Facultad de Ingeniería del Ejército</h2>
            <p className={styles.parrafo}>El Laboratorio de Automotores de la Facultad de Ingeniería del Ejército constituye un espacio técnico-académico dedicado al estudio, diagnóstico y evaluación de sistemas vehiculares militares y civiles. Equipado con tecnología especializada y operado por personal altamente capacitado, el laboratorio permite realizar prácticas de mantenimiento, análisis de rendimiento, simulaciones mecánicas y ensayos de componentes automotrices. Su misión es fortalecer la formación profesional de los futuros ingenieros militares y civiles, promoviendo la investigación aplicada, la innovación en movilidad táctica y el desarrollo de soluciones sostenibles para el parque automotor institucional.</p>
            <hr />
            <Servicios />
            <hr />
        </>
    );
};

export default Home;