import React from 'react';
import '../styles/staff-laboratorio.css';

// Importación imágenes locales
import fotoAna from '../assets/images/AnaGomez.jpg'
import fotoCarla from '../assets/images/CarlaRuiz.jpg'
import fotoLuis from '../assets/images/LuisMartinez.jpg'
import fotoMatias from '../assets/images/MatiasLopez.jpg'

const equipo = [
    {
        nombre: 'Ana Gómez',
        rol: 'Director de Laboratorio',
        imagen: fotoAna
    },
    {
        nombre: 'Luis Martínez',
        rol: 'Asistente Técnico',
        imagen: fotoLuis
    },
    {
        nombre: "Matías López",
        rol: 'Encargado de Elementos',
        imagen: fotoMatias
    },
    {
        nombre: 'Carla Ruiz',
        rol: 'Ejecución de Ensayos',
        imagen: fotoCarla
    }
];

const StaffLaboratorio = ({ miembros = equipo }) => {
    return (
        <>
            <h1>Staff del Laboratorio de Automotores:</h1>
            <section className="equipo-grid">
                {miembros.map((persona, index) => (
                    <div className="tarjeta" key={index}>
                        <img src={persona.imagen} alt={`Foto de ${persona.nombre}`} className="foto" />
                        <h3>{persona.nombre}</h3>
                        <p>{persona.rol}</p>
                    </div>
                ))}
            </section>
        </>
    );
};

export default StaffLaboratorio;