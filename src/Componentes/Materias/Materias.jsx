import React from "react";
import "./Materias.css";

const Materias = () => {
  return (
    <div className="materias">
      <h1>Materias</h1>

      <div className="mats">
        <div className="materia-info">
          <img src="/imgs/c1.png" alt="" />
          <span>CDIV</span>
        </div>

        <div className="materia-info">
          <img src="/imgs/c2.png" alt="" />
          <span>CDIVV</span>
        </div>

        <div className="materia-info">
          <img src="/imgs/c3.png" alt="" />
          <span>CALCULO VECTORIAL</span>
        </div>

        <div className="materia-info">
          <img src="/imgs/f1.png" alt="" />
          <span>Fisica 1</span>
        </div>

        <div className="materia-info">
          <img src="/imgs/f2.png" alt="" />
          <span>Fisica 2</span>
        </div>

        <div className="materia-info">
          <img src="/imgs/g1.png" alt="" />
          <span>Gal 1</span>
        </div>
      </div>

      <div className="mats">
        <div className="materia-info">
          <img src="/imgs/G2.png" alt="" />
          <span>Gal 2</span>
        </div>

        <div className="materia-info">
          <img src="/imgs/m1.png" alt="" />
          <span>Matematica Discreta 1</span>
        </div>

        <div className="materia-info">
          <img src="/imgs/m2.png" alt="" />
          <span>Matematica Discreta 2</span>
        </div>

        <div className="materia-info">
          <img src="/imgs/p1.png" alt="" />
          <span>Programación 1</span>
        </div>

        <div className="materia-info">
          <img src="/imgs/p2.png" alt="" />
          <span>Programación 2</span>
        </div>
        <div className="materia-info">
          <img src="/imgs/mi.png" alt="" />
          <span>Matematica Inicial</span>
        </div>
      </div>
    </div>
  );
};

export default Materias;
