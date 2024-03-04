import "./App.css";
import Actividades from "./Componentes/Actividades/Aactividades";
import Contact from "./Componentes/Contact/Contact";
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import Materias from "./Componentes/Materias/Materias";
import Nav from "./Componentes/Nav/Nav";
import Nosotros from "./Componentes/Nosotros/Nosotros";

function App() {
  return (
    <div className="container-app">
      <Header />
      <Nav />
      <Materias />
      <Nosotros />
      <Actividades />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
