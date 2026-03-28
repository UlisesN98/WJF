import Introduccion from "./juegos/Introduccion";
import EstadoJuego from "./juegos/EstadoJuego";
import Pregunta from "./juegos/Pregunta";
import Opciones from "./juegos/Opciones";
import Resultado from "./juegos/Resultado";
import FinJuego from "./juegos/FinJuego";
import ResultadoSimbolo from "./juegos/ResultadoSimbolo";
import useJuegoPorRondas from "../hooks/useJuegoPorRondas";
import { frases } from "../data/frases/index";
import { seleccionarFrases } from "../utils/frases";

const puntosPorAcierto = 18;
const tiempoPorPregunta = 18;
const limitePreguntas = 18;
const maxIncorrectos = 3;

function JuegoFrases() {
  const {
    actual: frase,
    fase,
    seleccion,
    puntaje,
    puntajeRonda,
    tiempoRestante,
    aciertos,
    incorrectos,
    ultimaIncorrecta,
    esUltima,
    comenzar,
    elegirOpcion,
    siguiente,
    reiniciar,
    total
  } = useJuegoPorRondas({ 
    datos: seleccionarFrases(frases, limitePreguntas), 
    esCorrecta: (frase, opcion) => opcion === frase.correcta,
    puntosPorAcierto,
    tiempoPorPregunta,
    maxIncorrectos
  });

  if (!frase) return null;

  if (fase === "introduccion") {
    return (
      <Introduccion 
        onComenzar={comenzar} 
        limitePreguntas={limitePreguntas} 
        tiempoPorPregunta={tiempoPorPregunta} 
        maxIncorrectos={maxIncorrectos} 
      />
    );
  }

  if (fase === "fin") {
    return (
      <FinJuego
        puntaje={puntaje}
        puntosPorAcierto={puntosPorAcierto}
        aciertos={aciertos}
        incorrectos={incorrectos}
        total={total}
        onReiniciar={() => reiniciar(seleccionarFrases(frases, limitePreguntas))}
      />
    );
  }

  return (
    <div>
      <EstadoJuego
        fase={fase}
        puntaje={puntaje}
        puntajeRonda={puntajeRonda}
        tiempoRestante={tiempoRestante}
        incorrectos={incorrectos}
        ultimaIncorrecta={ultimaIncorrecta}
      />

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
          esUltima={esUltima}
        />
      )}
    </div>
  );
}

export default JuegoFrases;
