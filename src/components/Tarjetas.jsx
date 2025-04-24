import { useNavigate } from "react-router-dom";
import "./Tarjetas.css";

function Tarjetas({ id, name, image, race }) {
  const navigate = useNavigate();

  return (
    <div className="character-card" onClick={() => navigate(`/personaje/${id}`)}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Raza: {race}</p>
    </div>
  );
}

export default Tarjetas;
