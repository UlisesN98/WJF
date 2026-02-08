import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import LayoutJuego from "./components/LayoutJuego";
import { registroJuegos } from "./juegos/registroJuegos";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Inicio />} />

      {/* Rutas de juegos */}
      {registroJuegos.map(juego => (
        <Route
          key={juego.id}
          path={juego.ruta}
          element={
            <LayoutJuego titulo={juego.titulo}>
              <juego.Componente />
            </LayoutJuego>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
