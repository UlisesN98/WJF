import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import LayoutJuego from "./components/LayoutJuego";
import JuegoFrases from "./components/JuegoFrases";

function App() {
  return (
    <Routes>
      {/* Ruta de Home */}
      <Route path="/" element={<Inicio />} />

      {/* Ruta para el juego de frases */}
      <Route
        path="/juegos/frases"
        element={
          <LayoutJuego titulo="Juego de Frases">
            <JuegoFrases />
          </LayoutJuego>
        }
      />

      {/* En el futuro, agregar más juegos */}
    </Routes>
  );
}

export default App;
