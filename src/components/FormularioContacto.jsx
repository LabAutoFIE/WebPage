import { useState } from 'react';
import BotonHeader from './BotonHeader';
import '@/styles/formulario-contacto.css';

const FormularioContacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: '',
    });

    const [errores, setErrores] = useState({});

    const validarEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const contarPalabras = (texto) => {
        return texto.trim().split(/\s+/).filter(Boolean).length;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevosErrores = {};

        if (!formData.nombre) nuevosErrores.nombre = 'Campo obligatorio';
        if (!formData.apellido) nuevosErrores.apellido = 'Campo obligatorio';
        if (!validarEmail(formData.email)) nuevosErrores.email = 'Email inválido';
        if (contarPalabras(formData.mensaje) > 200)
            nuevosErrores.mensaje = 'Máximo 200 palabras';

        setErrores(nuevosErrores);

        if (Object.keys(nuevosErrores).length === 0) {
            console.log('Formulario enviado:', formData);
            // Acá podría integrar una API o servicio institucional
        }
    };

    const handleReset = () => {
        setFormData({
            nombre: '',
            apellido: '',
            email: '',
            mensaje: '',
        });
        setErrores({});
    };

    return (
        <form className="formulario-contacto" onSubmit={handleSubmit}>
            <div className="campo">
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                {errores.nombre && <span className="error">{errores.nombre}</span>}
            </div>

            <div className="campo">
                <label>Apellido:</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                />
                {errores.apellido && <span className="error">{errores.apellido}</span>}
            </div>

            <div className="campo">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errores.email && <span className="error">{errores.email}</span>}
            </div>

            <div className="campo">
                <label>Mensaje (máx. 200 palabras):</label>
                <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="5"
                />
                {errores.mensaje && <span className="error">{errores.mensaje}</span>}
            </div>

            <div className="botones-formulario">
                <BotonHeader texto="Enviar" icono={null} tipo="submit" />
                <BotonHeader texto="Borrar" icono={null} tipo="button" onClick={handleReset} />
            </div>
        </form>
    );
};

export default FormularioContacto;