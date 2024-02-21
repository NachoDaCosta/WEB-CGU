import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <div>
            <img src="./imgs/logo-cgu.jpg" alt="" className="logo" />
          </div>
          <h1>CGU INGENIERÍA</h1>
          <h1>LA FING ESTÁ CAMBIANDO</h1>
        </header>

        <nav>
          <ul>
            <li>
              <a href="#materia1">SOBRE NOSOTROS</a>
            </li>
            <li>
              <a href="#materia2">CONTACTO</a>
            </li>
            <li>
              <a href="#materia1">PREGUNTAS FRECUENTES</a>
            </li>
            <li>
              <a href="#materia2">EVA</a>
            </li>
            <li>
              <a href="#materia2">OPENFING</a>
            </li>
          </ul>
        </nav>

        <main>
          <section id="materia1">
            <h2>Materia 1</h2>
            <p>Descripción de la materia y enlaces a los PDFs:</p>
            <ul>
              <li>
                <a href="pdfs/materia1_tema1.pdf" target="_blank">
                  Tema 1: Introducción
                </a>
              </li>
              <li>
                <a href="pdfs/materia1_tema2.pdf" target="_blank">
                  Tema 2: Fundamentos
                </a>
              </li>
            </ul>
          </section>

          <section id="materia2">
            <h2>Materia 2</h2>
            <p>Descripción de la materia y enlaces a los PDFs:</p>
            <ul>
              <li>
                <a href="pdfs/materia2_tema1.pdf" target="_blank">
                  Tema 1: Conceptos Básicos
                </a>
              </li>
              <li>
                <a href="pdfs/materia2_tema2.pdf" target="_blank">
                  Tema 2: Avanzado
                </a>
              </li>
            </ul>
          </section>
        </main>

        <footer>
          <p>
            &copy; 2024 Recursos para Estudiantes. Todos los derechos
            reservados.
          </p>
        </footer>
      </body>
    </div>
  );
}

export default App;
