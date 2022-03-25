import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Header = () => {


  return (
    <div className="header-container">
      <div className="header-links">
        <div className="logo">
          <h1>Consultas Express</h1>
        </div>
        <div className="items">
          <ul className="item">
            <li className="item-page">
              <Link className="option" to="/consulta">
                Realiza tu cita
              </Link>
            </li>
            <li className="item-page">
              <Link
                className="option"
                to="/citas"
              >
                Citas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
