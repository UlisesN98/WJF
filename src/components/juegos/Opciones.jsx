import "./Opciones.css";
import { getNombrePersonaje } from "../../utils/personajes";
import { mezclarArray } from "../../utils/array";
import { useMemo } from "react";

function Opciones({ opciones, onElegir }) {

  const opcionesMezcladas = useMemo(() => {
    return mezclarArray(opciones);
  }, [opciones]);

  return (
    <div className="opciones">
      {opcionesMezcladas.map((opcionId) => (
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
