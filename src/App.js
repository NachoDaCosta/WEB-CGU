import "./App.css";
import Actividades from "./Componentes/Actividades/Aactividades";
import Contact from "./Componentes/Contact/Contact";
import Footer from "./Componentes/Footer/Footer";
import Materias from "./Componentes/Materias/Materias";
import Nav from "./Componentes/Nav/Nav";
import Nosotros from "./Componentes/Nosotros/Nosotros";

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
        <Nav />
        <Materias />
        <Nosotros />
        <Contact />
        <Actividades />
        <Footer />
      </body>
    </div>
  );
}

export default App;
