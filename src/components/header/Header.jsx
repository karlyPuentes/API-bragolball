import React from "react";
import "./Header.css";
import { FaHome, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ setGeneroFiltro }) => {
  return (
    <header className="header">
      <div className="header-section left">
        <Link to="/" className="home-button">
          <FaHome className="icon" /> Inicio
        </Link>
      </div>

      <div className="header-section center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Dragon_Ball_manga_1st_Japanese_edition_logo.svg"
          alt="Dragon Ball Logo"
          className="logo"
        />
      </div>

      {/* Filtro hombres */}
      <button className="filter-button" onClick={() => setGeneroFiltro("Male")}>
        <FaFilter className="icon" /> Hombres
      </button>

      {/* Filtro mujeres */}
      <button
        className="filter-button"
        onClick={() => setGeneroFiltro("Female")}
      >
        <FaFilter className="icon" /> Mujeres
      </button>

      {/* Todos */}
      <button className="filter-button" onClick={() => setGeneroFiltro(null)}>
        <FaFilter className="icon" /> Todos
      </button>

      <Link to="/acerca" className="filter-button">
        <FaFilter className="icon" /> Acerca de
      </Link>   
    </header>
  );
};

export default Header;
