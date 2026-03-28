import JuegoFrases from "../components/JuegoFrases";
import JuegoLocalizar from "../components/JuegoLocalizar";
import JuegoCamisetas from "../components/JuegoCamisetas";
import JuegoPartidos from "../components/JuegoPartidos";

export const registroJuegos = [
  {
    id: "frases",
    nombre: "Anda a Chequearlo",
    descripcion: "Adivina quién dijo cada una de estas frases famosas",
    imagen: "/frases.png",
    ruta: "/juegos/frases",
    Componente: JuegoFrases,
  },
  {
    id: "geoguesser",
    nombre: "GeoGuessr",
    descripcion: "Adivina dónde esta ubicado cada uno de estos equipos",
    imagen: "/geoguessr.png",
    ruta: "/juegos/localizar",
    Componente: JuegoLocalizar,
  },
  {
    id: "camisetas",
    nombre: "Camisetas",
    descripcion: "Sin descripción",
    imagen: "/de_paul_boca.png",
    ruta: "/juegos/camisetas",
    Componente: JuegoCamisetas,
  },
  {
    id: "partidos",
    nombre: "Partidos",
    descripcion: "Sin descripción",
    imagen: "/pinola.png",
    ruta: "/juegos/partidos",
    Componente: JuegoPartidos,
  },
];
