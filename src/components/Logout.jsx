import { useAuth } from '@/context/AuthContext';
import { useCarrito } from '@/context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
    const { logout } = useAuth();
    const { vaciarCarrito } = useCarrito();
    const navigate = useNavigate();

    useEffect(() => {
        const cerrarSesion = () => {
            vaciarCarrito(); // ✅ primero vacía el carrito
            logout();        // ✅ luego limpia el usuario
            navigate('/', { replace: true }); // ✅ finalmente redirige
        };

        cerrarSesion();
    }, [logout, vaciarCarrito, navigate]);

    return null;
};

export default Logout;