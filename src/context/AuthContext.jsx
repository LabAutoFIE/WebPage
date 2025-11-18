import { createContext, useContext, useState, useEffect } from 'react';
// crea el contexto de Autenticacion 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []); //Lógica carga usuaruio de localStorage


    const login = ({ email, password }) => {
        // Validación: cualquier email con "@" y password de 4+ caracteres
        if (email.includes('@') && password.length >= 4) {
            const isAdmin = email === 'admin@fie.undef.edu.ar' && password === 'admin'; // User Admin simulado
            const fakeToken = 'fake-token-' + btoa(email + Date.now()); // Simulación básica
            const newUser = {
                email,
                role: isAdmin ? 'admin' : 'user',
                token: fakeToken //Token simulado
            }; // Defino usuario
            setUser(newUser);
            return newUser; // ⬅ Retorna el usuario
        }
        return null;
    };

    const logout = () => {
        localStorage.removeItem('user'); // necesario al usar persistencia
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);