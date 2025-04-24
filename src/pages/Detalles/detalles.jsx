import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./detalles.css";
import Header from "../../components/header/Header";  

function Detalles() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
      const data = await response.json();
      setPersonaje(data);
    }
    fetchData();
  }, [id]);

  if (!personaje) return <div className="cargando">Cargando...</div>;

  return (
    <div className="detalles-page">
      <Header/>
      <div className="detalles-contenido">
        <div className="imagen-principal">
          <img src={personaje.image} alt={personaje.name} />
        </div>
        <div className="info-principal">
          <h1>{personaje.name}</h1>
          <p><strong>Raza:</strong> {personaje.race}</p>
          <p><strong>Género:</strong> {personaje.gender}</p>
          <p><strong>Ki:</strong> {personaje.ki}</p>
          <p><strong>Máximo Ki:</strong> {personaje.maxKi}</p>
          <p><strong>Afiliación:</strong> {personaje.affiliation}</p>
          <p><strong>Descripción:</strong> {personaje.description}</p>
        </div>
      </div>


      <div className="transformaciones">
        <h2>🔥 Transformaciones</h2>
        <div className="transformaciones-grid">
          {personaje.transformations.map((transfo) => (
            <div key={transfo.id} className="transfo-card">
              <img src={transfo.image} alt={transfo.name} />
              <h3>{transfo.name}</h3>
              <p>Ki: {transfo.ki}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="planeta-info">
        <div>
        <h2>🌍 Planeta de Origen: {personaje.originPlanet?.name}</h2>
        <img src={personaje.originPlanet?.image} alt="planeta" />
        </div>
        <div className="aa">
        <p>{personaje.originPlanet?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Detalles;
