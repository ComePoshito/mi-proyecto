import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import Pie from "./componentes/Pie";
import Inicio from "./paginas/inicio";
import Servicio from "./paginas/servicio";
import Contacto from "./paginas/contacto";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Pie />
    </BrowserRouter>
  );
}
export default App;