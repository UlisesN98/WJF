import { useState, useEffect } from "react";

function useJuegoPorRondas({ datos, esCorrecta, puntosPorAcierto = 10, tiempoPorPregunta = 10, maxIncorrectos = Infinity }) {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [fase, setFase] = useState("pregunta");
  const [puntaje, setPuntaje] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(tiempoPorPregunta);
  const [puntajeRonda, setPuntajeRonda] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [rondas, setRondas] = useState(datos);
  const [incorrectos, setIncorrectos] = useState(0);

  const actual = rondas[indice];

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

    let puntosObtenidos = 0;

    if (esCorrecta(actual, opcion)) {
      puntosObtenidos = Math.max(
        1,
        Math.round(puntosPorAcierto * (tiempoRestante / tiempoPorPregunta))
      );
      setPuntaje(prev => prev + puntosObtenidos);
      setAciertos(prev => prev + 1);
    } else {
      setIncorrectos(incorrectos + 1);
    }

    setPuntajeRonda(puntosObtenidos);
    setFase("feedback");

    setTimeout(() => {
      if (incorrectos >= maxIncorrectos) {
        setFase("fin");
      } else {
        setFase("explicacion");
      }
    }, 1000);
  }

  function siguiente() {
    if (indice + 1 >= rondas.length || incorrectos >= maxIncorrectos) {
      setFase("fin");
      return;
    }

    setIndice(prev => prev + 1);
    setSeleccion(null);
    setFase("pregunta");
    setTiempoRestante(tiempoPorPregunta);
    setPuntajeRonda(0);
  }

  function reiniciar(nuevosDatos) {
    setRondas(nuevosDatos);
    setIndice(0);
    setSeleccion(null);
    setFase("pregunta");
    setPuntaje(0);
    setTiempoRestante(tiempoPorPregunta);
    setPuntajeRonda(0);
    setAciertos(0);
    setIncorrectos(0);
  }

  return {
    actual,
    fase,
    seleccion,
    puntaje,
    puntajeRonda,
    tiempoRestante,
    aciertos,
    elegirOpcion,
    siguiente,
    reiniciar,
    total: rondas.length
  };
}

export default useJuegoPorRondas;
