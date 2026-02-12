import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import LayoutJuego from "./components/LayoutJuego";
import LayoutGlobal from "./components/LayoutGlobal";
import { registroJuegos } from "./juegos/registroJuegos";

function App() {
  return (
    <Routes>
      <Route element={<LayoutGlobal />}>
        <Route path="/" element={<Inicio />} />

        {registroJuegos.map(juego => (
          <Route
            key={juego.id}
            path={juego.ruta}
            element={
              <LayoutJuego nombre={juego.nombre}>
                <juego.Componente />
              </LayoutJuego>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

