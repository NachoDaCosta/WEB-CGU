import "./App.css";
import Contact from "./Componentes/Contact/Contact";
import Discreta1 from "./Componentes/Discreta1/Discreta1";
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import Materias from "./Componentes/Materias/Materias";
import Nav from "./Componentes/Nav/Nav";
import Mapa from "./Componentes/mapa/Mapa";

function App() {
  return (
    <div className="container-app">
      <Header />
      <Nav />
      <Discreta1 />
      <Materias />
      <Mapa />
      <Footer />
    </div>
  );
}

export default App;
