import "./FinJuego.css";
import "./EstadoJuego.css";
import EvidenciaYoutube from "./evidencias/EvidenciaYoutube";
import { youtubeFinJuego } from "../../data/frases/finJuego";

function FinJuego({ puntaje, puntosPorAcierto, aciertos, incorrectos, total, onReiniciar }) {
  let evidencia;
  let maximoPuntaje = puntosPorAcierto * total;
  let noJugadas = total - (aciertos + incorrectos);
  
  if (puntaje > maximoPuntaje * 0.75) {
    evidencia = youtubeFinJuego["mas_de_75"];
  } else if (puntaje > maximoPuntaje * 0.50) {
    evidencia = youtubeFinJuego["mas_de_50"];
  } else if (puntaje > maximoPuntaje * 0.25) {
    evidencia = youtubeFinJuego["menos_de_50"];
  } else {
    evidencia = youtubeFinJuego["menos_de_25"];
  }

  return (
    <div className="fin-juego">
      <div className="card-resultados">
        <h2>
          Resultados
        </h2>
        <div className="estado-juego">
          <p className="puntaje en-fin-juego">
            <span className="estado-label">Puntaje</span>
            <span className="estado-valor">
              {puntaje}
            </span>
          </p>
          <p className="puntaje en-fin-juego">
            <span className="estado-label">Efectividad</span>
            <span className="estado-valor">
              {Math.round((puntaje / maximoPuntaje) * 100)}%
            </span>
          </p>
          <p className="puntaje en-fin-juego">
            <span className="estado-label">Correctas</span>
            <span className="estado-valor">
              {aciertos}
            </span>
          </p>
          <p className="puntaje en-fin-juego">
            <span className="estado-label">Incorrectas</span>
            <span className="estado-valor">
              {incorrectos}
            </span>
          </p>
          { noJugadas > 0 && (
            <p className="puntaje en-fin-juego">
              <span className="estado-label">No jugadas</span>
              <span className="estado-valor">
                {noJugadas}
              </span>
            </p>
          )}
        </div>
        <h2>
          Veredicto
        </h2>
        <div>
          <iframe
            className="resultado-video"
            src={`https://www.youtube.com/embed/${evidencia.youtubeId}?start=${evidencia.start}&end=${evidencia.end}&rel=0&modestbranding=1`}
            title="Evidencia"
          />
        </div>
      </div>
      
      <button onClick={onReiniciar} className="boton-accion">
        Reiniciar partida
      </button>
    </div>
  );
}

export default FinJuego;
