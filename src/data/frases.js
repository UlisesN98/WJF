import { PERSONAJES } from "./personajes";
import { YOUTUBE } from "./evidencias/youtube";
import { IMAGEN } from "./evidencias/imagen";
import { CITA } from "./evidencias/cita";

export const frases = [
  {
    texto: "La pelota no se mancha",
    opciones: [
      PERSONAJES.maradona.id, 
      PERSONAJES.pele.id, 
      PERSONAJES.beckenbauer.id, 
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.maradona.id,
    evidencia: YOUTUBE.maradona
  },
  {
    texto: "Un hombre con ideas nuevas es un loco, hasta que sus ideas triunfan",
    opciones: [
      PERSONAJES.guardiola.id, 
      PERSONAJES.bielsa.id, 
      PERSONAJES.bilardo.id, 
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.ninguno.id,
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "Yo pienso que por ser rico, por ser guapo, por ser un gran jugador, las personas tienen envidia de mí",
    opciones: [
      PERSONAJES.neymar.id, 
      PERSONAJES.cr7.id, 
      PERSONAJES.vinicius.id, 
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.cr7.id,
    evidencia: YOUTUBE.cr7
  },
  {
    texto: "El fútbol es tan generoso que evitó que Bilardo se dedicara a la medicina",
    opciones: [
      PERSONAJES.cappa.id, 
      PERSONAJES.lavolpe.id, 
      PERSONAJES.menotti.id, 
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.menotti.id,
    evidencia: CITA.menotti
  },
  {
    texto: "A mí me gusta tanto la noche… que al día le pondría un toldo",
    opciones: [
      PERSONAJES.houseman.id, 
      PERSONAJES.veira.id, 
      PERSONAJES.maradona.id, 
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.veira.id,
    evidencia: CITA.veira
  },
  {
    texto: "Si yo hubiese sido rubio y de ojos celestes, seguro que dirigía a la selección. Nunca me la ofrecieron por eso, porque soy negro",
    opciones: [
      PERSONAJES.marchetta.id,
      PERSONAJES.ramon_diaz.id,
      PERSONAJES.gorosito.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.marchetta.id,
    evidencia: CITA.marchetta
  },
  {
    texto: "Sos la persona más gorda del colectivo, ¿y te pones adelante? Anda para atrás, gorda re puta",
    opciones: [
      PERSONAJES.enzo.id,
      PERSONAJES.palacios.id,
      PERSONAJES.depaul.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.depaul.id,
    evidencia: IMAGEN.depaul
  },
  {
    texto: "¡Querés salir campeón de la concha de tu hermana!",
    opciones: [
      PERSONAJES.gorosito.id,
      PERSONAJES.caruso.id,
      PERSONAJES.griguol.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.griguol.id,
    evidencia: YOUTUBE.griguol
  },
  {
    texto: "La pelota no dobla",
    opciones: [
      PERSONAJES.passarella.id,
      PERSONAJES.basile.id,
      PERSONAJES.simeone.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.passarella.id,
    evidencia: YOUTUBE.passarella
  },
  {
    texto: "En el puesto de los bobos, yo soy el más vivo",
    opciones: [
      PERSONAJES.gatti.id,
      PERSONAJES.chilavert.id,
      PERSONAJES.burgos.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.gatti.id,
    evidencia: CITA.gatti
  },
  {
    texto: "Creeme que me cortaron las piernas",
    opciones: [
      PERSONAJES.follmann.id,
      PERSONAJES.garrincha.id,
      PERSONAJES.maradona.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.maradona.id,
    evidencia: YOUTUBE.maradona_2
  },
  {
    texto: "¡Pero si vos no sabés lo que es una pelota! ¡Anda a lavar los platos!",
    opciones: [
      PERSONAJES.chilavert.id,
      PERSONAJES.higuita.id,
      PERSONAJES.gatti.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.gatti.id,
    evidencia: YOUTUBE.gatti
  },
  {
    texto: "Encarnen su energía femenina. Cuidando, nutriendo, recibiendo, multiplicando, limpiando, sosteniendo el hogar",
    opciones: [
      PERSONAJES.enner.id,
      PERSONAJES.chicharito.id,
      PERSONAJES.pabon.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.chicharito.id,
    evidencia: YOUTUBE.chicharito
  },
  {
    texto: "¡¿Qué haces la concha puta de tu madre?! ¡Eh! ¡¡Eh!! Me está puteando",
    opciones: [
      PERSONAJES.benedetto.id,
      PERSONAJES.guillermo.id,
      PERSONAJES.wanchope.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.guillermo.id,
    evidencia: YOUTUBE.guillermo
  },
  {
    texto: "Ese señor que no sé como se llama me está insultando",
    opciones: [
      PERSONAJES.gustavo.id,
      PERSONAJES.guillermo.id,
      PERSONAJES.tevez.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.guillermo.id,
    evidencia: YOUTUBE.guillermo_2
  },
  {
    texto: "Pase Maestro, lo estábamos esperando",
    opciones: [
      PERSONAJES.valdano.id,
      PERSONAJES.maradona.id,
      PERSONAJES.burruchaga.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.maradona.id,
    evidencia: CITA.maradona
  },
  {
    texto: "Al equipo contrario, ni un vaso de agua",
    opciones: [
      PERSONAJES.bilardo.id,
      PERSONAJES.marchetta.id,
      PERSONAJES.bianchi.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.ninguno.id,
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "Ganar no es lo importante, es lo único",
    opciones: [
      PERSONAJES.simeone.id,
      PERSONAJES.mourinho.id,
      PERSONAJES.bilardo.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.ninguno.id,
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "¿Carlos Gardel? No lo conozco, pero le voy a mandar un saludo",
    opciones: [
      PERSONAJES.paulo_diaz.id,
      PERSONAJES.romania.id,
      PERSONAJES.villa.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.villa.id,
    evidencia: IMAGEN.villa
  },
  {
    texto: "Prefiero perder jugando bien que ganar jugando mal",
    opciones: [
      PERSONAJES.bielsa.id,
      PERSONAJES.menotti.id,
      PERSONAJES.cappa.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.ninguno.id,
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "La vida me dio dos piernas para jugar al fútbol, no para correr detrás de una chica a la que no le intereso",
    opciones: [
      PERSONAJES.elshaarawy.id,
      PERSONAJES.balotelli.id,
      PERSONAJES.insigne.id,
      PERSONAJES.ninguno.id
    ],
    correcta: PERSONAJES.ninguno.id,
    evidencia: IMAGEN.baiteo
  },
];
