import React from "react";

const Materias2 = ({ infoMateria, mostrarInformacionMateria }) => {
  return (
    <div className="materias">
      <h1>Materias</h1>

      <div className="mats">
        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("CDIV")}
        >
          <img src="/imgs/c1.webp" alt="" />
          <span>CDIV</span>
        </a>

        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("CDIVV")}
        >
          <img src="/imgs/c2.webp" alt="" />
          <span>CDIVV</span>
        </a>

        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("CALCULO VECTORIAL")}
        >
          <img src="/imgs/c3.webp" alt="" />
          <span>Calc Vectorial</span>
        </a>

        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("FISICA 1")}
        >
          <img src="/imgs/f1.webp" alt="" />
          <span>Fisica 1</span>
        </a>

        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("FISICA 2")}
        >
          <img src="/imgs/f2.webp" alt="" />
          <span>Fisica 2</span>
        </a>

        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("GAL 1")}
        >
          <img src="/imgs/g1.webp" alt="" />
          <span>Gal 1</span>
        </a>
        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("GAL 2")}
        >
          <img src="/imgs/g2.webp" alt="" />
          <span>Gal 2</span>
        </a>

        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("MATEMATICA DISCRETA 1")}
        >
          <img src="/imgs/m1.webp" alt="" />
          <span>Matematica Discreta 1</span>
        </a>

        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("MATEMATICA DISCRETA 2")}
        >
          <img src="/imgs/m2.webp" alt="" />
          <span>Matematica Discreta 2</span>
        </a>

        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("PROGRAMACION 1")}
        >
          <img src="/imgs/p1.webp" alt="" />
          <span>Programación 1</span>
        </a>

        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("PROGRAMACION 2")}
        >
          <img src="/imgs/p2.webp" alt="" />
          <span>Programación 2</span>
        </a>
        <a
          href="#infoContainer"
          className="materia-info"
          onClick={() => mostrarInformacionMateria("MATEMATICA INICIAL")}
        >
          <img src="/imgs/mi.webp" alt="" />
          <span>Matematica Inicial</span>
        </a>
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
