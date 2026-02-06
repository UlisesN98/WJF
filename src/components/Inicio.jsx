import { useState } from "react";
import { juegosDisponibles } from "../data/juegos";
import LayoutJuego from "./LayoutJuego";
import JuegoFrases from "./JuegoFrases"; // tu juego ya descompuesto

function Inicio() {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

  function volverAlMenu() {
    setJuegoSeleccionado(null);
  }

  if (juegoSeleccionado === "frases") {
    return (
      <LayoutJuego
        titulo="Juego de Frases"
        onVolverAlMenu={volverAlMenu}
      >
        <JuegoFrases />
      </LayoutJuego>
    );
  }

  return (
    <div>
      <h1>Bienvenido a los Juegos de Fútbol</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {juegosDisponibles.map(juego => (
          <div
            key={juego.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              textAlign: "center"
            }}
          >
            <img
              src={juego.imagen}
              alt={juego.nombre}
              width="150"
            />
            <h3>{juego.nombre}</h3>
            <p>{juego.descripcion}</p>
            <button onClick={() => setJuegoSeleccionado(juego.id)}>
              Jugar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
