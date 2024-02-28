import React from "react";
import "./Nosotros.css";
const Nosotros = () => {
  return (
    <div className="nosotros-container" id="nosotros">
      <div className="left-column-about">
        <h1>Quienes Somos?</h1>
        <div className="text">
          Somos CGU FING Corriente Gremial Universitaria en Facultad de
          Ingeniería. Buscamos empoderar a los estudiantes a través de la
          participación activa y el liderazgo, creando un entorno inclusivo que
          fomente el aprendizaje colaborativo, el desarrollo personal y la
          defensa de los derechos estudiantiles. Nos comprometemos a inspirar la
          excelencia académica, promover la diversidad y la igualdad, y cultivar
          habilidades para la vida que preparen a nuestros miembros para
          enfrentar los desafíos del mundo. Ser reconocidos como una agrupación
          estudiantil innovadora y líder en la creación de oportunidades
          significativas para el crecimiento integral de cada estudiante. Nos
          visualizamos como una comunidad diversa, unida por el respeto mutuo y
          la colaboración, que influye positivamente en el entorno universitario
          y más allá. Aspiramos a ser agentes de cambio, impulsando un futuro
          donde cada estudiante pueda alcanzar su máximo potencial y contribuir
          de manera significativa a la sociedad.
        </div>
      </div>
      <div>
        <img alt=" " src="./imgs/nosotros.webp" className="us-pic" />
      </div>
    </div>
  );
};

export default Nosotros;
