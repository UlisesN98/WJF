import "./ResultadoSimbolo.css";

function ResultadoSimbolo({ esCorrecta, timeout }) {
  let mensaje;

  if (timeout) {
    mensaje = "⏰ Tiempo agotado";
  } else if (esCorrecta) {
    mensaje = "✔ Correcto";
  } else {
    mensaje = "✖ Incorrecto";
  }
  
  return (
    <div className={`feedback ${esCorrecta ? "correcto" : "incorrecto"}`}>
      {mensaje}
    </div>
  );
}

export default ResultadoSimbolo;