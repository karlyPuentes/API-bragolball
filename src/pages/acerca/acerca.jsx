import React from "react";
import "./acerca.css";
import Header from "../../components/header/Header";
import alexaImg from '../../assets/alexa.png';

function About() {
  return (
    <div className="about-page">
      <Header />
      <div className="about-content">
        <h1>Acerca de esta App</h1>
        <p>
          Esta aplicación fue creada como un proyecto personal usando React. 
          Utiliza la API pública de Dragon Ball para mostrar personajes, sus transformaciones, planetas de origen y más.
        </p>
        <p>
          💻 <strong>Tecnologías usadas:</strong> React, React Router, CSS Modules, fetch API, useEffect.
        </p>
        <p>
          👨‍💻 <strong>Desarrollador:</strong> Karly Alexa Puentes Moreno
        </p>
        <img src={alexaImg} alt="img no encontrada" />
      </div>
    </div>
  );
}

export default About;
