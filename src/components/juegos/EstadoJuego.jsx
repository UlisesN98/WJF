import "./EstadoJuego.css";

export default function EstadoJuego({
  fase,
  puntaje,
  puntajeRonda,
  tiempoRestante,
  incorrectos,
  ultimaIncorrecta
}) {
  return (
    <div className="estado-juego">
      <p className="puntaje">
        <span className="estado-label">Puntaje</span>
        <span className="estado-valor">
          {fase === "feedback" && puntajeRonda > 0
            ? puntaje - puntajeRonda
            : puntaje
          }
          {fase === "feedback" && puntajeRonda > 0 && (
            <span className="puntaje-obtenido"> +{puntajeRonda}</span>
          )}
        </span>
      </p>

      {fase === "pregunta" && (
        <p className={`tiempo ${tiempoRestante <= 5 ? "casi-agotado" : ""}`}>
          <span className="estado-label">Tiempo</span>
          <span className="estado-valor">{tiempoRestante}s</span>
        </p>
      )}

      <p className="incorrectos">
        <span className="estado-label">Incorrectas</span>
        <span className="estado-valor">
          {fase === "feedback" && ultimaIncorrecta
            ? incorrectos - 1
            : incorrectos
          }
          {fase === "feedback" && ultimaIncorrecta && (
            <span className="incorrecto-obtenido"> +1</span>
          )}
        </span>
      </p>
    </div>
  );
}