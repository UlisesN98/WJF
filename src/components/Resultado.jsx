import "./Resultado.css";

function Resultado({ esCorrecta, respuestaCorrecta, evidencia, onSiguiente }) {
  return (
    <div>
      <p>
        Respuesta correcta: <strong>{respuestaCorrecta}</strong>
      </p>

      {evidencia.tipo === "imagen" && (
        <img
          src={evidencia.src}
          alt="Evidencia"
          width={300}
        />
      )}

      <button onClick={onSiguiente}>
        Siguiente frase
      </button>
    </div>
  );
}

export default Resultado;
