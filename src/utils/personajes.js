import { PERSONAJES } from "../data/personajes";

export function getNombrePersonaje(id) {
  return PERSONAJES[id]?.nombre ?? "Desconocido";
}