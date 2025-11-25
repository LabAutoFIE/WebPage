import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CarritoProvider } from '@/context/CarritoContext';
import { AuthProvider } from './context/AuthContext.jsx';
import { ServiciosProvider } from './context/ServiciosContext.jsx';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <ServiciosProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </ServiciosProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)