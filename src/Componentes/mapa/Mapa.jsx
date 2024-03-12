import React from "react";
import "./mapa.css";
const Map = () => {
  return (
    <div className="mapa-container">
      <span>Donde Estamos?</span>
      <iframe
        title="Mapa Fing"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13086.115371414055!2d-56.1662718!3d-34.9182716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81987d10c86d%3A0xf302eed9b9f6410a!2sFacultad%20de%20Ingenier%C3%ADa%20-%20UdelaR!5e0!3m2!1ses!2suy!4v1710271380851!5m2!1ses!2suy"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="mapa"
      ></iframe>
    </div>
  );
};

export default Map;
