import { useState, useEffect } from "react";

function mezclarArray(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

function useJuegoPorRondas({ datos, esCorrecta, puntosPorAcierto = 10, tiempoPorPregunta = 10, limitePreguntas = 5 }) {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [fase, setFase] = useState("pregunta");
  const [puntaje, setPuntaje] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(tiempoPorPregunta);
  const [puntajeRonda, setPuntajeRonda] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [rondas, setRondas] = useState([]);

  const actual = rondas[indice];

  useEffect(() => {
    const mezcladas = mezclarArray(datos);
    const seleccionadas = mezcladas.slice(0, limitePreguntas);
    setRondas(seleccionadas);
  }, [datos, limitePreguntas]);

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
    }

    setPuntajeRonda(puntosObtenidos); 

    setFase("feedback");

    setTimeout(() => {
      setFase("explicacion");
    }, 1000); // 1 segundo
  }

  function siguiente() {
    if (indice + 1 >= rondas.length) {
      setFase("fin");
      return;
    }

    setIndice(prev => prev + 1);
    setSeleccion(null);
    setFase("pregunta");
    setTiempoRestante(tiempoPorPregunta);
    setPuntajeRonda(0);
  }

  function reiniciar() {
    const mezcladas = mezclarArray(datos);
    const seleccionadas = mezcladas.slice(0, limitePreguntas);

    setRondas(seleccionadas);
    setIndice(0);
    setSeleccion(null);
    setFase("pregunta");
    setPuntaje(0);
    setTiempoRestante(tiempoPorPregunta);
    setPuntajeRonda(0);
    setAciertos(0);
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
