import { createContext, useState } from "react";
// Creo el contexto:
export const CarritoContext = createContext();
// Proveedor del contexto:
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agrego un producto al carrito, incrementando cantidad si ya existe
  const agregarAlCarrito = (servicio) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find(item => item.id === servicio.id);
      if (existe) {
        return prevCarrito.map(item =>
          item.id === servicio.id
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...servicio, cantidad: 1 }];
      }
    });
  };

  // Elimina una unidad del producto, o lo quita si cantidad llega a 0
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map(item =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  // Vacía el carrito completamente:
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};