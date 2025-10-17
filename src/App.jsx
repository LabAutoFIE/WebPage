import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import StaffLaboratorio from './components/StaffLaboratorio';
import FormularioContacto from './components/FormularioContacto';
import Servicios from './components/Servicios';
import ServicioDetalle from './pages/ServicioDetalle';
import Home from './pages/Home';
import SitioEnConstruccion from './components/SitioEnConstruccion';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Gallery />
        <Routes>
          {/* Ruta p/ el Home con el carrito */}
          <Route path='/Home' element={<Home />} />
          {/* Ruta p/ el Staff del Laboratorio */}
          <Route path='/staff' element={<StaffLaboratorio />} />
          {/* Ruta p/ el formulario de contacto */}
          <Route path='/contacto' element={<FormularioContacto />} />
          {/* Ruta p/ las descripciones de Servicios Acá al renderizar solo servicios, no está el carrito para agregar...*/}
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/servicios/:id' element={<ServicioDetalle />} />
          {/* Sitios en construcción */}
          <Route path='/historia' element={<SitioEnConstruccion mensaje="Sección Historia en construcción" />} />
          <Route path='/equipos' element={<SitioEnConstruccion mensaje="Sección Equipamiento en construcción" />} />
          <Route path='/login' element={<SitioEnConstruccion mensaje="Sección Log in en construcción" />} />
          <Route path='/carrito' element={<SitioEnConstruccion mensaje="Sección Carrito en construcción" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;