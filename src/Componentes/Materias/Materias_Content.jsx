import React from "react";

const Materias2 = ({ infoMateria, mostrarInformacionMateria }) => {
  return (
    <div className="materias">
      <h1>Materias</h1>

      <div className="mats">
        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("CDIV")}
        >
          <img src="/imgs/c1.png" alt="" />
          <span>CDIV</span>
        </div>

        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("CDIVV")}
        >
          <img src="/imgs/c2.png" alt="" />
          <span>CDIVV</span>
        </div>

        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("CALCULO VECTORIAL")}
        >
          <img src="/imgs/c3.png" alt="" />
          <span>Calc Vectorial</span>
        </div>

        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("FISICA 1")}
        >
          <img src="/imgs/f1.png" alt="" />
          <span>Fisica 1</span>
        </div>

        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("FISICA 2")}
        >
          <img src="/imgs/f2.png" alt="" />
          <span>Fisica 2</span>
        </div>

        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("GAL 1")}
        >
          <img src="/imgs/g1.png" alt="" />
          <span>Gal 1</span>
        </div>
        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("GAL 2")}
        >
          <img src="/imgs/G2.png" alt="" />
          <span>Gal 2</span>
        </div>

        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("MATEMATICA DISCRETA 1")}
        >
          <img src="/imgs/m1.png" alt="" />
          <span>Matematica Discreta 1</span>
        </div>

        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("MATEMATICA DISCRETA 2")}
        >
          <img src="/imgs/m2.png" alt="" />
          <span>Matematica Discreta 2</span>
        </div>

        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("PROGRAMACION 1")}
        >
          <img src="/imgs/p1.png" alt="" />
          <span>Programación 1</span>
        </div>

        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("PROGRAMACION 2")}
        >
          <img src="/imgs/p2.png" alt="" />
          <span>Programación 2</span>
        </div>
        <div
          className="materia-info"
          onClick={() => mostrarInformacionMateria("MATEMATICA INICIAL")}
        >
          <img src="/imgs/mi.png" alt="" />
          <span>Matematica Inicial</span>
        </div>
      </div>
      <div id="infoContainer">
        <div className="title-materia">
          Información detallada de {infoMateria.nombre}
        </div>

        <div>Creditos: {infoMateria.creditos}</div>
        <div className="openfing">
          Link a clases Grabadas:{" "}
          <a
            href={infoMateria.linkClases}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              src="https://eva.fing.edu.uy/file.php/1/botonera/06.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Materias2;
