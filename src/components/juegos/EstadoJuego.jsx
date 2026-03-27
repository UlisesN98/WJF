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
        Puntaje: {fase === "feedback" && puntajeRonda > 0
          ? puntaje - puntajeRonda
          : puntaje
        }
        {fase === "feedback" && puntajeRonda > 0 && (
          <span className="puntaje-obtenido"> +{puntajeRonda}</span>
        )}
      </p>

      {fase === "pregunta" && (
        <p className={`tiempo ${tiempoRestante <= 5 ? "casi-agotado" : ""}`}>
          Tiempo: {tiempoRestante} s
        </p>
      )}

      <p className="incorrectos">
        Incorrectas: {fase === "feedback" && ultimaIncorrecta
          ? incorrectos - 1
          : incorrectos
        }
        {fase === "feedback" && ultimaIncorrecta && (
          <span className="incorrecto-obtenido"> +1</span>
        )}
      </p>
    </div>
  );
}