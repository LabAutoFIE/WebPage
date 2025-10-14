import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Servicios from './components/Servicios';
import Footer from './components/Footer';
import StaffLaboratorio from './components/StaffLaboratorio';
import FormularioContacto from './components/FormularioContacto';
import ServicioDetalle from './pages/ServicioDetalle';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Nav />
        <Gallery />
        <Servicios />
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          {/* Ruta p/ el Staff del Laboratorio */}
          <Route path="/staff" element={<StaffLaboratorio />} />
          {/* Ruta p/ el formulario de contacto */}
          <Route path="/contacto" element={<FormularioContacto />} />
          {/* Ruta p/ las descripciones de Servicios */}
          <Route path='/servicios/:id' element={<ServicioDetalle />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;