import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useCarrito } from '@/context/CarritoContext';
import styles from '@styles/login.module.css';

const LoginLogout = () => {
    const { user, login, logout } = useAuth();
    const { vaciarCarrito } = useCarrito();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Si ya está autenticado, cerrar sesión automáticamente
    useEffect(() => {
        if (user) {
            vaciarCarrito();
            logout();
            navigate('/', { replace: true });
        }
    }, [user, logout, vaciarCarrito, navigate]);

    const manejarSubmit = (e) => {
        e.preventDefault();

        const usuario = login({ email, password });

        if (usuario) {
            localStorage.setItem('user', JSON.stringify(usuario)); // Guarda usuario completo

            if (usuario.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        } else {
            setError('Credenciales inválidas. Intente nuevamente.');
        }
    };

    // Si ya está autenticado, no mostrar el formulario
    if (user) return null;

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={manejarSubmit} className={styles.loginForm}>
                <h2>Iniciar sesión</h2>

                {error && <p className={styles.error}>{error}</p>}

                <label>e-mail:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default LoginLogout;