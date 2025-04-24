import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Tarjetas from "../../components/Tarjetas";
import { getAllCharacters } from "../../services/api";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [generoFiltro, setGeneroFiltro] = useState(null); // 👈 Estado local

  useEffect(() => {
    async function fetchData() {
      const { characters } = await getAllCharacters();
      setCharacters(characters);
    }
    fetchData();
  }, []);

  const personajesFiltrados = generoFiltro
    ? characters.filter((char) => char.gender === generoFiltro)
    : characters;

  return (
    <div className="page-home">
      <Header setGeneroFiltro={setGeneroFiltro} /> 
      <div className="card-container">
        {personajesFiltrados.map((char) => (
          <Tarjetas
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
            race={char.race}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
