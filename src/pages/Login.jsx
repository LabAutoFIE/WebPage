import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import styles from '@styles/login.module.css';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault();

        const usuario = login({ email, password });

        if (usuario) {
            // Guardar en localStorage si querés persistencia
            localStorage.setItem('user', JSON.stringify({ email })); // Guarda usuario completo
            if (usuario.role === 'admin') {
                navigate('/admin'); // Redirige a página administración
            } else {
                navigate('/'); // Redirige al home
            }

        } else {
            setError('Credenciales inválidas. Intente nuevamente.');
        }
    };

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

export default Login;
