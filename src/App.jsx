import "./App.css";
import Home from "./pages/Home/home";
import Detalles from "./pages/Detalles/detalles";
import { Routes, Route } from "react-router-dom";
import About from "./pages/acerca/acerca";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personaje/:id" element={<Detalles />} />
      <Route path="/acerca" element={<About />} />
    </Routes>
  );
}

export default App;
