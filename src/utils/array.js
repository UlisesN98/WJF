export function mezclarArray(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

export function sample(array, cantidad) {
  const mezclado = mezclarArray(array);
  return mezclado.slice(0, cantidad);
}