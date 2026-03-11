import "./FinJuego.css";

function FinJuego({ puntaje, puntosPorAcierto, total, onReiniciar }) {
  return (
    <div className="fin-juego">
      <p>Fin del juego</p>
      <p>Puntaje final: {puntaje}</p>
      <p>
        Aciertos: {puntaje / puntosPorAcierto} de {total}
      </p>
      <button onClick={onReiniciar} className="reiniciar-btn">
        Reiniciar juego
      </button>
    </div>
  );
}

export default FinJuego;
