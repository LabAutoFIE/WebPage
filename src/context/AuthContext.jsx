import { createContext, useContext, useState } from 'react';
// crea el contexto de Autenticacion 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    //Lógica carga usuario de localStorage s/useEffect


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
            localStorage.setItem('user', JSON.stringify(newUser)); //guarda usuario c/token (persistencia)
            return newUser; // ⬅ Retorna el usuario
        }
        return null;
    };

    const logout = () => {
        localStorage.removeItem('user'); // elimina token y usuario
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);