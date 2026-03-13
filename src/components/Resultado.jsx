import "./Resultado.css";

function Resultado({ respuestaCorrecta, evidencia, onSiguiente }) {
  return (
    <div>
      <p className="respuesta-correcta">
        Respuesta correcta: <strong>{respuestaCorrecta}</strong>
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

      <button className="boton-siguiente" onClick={onSiguiente}>
        Siguiente frase
      </button>
    </div>
  );
}

export default Resultado;
