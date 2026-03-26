import { sample } from "./array";

export function seleccionarFrases(datos, limitePreguntas) {
  const porcentajes = {
    1: 0.1,
    2: 0.3,
    3: 0.4,
    4: 0.2
  };

  const frases = [];

  const nivelesOrdenados = Object.keys(datos).sort((a, b) => a - b);

  for (const nivel of nivelesOrdenados) {
    const porcentaje = porcentajes[nivel] || 0;
    const cantidad = Math.round(limitePreguntas * porcentaje);

    const grupo = datos[nivel] || [];
    
    const seleccionadas = sample(grupo, cantidad);

    frases.push(...seleccionadas);
  }

  return frases.slice(0, limitePreguntas);
}