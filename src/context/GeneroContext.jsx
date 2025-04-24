// src/context/GeneroContext.jsx
import { createContext, useContext, useState } from "react";

const GeneroContext = createContext();

export const GeneroProvider = ({ children }) => {
  const [generoFiltro, setGeneroFiltro] = useState(null);

  return (
    <GeneroContext.Provider value={{ generoFiltro, setGeneroFiltro }}>
      {children}
    </GeneroContext.Provider>
  );
};

export const useGenero = () => useContext(GeneroContext);
