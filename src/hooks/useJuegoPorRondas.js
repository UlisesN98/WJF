import { useState } from "react";

function useJuegoPorRondas({ datos, esCorrecta, puntosPorAcierto = 10 }) {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [puntaje, setPuntaje] = useState(0);

  const actual = datos[indice];

  function elegirOpcion(opcion) {
    setSeleccion(opcion);
    setMostrarResultado(true);

    if (esCorrecta(actual, opcion)) {
      setPuntaje((prev) => prev + puntosPorAcierto);
    }
  }

  function siguiente() {
    setIndice((prev) => prev + 1);
    setSeleccion(null);
    setMostrarResultado(false);
  }

  function reiniciar() {
    setIndice(0);
    setSeleccion(null);
    setMostrarResultado(false);
    setPuntaje(0);
  }

  return {
    actual,
    indice,
    seleccion,
    mostrarResultado,
    puntaje,
    elegirOpcion,
    siguiente,
    reiniciar,
    total: datos.length
  };
}

export default useJuegoPorRondas;
