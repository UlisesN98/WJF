import "./Resultado.css";
import { getNombrePersonaje } from "../utils/personajes";

function Resultado({ respuestaCorrecta, evidencia, onSiguiente, esUltima }) {
  return (
    <div>
      <p className="respuesta-correcta">
        Respuesta correcta: <strong>{getNombrePersonaje(respuestaCorrecta)}</strong>
      </p>

      {evidencia?.tipo === "imagen" && (
        <img
          className="respuesta-imagen"
          src={evidencia.src}
          alt="Evidencia"
        />
      )}

      {evidencia?.tipo === "youtube" && (
        <iframe
          className="respuesta-video"
          src={`https://www.youtube.com/embed/${evidencia.youtubeId}?start=${evidencia.start}&end=${evidencia.end}&autoplay=1&rel=0&modestbranding=1`}
          title="Evidencia"
          allow="autoplay"
        />
      )}

      {evidencia.tipo === "cita" && (
        <div className="respuesta-cita">
          <img
            className="respuesta-imagen"
            src={evidencia.img}
            alt="Evidencia"
          />
          <a className="respuesta-link" href={evidencia.url} target="_blank" rel="noopener noreferrer">
            Fuente
          </a>
        </div>
      )}

      <button className="boton-siguiente" onClick={onSiguiente}>
        {esUltima ? "Finalizar partida" : "Siguiente frase"}
      </button>
    </div>
  );
}

export default Resultado;
