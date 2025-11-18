import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Login from '@/pages/Login';
import Logout from '@/components/Logout';
//import LoginLogout from '@/pages/LoginLogout'
import Admin from '@/pages/Admin';

const App = () => {

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
          {/* Ruta p/ las descripciones de Servicios y usar Context también se puede agregar al carrito*/}
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/servicios/:id' element={<ServicioDetalle />} />

          <Route path='/carrito' element={
            <RutaProtegida>
              <Carrito />
            </RutaProtegida>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />

          <Route path='/admin' element={
            <RutaProtegida requiereRol="admin">
              <Admin />
              <SitioEnConstruccion mensaje="Sección Administrador en construcción p/ daministrar servicios" />
            </RutaProtegida>
          } />

          {/* Sitios en construcción */}
          <Route path='/historia' element={<SitioEnConstruccion mensaje="Sección Historia en construcción" />} />
          <Route path='/equipos' element={<SitioEnConstruccion mensaje="Sección Equipamiento en construcción" />} />
        </Routes>
      </Router >
      <Footer />
    </>
  );
};

export default App;