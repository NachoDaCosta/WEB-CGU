import React from "react";
import "./Actividades.css";
const Actividades = () => {
  return (
    <div className="actividades-container">
      <div className="title">Algunas de nuestras actividades</div>
      <div className="charla-gnexus">
        <div className="charla-con">
          <h1>Charla con Gastón Milano</h1>
          <img alt="" src="./imgs/gnex.png" className="empresa" />
        </div>

        <iframe
          className="video"
          width="800"
          height="400"
          src="https://www.youtube.com/embed/s0qFHeW1Lt4"
          title="Charlas CGU: Tecnología y emprendedurismo - Gastón Milano"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="charla-pedidos">
        <iframe
          className="video"
          width="800"
          height="400"
          src="https://www.youtube.com/embed/uSwqTxhHnNo"
          title="Charlas CGU: Tecnología y emprendedurismo - Rubén Sosenke"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="charla-con">
          <h1>Charla con Rubén Sonsenke</h1>
          <img alt="" src="./imgs/pedidos.svg" className="empresa" />
        </div>
      </div>
    </div>
  );
};
export default Actividades;
