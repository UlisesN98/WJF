import { useState } from "react";
import { frases } from "../data/frases";

function FraseGame() {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [puntaje, setPuntaje] = useState(0);

  const frase = frases[indice];

  function elegirOpcion(opcion) {
    setSeleccion(opcion);
    setMostrarResultado(true);

    if (opcion === frase.correcta) {
      setPuntaje(puntaje + 10);
    }
  }

  function siguiente() {
    setIndice(indice + 1);
    setSeleccion(null);
    setMostrarResultado(false);
  }

  function reiniciarJuego() {
    setIndice(0);       // volver a la primera frase
    setPuntaje(0);           // resetear puntaje
    setSeleccion(null);      // limpiar selección
    setMostrarResultado(false); // ocultar resultado
  }

  if (!frase) {
    let mensajeFinal = "";

    if (puntaje === frases.length * 10) {
      mensajeFinal = "¡Increíble! Eres un experto en frases de fútbol";
    } else if (puntaje >= (frases.length * 10) / 2) {
      mensajeFinal = "¡Bien hecho! Conoces bastante del fútbol";
    } else {
      mensajeFinal = "¡Seguí practicando! Hay mucho por aprender";
    }

    return (
      <div>
        <p>Fin del juego</p>
        <p>Puntaje final: {puntaje}</p>
        <p>{mensajeFinal}</p>
        <button onClick={reiniciarJuego}>Jugar de nuevo</button>
      </div>
    );
  }

  return (
    <div>
      <h2>¿Quién dijo esta frase?</h2>
      <p>Puntaje: {puntaje}</p>

      <blockquote>
        “{frase.texto}”
      </blockquote>

      {!mostrarResultado && (
        <div>
          {frase.opciones.map((opcion) => (
            <button
              key={opcion}
              onClick={() => elegirOpcion(opcion)}
            >
              {opcion}
            </button>
          ))}
        </div>
      )}

      {mostrarResultado && (
        <div>
          {seleccion === frase.correcta ? (
            <p>✅ Correcto</p>
          ) : (
            <p>❌ Incorrecto</p>
          )}

          <p>
            Respuesta correcta: <strong>{frase.correcta}</strong>
          </p>

          {frase.evidencia.tipo === "imagen" && (
            <img
              src={frase.evidencia.src}
              alt="Evidencia"
              width={300}
            />
          )}

          <button onClick={siguiente}>
            Siguiente frase
          </button>
        </div>
      )}
    </div>
  );
}

export default FraseGame;
