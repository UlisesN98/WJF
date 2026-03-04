import Pregunta from "./Pregunta";
import Opciones from "./Opciones";
import Resultado from "./Resultado";
import FinJuego from "./FinJuego";
import ResultadoSimbolo from "./ResultadoSimbolo";
import useJuegoPorRondas from "../hooks/useJuegoPorRondas";
import { frases } from "../data/frases";

function JuegoFrases() {
  const {
    actual: frase,
    fase,
    seleccion,
    puntaje,
    elegirOpcion,
    siguiente,
    reiniciar,
    total
  } = useJuegoPorRondas({ datos: frases, esCorrecta: (frase, opcion) => opcion === frase.correcta });

  if (fase === "fin") {
    return (
      <FinJuego
        puntaje={puntaje}
        total={total}
        onReiniciar={reiniciar}
      />
    );
  }

  return (
    <div>
      <p>Puntaje: {puntaje}</p>

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
        />
      )}

      {fase === "explicacion" && (
        <Resultado
          esCorrecta={seleccion === frase.correcta}
          respuestaCorrecta={frase.correcta}
          evidencia={frase.evidencia}
          onSiguiente={siguiente}
        />
      )}
    </div>
  );
}

export default JuegoFrases;
