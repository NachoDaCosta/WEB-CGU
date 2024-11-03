import React from "react";
import "./Materias.css";
import { useState } from "react";
import Materias2 from "./Materias_Content";

const Materias = () => {
  const [infoMateria, setInfoMateria] = useState({
    nombre: "",
    detalles: "Haz clic en una materia para ver la información.",
    creditos: "",
    horasPorSemana: "",
    linkClases: "",
  });

  const mostrarInformacionMateria = (nombreMateria) => {
    // Simulación de información detallada. Puedes obtener esta información desde una fuente externa.
    setInfoMateria({
      nombre: nombreMateria,
      creditos: obtenerCreditosMateria(nombreMateria),
      linkClases: obtenerLinkClasesMateria(nombreMateria),
    });
  };

  const obtenerCreditosMateria = (nombreMateria) => {
    switch (nombreMateria) {
      case "CALCULO 1":
        return 13;
      case "CALCULO 2":
        return 13;
      case "CALCULO VECTORIAL":
        return 10;
      default:
      case "FISICA 1":
        return 10;
      case "FISICA 2":
        return 10;
      case "GAL 1":
        return 6;
      case "GAL 2":
        return 9;
      case "MATEMATICA DISCRETA 1":
        return 9;
      case "MATEMATICA DISCRETA 2":
        return 9;
      case "PROGRAMACION 1":
        return 10;
      case "PROGRAMACION 2":
        return 12;
      case "MATEMATICA INICIAL":
        return 4;
    }
  };

  const obtenerLinkClasesMateria = (nombreMateria) => {
    // Simulación de información. Puedes ajustar esto según tus necesidades.
    switch (nombreMateria) {
      case "CALCULO 1":
        return "https://open.fing.edu.uy/courses/civ/";

      case "CALCULO 2":
        return "https://open.fing.edu.uy/courses/cdivv-2022/";

      case "CALCULO VECTORIAL":
        return "https://open.fing.edu.uy/courses/calcvec/";
      case "FISICA 1":
        return "https://open.fing.edu.uy/courses/f1-2022/";

      case "FISICA 2":
        return "https://open.fing.edu.uy/courses/f2-2023/";

      case "GAL 1":
        return "https://open.fing.edu.uy/courses/gal119/";
      case "GAL 2":
        return "https://open.fing.edu.uy/courses/gal219/";

      case "MATEMATICA DISCRETA 1":
        return "https://open.fing.edu.uy/courses/md1-2022/";

      case "MATEMATICA DISCRETA 2":
        return "https://open.fing.edu.uy/courses/md2/";

      case "PROGRAMACION 1":
        return "https://open.fing.edu.uy/courses/p1/";
      case "PROGRAMACION 2":
        return "https://open.fing.edu.uy/courses/p2-2023/";
      // ... Agrega enlaces específicos para las demás materias ...

      default:
        return ``;
    }
  };

  return (
    <Materias2
      infoMateria={infoMateria}
      mostrarInformacionMateria={mostrarInformacionMateria}
      obtenerCreditosMateria={obtenerCreditosMateria}
      obtenerLinkClasesMateria={obtenerLinkClasesMateria}
    />
  );
};

export default Materias;
