import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import '@/styles/login.css';

const Login = () => {
    const { user, login } = useAuth();
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    if (user) return <Navigate to="/dashboard" replace />;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(form);
        if (!success) setError('Credenciales inválidas');
    };

    return (
        <div className="loginContainer">
            <h2>Iniciar sesión:</h2>
            <form onSubmit={handleSubmit} className="loginForm">
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Entrar</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Login;