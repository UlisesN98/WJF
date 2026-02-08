import { Link } from "react-router-dom";
import { registroJuegos } from "../juegos/registroJuegos";

function Inicio() {
  return (
    <div>
      <h1>Bienvenido a los Juegos de Fútbol</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {registroJuegos.map(juego => (
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

            <Link to={juego.ruta}>
              <button>Jugar</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;

