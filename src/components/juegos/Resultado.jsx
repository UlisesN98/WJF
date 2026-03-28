import "./Resultado.css";
import EvidenciaYoutube from "./evidencias/EvidenciaYoutube";
import EvidenciaCita from "./evidencias/EvidenciaCita";
import EvidenciaImagen from "./evidencias/EvidenciaImagen";
import { getNombrePersonaje } from "../../utils/personajes";

function Resultado({ respuestaCorrecta, evidencia, onSiguiente, esUltima }) {
  return (
    <div>
      <p className="respuesta-correcta">
        Respuesta correcta: <strong>{getNombrePersonaje(respuestaCorrecta)}</strong>
      </p>

      {evidencia?.tipo === "imagen" && (
        <EvidenciaImagen evidencia={evidencia} />
      )}

      {evidencia?.tipo === "youtube" && (
        <EvidenciaYoutube evidencia={evidencia} />
      )}

      {evidencia.tipo === "cita" && (
        <EvidenciaCita evidencia={evidencia} />
      )}

      <button className="boton-accion" onClick={onSiguiente}>
        {esUltima ? "Finalizar partida" : "Siguiente frase"}
      </button>
    </div>
  );
}

export default Resultado;
