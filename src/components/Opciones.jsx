import "./Opciones.css";
import { getNombrePersonaje } from "../utils/personajes";

function Opciones({ opciones, onElegir }) {
  return (
    <div className="opciones">
      {opciones.map((opcionId) => (
        <button
          key={opcionId}
          onClick={() => onElegir(opcionId)}
        >
          {getNombrePersonaje(opcionId)}
        </button>
      ))}
    </div>
  );
}

export default Opciones;
