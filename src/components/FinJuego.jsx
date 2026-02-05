function FinJuego({ puntaje, total, onReiniciar }) {
  return (
    <div>
      <p>Fin del juego</p>
      <p>Puntaje final: {puntaje}</p>
      <p>
        Aciertos: {puntaje / 10} de {total}
      </p>
      <button onClick={onReiniciar}>
        Reiniciar juego
      </button>
    </div>
  );
}

export default FinJuego;
