import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Servicios from './components/Servicios';
import Footer from './components/Footer';
import StaffLaboratorio from './components/StaffLaboratorio';
import FormularioContacto from './components/FormularioContacto';


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
          {/* Ruta para el Staff del Laboratorio */}
          <Route path="/staff" element={<StaffLaboratorio />} />
          {/* Ruta para el formulario de contacto */}
          <Route path="/contacto" element={<FormularioContacto />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;