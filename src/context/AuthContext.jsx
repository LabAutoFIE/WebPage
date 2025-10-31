import { createContext, useContext, useState } from 'react';
// crea el contexto de Autenticacion 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = ({ email, password }) => {
        // Simulación: cualquier email con "@" y password de 4+ caracteres
        if (email.includes('@') && password.length >= 4) {
            const isAdmin = email === 'admin@fie.undef.edu.ar' && password === 'admin';
            setUser({ email, role: isAdmin ? 'admin' : 'user' });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // ✅ necesario al usar persistencia
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);