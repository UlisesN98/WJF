import "./FinJuego.css";

function FinJuego({ puntaje, puntosPorAcierto, aciertos, incorrectos, total, onReiniciar }) {
  let mensaje;
  let maximoPuntaje = puntosPorAcierto * total;
  if (puntaje > maximoPuntaje * 0.75) {
    mensaje = "Tengo una capacidad hermano, tremenda. ¡Yo inventé esto!";
  } else if (puntaje > maximoPuntaje * 0.50) {
    mensaje = "Siempre vamo' al frente y ganamos, a otra cosa";
  } else if (puntaje > maximoPuntaje * 0.25) {
    mensaje = "¡Puedes mejorar!";
  } else {
    mensaje = "¿Podés ser tan pelutudo viejo?";
  }

  return (
    <div className="fin-juego">
      <div className="card-resultados">
        <h2>
          {mensaje}
        </h2>
        <h3>
          Puntaje final: {puntaje}
        </h3>
        <p>
          Correctas: {aciertos}
        </p>
        <p>
          Incorrectas: {incorrectos}
        </p>
        <p>
          No jugadas: {total - (aciertos + incorrectos)}
        </p>
      </div>
      
      <button onClick={onReiniciar} className="reiniciar-btn">
        Reiniciar partida
      </button>
    </div>
  );
}

export default FinJuego;
