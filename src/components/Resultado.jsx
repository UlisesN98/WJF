import "./Resultado.css";

function Resultado({ respuestaCorrecta, evidencia, onSiguiente }) {
  return (
    <div>
      <p className="respuesta-correcta">
        Respuesta correcta: <strong>{respuestaCorrecta}</strong>
      </p>

      {evidencia.tipo === "imagen" && (
        <img
          className="respuesta-evidencia"
          src={evidencia.src}
          alt="Evidencia"
        />
      )}

      <button className="boton-siguiente" onClick={onSiguiente}>
        Siguiente frase
      </button>
    </div>
  );
}

export default Resultado;
