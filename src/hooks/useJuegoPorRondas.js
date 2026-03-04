import { useState } from "react";

function useJuegoPorRondas({ datos, esCorrecta, puntosPorAcierto = 10 }) {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [fase, setFase] = useState("pregunta");
  const [puntaje, setPuntaje] = useState(0);

  const actual = datos[indice];

  function elegirOpcion(opcion) {
    setSeleccion(opcion);

    if (esCorrecta(actual, opcion)) {
      setPuntaje(prev => prev + puntosPorAcierto);
    }

    setFase("feedback");

    setTimeout(() => {
      setFase("explicacion");
    }, 1000); // 1 segundo
  }

  function siguiente() {
    if (indice + 1 >= datos.length) {
      setFase("fin");
      return;
    }

    setIndice(prev => prev + 1);
    setSeleccion(null);
    setFase("pregunta");
  }

  function reiniciar() {
    setIndice(0);
    setSeleccion(null);
    setFase("pregunta");
    setPuntaje(0);
  }

  return {
    actual,
    fase,
    seleccion,
    puntaje,
    elegirOpcion,
    siguiente,
    reiniciar,
    total: datos.length
  };
}

export default useJuegoPorRondas;
