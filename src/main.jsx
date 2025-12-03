import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/context/AuthContext.jsx';
import { ServiciosProvider } from '@/context/ServiciosContext.jsx';
import { SearchProvider } from '@/context/BusquedaContext.jsx';
import { CarritoProvider } from '@/context/CarritoContext';
import App from './App.jsx';

// CSS siempre estático
//import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bootstrap JS: carga diferida (code splitting)
import('bootstrap/dist/js/bootstrap.bundle.min.js');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <ServiciosProvider>
          <SearchProvider>
            <CarritoProvider>
              <App />
            </CarritoProvider>
          </SearchProvider>
        </ServiciosProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)