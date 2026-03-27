import "./FinJuego.css";
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
          Resultados finales
        </h2>
        <h3>
          Puntaje: {puntaje}
        </h3>
        <h3>
          {Math.round((puntaje / maximoPuntaje) * 100)}% de efectividad
        </h3>
        <p>
          {aciertos} correctas 
        </p>
        <p>
          {incorrectos} incorrectas 
        </p>
        { noJugadas > 0 && (
          <p>
            {total - (aciertos + incorrectos)} no jugadas
          </p>
        )}
        <div>
          <EvidenciaYoutube evidencia={evidencia} />
        </div>
      </div>
      
      <button onClick={onReiniciar} className="reiniciar-btn">
        Reiniciar partida
      </button>
    </div>
  );
}

export default FinJuego;
