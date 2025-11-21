import { useAuth } from '@/context/AuthContext';
import { useCarrito } from '@/context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
    const { logout } = useAuth();
    const { vaciarCarrito } = useCarrito();
    const navigate = useNavigate();

    useEffect(() => {
        vaciarCarrito();   // 1. Vacía el carrito
        logout();          // 2. Limpia el usuario
        navigate('/', { replace: true }); // 3. Redirige al home
    }, [logout, vaciarCarrito, navigate]);

    return null;
};

export default Logout;