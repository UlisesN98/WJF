import { PERSONAJES } from "./personajes";
import { YOUTUBE } from "./evidencias/youtube";
import { IMAGEN } from "./evidencias/imagen";
import { CITA } from "./evidencias/cita";

export const frases = [
  {
    texto: "La pelota no se mancha",
    opciones: ["maradona", "pele", "beckenbauer", "ninguno"],
    correcta: "maradona",
    evidencia: YOUTUBE.maradona
  },
  {
    texto: "Un hombre con ideas nuevas es un loco, hasta que sus ideas triunfan",
    opciones: ["guardiola", "bielsa", "bilardo", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "Yo pienso que por ser rico, por ser guapo, por ser un gran jugador, las personas tienen envidia de mí",
    opciones: ["neymar", "cr7", "vinicius", "ninguno"],
    correcta: "cr7",
    evidencia: YOUTUBE.cr7
  },
  {
    texto: "El fútbol es tan generoso que evitó que Bilardo se dedicara a la medicina",
    opciones: ["cappa", "lavolpe", "menotti", "ninguno"],
    correcta: "menotti",
    evidencia: CITA.menotti
  },
  {
    texto: "A mí me gusta tanto la noche… que al día le pondría un toldo",
    opciones: ["houseman", "veira", "maradona", "ninguno"],
    correcta: "veira",
    evidencia: CITA.veira
  },
  {
    texto: "Si yo hubiese sido rubio y de ojos celestes, seguro que dirigía a la selección. Nunca me la ofrecieron por eso, porque soy negro",
    opciones: ["marchetta", "ramon_diaz", "gorosito", "ninguno"],
    correcta: "marchetta",
    evidencia: CITA.marchetta
  },
  {
    texto: "Sos la persona más gorda del colectivo, ¿y te pones adelante? Anda para atrás, gorda re puta",
    opciones: ["enzo", "palacios", "depaul", "ninguno"],
    correcta: "depaul",
    evidencia: IMAGEN.depaul
  },
  {
    texto: "¡Querés salir campeón de la concha de tu hermana!",
    opciones: ["gorosito", "caruso", "griguol", "ninguno"],
    correcta: "griguol",
    evidencia: YOUTUBE.griguol
  },
  {
    texto: "La pelota no dobla",
    opciones: ["passarella", "basile", "simeone", "ninguno"],
    correcta: "passarella",
    evidencia: YOUTUBE.passarella
  },
  {
    texto: "En el puesto de los bobos, yo soy el más vivo",
    opciones: ["gatti", "chilavert", "burgos", "ninguno"],
    correcta: "gatti",
    evidencia: CITA.gatti
  },
  {
    texto: "Creeme que me cortaron las piernas",
    opciones: ["follmann", "garrincha", "maradona", "ninguno"],
    correcta: "maradona",
    evidencia: YOUTUBE.maradona_2
  },
  {
    texto: "¡Pero si vos no sabés lo que es una pelota! ¡Anda a lavar los platos!",
    opciones: ["chilavert", "higuita", "gatti", "ninguno"],
    correcta: "gatti",
    evidencia: YOUTUBE.gatti
  },
  {
    texto: "Encarnen su energía femenina. Cuidando, nutriendo, recibiendo, multiplicando, limpiando, sosteniendo el hogar",
    opciones: ["enner", "chicharito", "pabon", "ninguno"],
    correcta: "chicharito",
    evidencia: YOUTUBE.chicharito
  },
  {
    texto: "¡¿Qué haces la concha puta de tu madre?! ¡Eh! ¡¡Eh!! Me está puteando",
    opciones: ["benedetto", "guillermo", "wanchope", "ninguno"],
    correcta: "guillermo",
    evidencia: YOUTUBE.guillermo
  },
  {
    texto: "Ese señor que no sé como se llama me está insultando",
    opciones: ["gustavo", "guillermo", "tevez", "ninguno"],
    correcta: "guillermo",
    evidencia: YOUTUBE.guillermo_2
  },
  {
    texto: "Pase Maestro, lo estábamos esperando",
    opciones: ["valdano", "maradona", "burruchaga", "ninguno"],
    correcta: "maradona",
    evidencia: CITA.maradona
  },
  {
    texto: "Al equipo contrario, ni un vaso de agua",
    opciones: ["bilardo", "marchetta", "bianchi", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "Ganar no es lo importante, es lo único",
    opciones: ["simeone", "mourinho", "bilardo", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "¿Carlos Gardel? No lo conozco, pero le voy a mandar un saludo",
    opciones: ["paulo_diaz", "romania", "villa", "ninguno"],
    correcta: "villa",
    evidencia: IMAGEN.villa
  },
  {
    texto: "Prefiero perder jugando bien que ganar jugando mal",
    opciones: ["bielsa", "menotti", "cappa", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "La vida me dio dos piernas para jugar al fútbol, no para correr detrás de una chica a la que no le intereso",
    opciones: ["elshaarawy", "balotelli", "insigne", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "A la gloria no se llega por un camino de rosas",
    opciones: ["minella", "lorenzo", "zubeldia", "ninguno"],
    correcta: "zubeldia",
    evidencia: CITA.zubeldia
  },
  {
    texto: "¿Qué puedo saber eu de esa situación?",
    opciones: ["luis_zubeldia", "palermo", "vojvoda", "ninguno"],
    correcta: "luis_zubeldia",
    evidencia: YOUTUBE.luis_zubeldia
  },
  {
    texto: "Me muero si me decís que hago trampa. ¿Cómo voy a hacer trampa? Yo no hago trampa... ¡La reconcha de tu madre!",
    opciones: ["caruso", "coudet", "guillermo", "ninguno"],
    correcta: "guillermo",
    evidencia: YOUTUBE.guillermo_3
  },
  {
    texto: "Yo no me quedo con ese análisis que dice usted. Delgadillo, Bouzat, Vargas, Robertone, Ramis, Bazán. Quédese bien tranquilo que yo los voy a entrenar",
    opciones: ["cacique", "heinze", "pellegrino", "ninguno"],
    correcta: "heinze",
    evidencia: YOUTUBE.heinze
  },
  {
    texto: "¡Me quiero pelear! ¡¡Me quiero agarrar a piñas!!",
    opciones: ["gallego", "gorosito", "astrada", "ninguno"],
    correcta: "gorosito",
    evidencia: CITA.gorosito
  },
];
