import React, { useState, useEffect } from "react";

const Materias2 = ({ infoMateria, mostrarInformacionMateria }) => {
  const [selected, setSelected] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [materiasFiltradas, setMateriasFiltradas] = useState([]);

  // Lista de todas las materias
  const materias = [
    { nombre: "CALCULO 1", imagen: "/imgs/c1.webp" },
    { nombre: "CALCULO 2", imagen: "/imgs/c2.webp" },
    { nombre: "CALCULO VECTORIAL", imagen: "/imgs/c3.webp" },
    { nombre: "FISICA 1", imagen: "/imgs/f1.webp" },
    { nombre: "FISICA 2", imagen: "/imgs/f2.webp" },
    { nombre: "GAL 1", imagen: "/imgs/g1.webp" },
    { nombre: "GAL 2", imagen: "/imgs/g2.webp" },
    { nombre: "MATEMATICA DISCRETA 1", imagen: "/imgs/m1.webp" },
    { nombre: "MATEMATICA DISCRETA 2", imagen: "/imgs/m2.webp" },
    { nombre: "PROGRAMACION 1", imagen: "/imgs/p1.webp" },
    { nombre: "PROGRAMACION 2", imagen: "/imgs/p2.webp" },
    { nombre: "MATEMATICA INICIAL", imagen: "/imgs/mi.webp" },
  ];

  // Filtrar materias cuando cambia el término de búsqueda
  useEffect(() => {
    const materiasFiltradas = materias.filter((materia) =>
      materia.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMateriasFiltradas(materiasFiltradas);
  }, [searchTerm]);

  const handleMateriaClick = (materia) => {
    setSelected(true);
    mostrarInformacionMateria(materia);
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="materias">
      <h1>Materias</h1>

      {/* Campo de entrada para la búsqueda */}
      <input
        type="text"
        placeholder="Buscar materia por nombre"
        value={searchTerm}
        onChange={handleSearchInput}
        className="search-input"
      />

      <div className="mats">
        {materiasFiltradas.length > 0 ? (
          materiasFiltradas.map((materia) => (
            <div
              key={materia.nombre}
              className="materia-info"
              onClick={() => handleMateriaClick(materia.nombre)}
            >
              <img src={materia.imagen} alt={materia.nombre} />
              <span>{materia.nombre}</span>
            </div>
          ))
        ) : (
          <div>No se encontraron materias</div>
        )}
      </div>

      <div className="infoContainer">
        {!selected ? (
          <div className="haz-click">
            HAZ CLICK EN UNA MATERIA O USA EL BUSCADOR PARA VER SU INFORMACIÓN
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
