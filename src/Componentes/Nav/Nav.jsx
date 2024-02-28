import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#nosotros">SOBRE NOSOTROS</a>
        </li>
        <li>
          <a href="#contacto">CONTACTO</a>
        </li>
        <li>
          <a href="https://eva.fing.edu.uy/">EVA</a>
        </li>
        <li>
          <a href="https://open.fing.edu.uy/">OPENFING</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
