import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Historia from '@/pages/Historia';
import StaffLaboratorio from '@/components/StaffLaboratorio';
import FormularioContacto from '@/components/FormularioContacto';
import Servicios from '@/components/Servicios';
import ServicioDetalle from '@/pages/ServicioDetalle';
import Home from '@/pages/Home';
import SitioEnConstruccion from '@/components/SitioEnConstruccion';
import Carrito from '@/components/Carrito';
import RutaProtegida from '@/components/RutaProtegida';
import Login from '@/pages/Login';
import Admin from '@/pages/Admin';
import Logout from './components/Logout';
import { Helmet } from 'react-helmet-async';
import './App.css';

const App = () => {

  return (
    <>
      <Helmet>
        <title>Laboratorio de Automotores - Facultad de Ingeniería del Ejército</title>
        <meta
          name="description"
          content="Portal oficial del Laboratorio de Automotores de la Facultad de Ingeniería del Ejército. Conoce la historia, servicios, staff y proyectos en curso."
        />
      </Helmet>

      <Router>
        <Header />
        <Gallery />
        <Routes>
          {/* Ruta p/ el Home s/ carrito repito servicios */}
          <Route path='/' element={<Home />} />
          {/* Ruta p/ Historia del Laboratorio */}
          <Route path='/historia' element={<Historia />} />
          {/* Ruta p/ el Staff del Laboratorio */}
          <Route path='/staff' element={<StaffLaboratorio />} />
          {/* Ruta p/ el formulario de contacto */}
          <Route path='/contacto' element={<FormularioContacto />} />
          {/* Ruta p/ las descripciones de Servicios y usar Context también se puede agregar al carrito*/}
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/servicios/:id' element={<ServicioDetalle />} />
          {/* Ruta protegida p/ el Carrito */}
          <Route path='/carrito' element={
            <RutaProtegida>
              <Carrito />
            </RutaProtegida>
          } />
          {/* Ruta protegida p/ el Administrador */}
          <Route path='/admin' element={
            <RutaProtegida requiereRol="admin">
              <Admin />
            </RutaProtegida>
          } />
          {/* otras rutas */}
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          {/* Sitios en construcción */}
          <Route path='/equipos' element={<SitioEnConstruccion mensaje="Sección Equipamiento en construcción" />} />
        </Routes>
      </Router >
      <Footer />
    </>
  );
};

export default App;