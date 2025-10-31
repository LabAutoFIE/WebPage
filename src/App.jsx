import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import StaffLaboratorio from '@/components/StaffLaboratorio';
import FormularioContacto from '@/components/FormularioContacto';
import Servicios from '@/components/Servicios';
import ServicioDetalle from '@/pages/ServicioDetalle';
import Home from '@/pages/Home';
import SitioEnConstruccion from '@/components/SitioEnConstruccion';
import Carrito from '@/components/Carrito';
import RutaProtegida from '@/components/RutaProtegida';
import Login from '@/components/Login';
import Logout from '@/components/Logout';
import Admin from './components/Admin';

const App = () => {
  const { user } = useAuth();
  const estaAutenticado = !!user;
  return (
    <>
      <Router>
        <Header />
        <Gallery />
        <Routes>
          {/* Ruta p/ el Home s/ carrito repito servicios */}
          <Route path='/' element={<Home />} />
          {/* Ruta p/ el Staff del Laboratorio */}
          <Route path='/staff' element={<StaffLaboratorio />} />
          {/* Ruta p/ el formulario de contacto */}
          <Route path='/contacto' element={<FormularioContacto />} />
          {/* Ruta p/ las descripciones de Servicios Acá al renderizar solo servicios, no está el carrito para agregar...*/}
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/servicios/:id' element={<ServicioDetalle />} />

          <Route path='/carrito' element={
            <RutaProtegida estaAutenticado={estaAutenticado}>
              <Carrito />
            </RutaProtegida>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />

          <Route path='/admin' element={
            <RutaProtegida estaAutenticado={estaAutenticado}>
              <Admin />
              <SitioEnConstruccion mensaje="Sección Administrador en construcción p/ daministrar servicios" />
            </RutaProtegida>
          } />

          {/* Sitios en construcción */}
          <Route path='/historia' element={<SitioEnConstruccion mensaje="Sección Historia en construcción" />} />
          <Route path='/equipos' element={<SitioEnConstruccion mensaje="Sección Equipamiento en construcción" />} />
        </Routes>
        <Footer />
      </Router >
    </>
  );
};

export default App;