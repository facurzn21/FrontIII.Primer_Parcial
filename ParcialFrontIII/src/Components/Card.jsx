// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

// eslint-disable-next-line react/prop-types
function Card({ name, color }) {
  return (
    <div className="card">
      <h2>Hola, {name}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div className="color-display" style={{ backgroundColor: color }}>
        <span style={{ color: "#ffffff" }}>{color}</span>
      </div>
    </div>
  );
}

export default Card;
