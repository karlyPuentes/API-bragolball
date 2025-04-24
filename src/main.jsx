import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/header/Header.jsx";
import { GeneroProvider } from "./context/GeneroContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GeneroProvider>
        <App />
      </GeneroProvider>
    </BrowserRouter>
  </StrictMode>
);
