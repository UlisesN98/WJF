import "./ResultadoSimbolo.css";

function ResultadoSimbolo({ esCorrecta }) {
  return (
    <div className={`feedback ${esCorrecta ? "correcto" : "incorrecto"}`}>
      {esCorrecta ? "✔ Correcto" : "✖ Incorrecto"}
    </div>
  );
}

export default ResultadoSimbolo;