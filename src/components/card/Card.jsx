import React from "react";
import { pacientes } from "../../data/data";
import "./card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="cards">
        {pacientes.map((paciente) => {
          return (
            <div className="card" key={paciente.id}>
              <h3 className="num-paciente">
                Numero de paciente: {paciente.id}
              </h3>
              <h3 className="nombre">Nombre: {paciente.nombre}</h3>
              <div className="container">
                <p className="telefono">Teléfono: {paciente.telefono} </p>
                <p className="fecha">Fecha de cita: {paciente.fecha}</p>
                <p className="sintoma">Sintomas: {paciente.sintoma}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
