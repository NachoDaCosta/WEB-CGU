import React, { useState } from "react";

const Materias2 = ({ infoMateria, mostrarInformacionMateria }) => {
  const [selected, setSelected] = useState(false); // Estado para verificar si se ha seleccionado una materia

  const handleMateriaClick = (materia) => {
    setSelected(true); // Cambia el estado a true cuando se hace clic en una materia
    mostrarInformacionMateria(materia); // Llama a la función para mostrar la información
  };

  return (
    <div className="materias">
      <h1>Materias</h1>

      <div className="mats">
        <div
          className="materia-info"
          onClick={() => handleMateriaClick("CDIV")}
        >
          <img src="/imgs/c1.webp" alt="" />
          <span>CDIV</span>
        </div>

        <div
          className="materia-info"
          onClick={() => handleMateriaClick("CDIVV")}
        >
          <img src="/imgs/c2.webp" alt="" />
          <span>CDIVV</span>
        </div>

        <div
          className="materia-info"
          onClick={() => handleMateriaClick("CALCULO VECTORIAL")}
        >
          <img src="/imgs/c3.webp" alt="" />
          <span>Calc Vectorial</span>
        </div>

        <div
          className="materia-info"
          onClick={() => handleMateriaClick("FISICA 1")}
        >
          <img src="/imgs/f1.webp" alt="" />
          <span>Fisica 1</span>
        </div>

        <div
          className="materia-info"
          onClick={() => handleMateriaClick("FISICA 2")}
        >
          <img src="/imgs/f2.webp" alt="" />
          <span>Fisica 2</span>
        </div>

        <div
          className="materia-info"
          onClick={() => handleMateriaClick("GAL 1")}
        >
          <img src="/imgs/g1.webp" alt="" />
          <span>Gal 1</span>
        </div>
        <div
          className="materia-info"
          onClick={() => handleMateriaClick("GAL 2")}
        >
          <img src="/imgs/g2.webp" alt="" />
          <span>Gal 2</span>
        </div>

        <div
          className="materia-info"
          onClick={() => handleMateriaClick("MATEMATICA DISCRETA 1")}
        >
          <img src="/imgs/m1.webp" alt="" />
          <span>Matematica Discreta 1</span>
        </div>

        <div
          className="materia-info"
          onClick={() => handleMateriaClick("MATEMATICA DISCRETA 2")}
        >
          <img src="/imgs/m2.webp" alt="" />
          <span>Matematica Discreta 2</span>
        </div>

        <div
          className="materia-info"
          onClick={() => handleMateriaClick("PROGRAMACION 1")}
        >
          <img src="/imgs/p1.webp" alt="" />
          <span>Programación 1</span>
        </div>

        <div
          className="materia-info"
          onClick={() => handleMateriaClick("PROGRAMACION 2")}
        >
          <img src="/imgs/p2.webp" alt="" />
          <span>Programación 2</span>
        </div>
        <div
          className="materia-info"
          onClick={() => handleMateriaClick("MATEMATICA INICIAL")}
        >
          <img src="/imgs/mi.webp" alt="" />
          <span>Matematica Inicial</span>
        </div>
      </div>

      <div className="infoContainer">
        {!selected ? (
          <div className="haz-click">
            HAZ CLICK EN UNA MATERIA PARA VER SU INFORMACIÓN
          </div>
        ) : (
          <>
            <div className="title-materia">
              Información detallada de {infoMateria.nombre}
            </div>
            <div>Creditos: {infoMateria.creditos}</div>
            <div className="openfing">
              Link a clases Grabadas:
              <a
                href={infoMateria.linkClases}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Enlace a clases grabadas"
                  src="https://eva.fing.edu.uy/file.php/1/botonera/06.png"
                />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Materias2;
