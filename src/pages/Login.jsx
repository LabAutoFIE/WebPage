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
        const user = login({ email, password });

        if (user) {
            console.log(`[${new Date().toISOString()}] Login exitoso: ${user.email} (${user.role})`);
            navigate(user.role === 'admin' ? '/admin' : '/');
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
                    placeholder="Ej.: usuario@dominio"
                />

                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Debe contener al menos 4 caracteres"
                />

                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;