import JuegoFrases from "../components/JuegoFrases";

export const registroJuegos = [
  {
    id: "frases",
    nombre: "Anda a Chequearlo",
    descripcion: "Adivina quién dijo cada una de estas frases famosas",
    imagen: "/el_sharaawy.jpeg",
    ruta: "/juegos/frases",
    Componente: JuegoFrases,
  },
  {
    id: "camisetas",
    nombre: "Kamisama",
    descripcion: "Adivina quién NO vistió cada una de estas camisetas",
    imagen: "/de_paul_boca.jpeg",
    ruta: "/juegos/camisetas",
    Componente: JuegoFrases,
  },
];
