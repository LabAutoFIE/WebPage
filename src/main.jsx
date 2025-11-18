import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CarritoProvider } from '@/context/CarritoContext';
import { AuthProvider } from './context/AuthContext.jsx';
import { ServiciosProvider } from './context/ServiciosContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ServiciosProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </ServiciosProvider>
    </AuthProvider>
  </StrictMode>,
)
