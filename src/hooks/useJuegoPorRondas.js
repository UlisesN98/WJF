import { useState, useEffect } from "react";

function useJuegoPorRondas({ datos, esCorrecta, puntosPorAcierto = 10, tiempoPorPregunta = 10 }) {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [fase, setFase] = useState("pregunta");
  const [puntaje, setPuntaje] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(tiempoPorPregunta);

  const actual = datos[indice];

  useEffect(() => {

    if (fase !== "pregunta") return;

    const intervalo = setInterval(() => {

      setTiempoRestante(prev => {

        if (prev <= 1) {
          clearInterval(intervalo);

          elegirOpcion("timeout");

          return 0;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(intervalo);

  }, [fase, indice]);

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
    setTiempoRestante(tiempoPorPregunta);
  }

  function reiniciar() {
    setIndice(0);
    setSeleccion(null);
    setFase("pregunta");
    setPuntaje(0);
    setTiempoRestante(tiempoPorPregunta);
  }

  return {
    actual,
    fase,
    seleccion,
    puntaje,
    tiempoRestante,
    elegirOpcion,
    siguiente,
    reiniciar,
    total: datos.length
  };
}

export default useJuegoPorRondas;
