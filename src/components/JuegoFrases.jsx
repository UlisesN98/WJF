import Pregunta from "./Pregunta";
import Opciones from "./Opciones";
import Resultado from "./Resultado";
import FinJuego from "./FinJuego";
import ResultadoSimbolo from "./ResultadoSimbolo";
import useJuegoPorRondas from "../hooks/useJuegoPorRondas";
import { frases } from "../data/frases";
import "./JuegoFrases.css";

const puntosPorAcierto = 40;
const tiempoPorPregunta = 15;

function JuegoFrases() {
  const {
    actual: frase,
    fase,
    seleccion,
    puntaje,
    tiempoRestante,
    elegirOpcion,
    siguiente,
    reiniciar,
    total
  } = useJuegoPorRondas({ 
    datos: frases, 
    esCorrecta: (frase, opcion) => opcion === frase.correcta,
    puntosPorAcierto,
    tiempoPorPregunta
  });

  if (fase === "fin") {
    return (
      <FinJuego
        puntaje={puntaje}
        puntosPorAcierto={puntosPorAcierto}
        total={total}
        onReiniciar={reiniciar}
      />
    );
  }

  return (
    <div>
      <div className="info-superior">
        <p className="puntaje">Puntaje: {puntaje}</p>
        {fase === "pregunta" && (
          <p className={`tiempo ${tiempoRestante <= 5 ? "casi-agotado" : ""}`}>
            Tiempo: {tiempoRestante} s
          </p>
        )}
      </div>

      {fase === "pregunta" && (
        <>

          <h2>¿Quién dijo esta frase?</h2>
          <Pregunta texto={frase.texto} />
          <Opciones opciones={frase.opciones} onElegir={elegirOpcion} />
        </>
      )}

      {fase === "feedback" && (
        <ResultadoSimbolo
          esCorrecta={seleccion === frase.correcta}
          timeout={seleccion === "timeout"}
        />
      )}

      {fase === "explicacion" && (
        <Resultado
          respuestaCorrecta={frase.correcta}
          evidencia={frase.evidencia}
          onSiguiente={siguiente}
        />
      )}
    </div>
  );
}

export default JuegoFrases;
