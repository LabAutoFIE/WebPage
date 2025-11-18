import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const RutaProtegida = ({ children, requiereRol = null }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />; //Redirige a login si no hay sesión
    }

    if (requiereRol && user.role !== requiereRol) {
        return <Navigate to="/" replace />; //Redirige a home si no tiene  rol
    }

    return children;
};

export default RutaProtegida;