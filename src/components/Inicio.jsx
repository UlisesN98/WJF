import "./Inicio.css";
import { Link } from "react-router-dom";
import { registroJuegos } from "../juegos/registroJuegos";

function Inicio() {
  return (
    <div className="inicio">
      <div className="lista-juegos">
        {registroJuegos.map(juego => (
          <div key={juego.id} className="card-juego">
            <h3>{juego.nombre}</h3>
            <img
              src={juego.imagen}
              alt={juego.nombre}
              width="150"
            />
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

