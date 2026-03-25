import { PERSONAJES } from "./personajes";
import { YOUTUBE } from "./evidencias/youtube";
import { IMAGEN } from "./evidencias/imagen";
import { CITA } from "./evidencias/cita";

export const frases = [
  {
    texto: "La pelota no se mancha",
    nivel: 1,
    opciones: ["maradona", "pele", "beckenbauer", "ninguno"],
    correcta: "maradona",
    evidencia: YOUTUBE.maradona
  },
  {
    texto: "Un hombre con ideas nuevas es un loco, hasta que sus ideas triunfan",
    nivel: 2,
    opciones: ["guardiola", "bielsa", "bilardo", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.twain
  },
  {
    texto: "Yo pienso que por ser rico, por ser guapo, por ser un gran jugador, las personas tienen envidia de mí",
    nivel: 3,
    opciones: ["neymar", "cr7", "vinicius", "ninguno"],
    correcta: "cr7",
    evidencia: YOUTUBE.cr7
  },
  {
    texto: "El fútbol es tan generoso que evitó que Bilardo se dedicara a la medicina",
    nivel: 2,
    opciones: ["cappa", "lavolpe", "menotti", "ninguno"],
    correcta: "menotti",
    evidencia: CITA.menotti
  },
  {
    texto: "A mí me gusta tanto la noche… que al día le pondría un toldo",
    nivel: 2,
    opciones: ["houseman", "veira", "maradona", "ninguno"],
    correcta: "veira",
    evidencia: CITA.veira
  },
  {
    texto: "Si yo hubiese sido rubio y de ojos celestes, seguro que dirigía a la selección. Nunca me la ofrecieron por eso, porque soy negro",
    nivel: 3,
    opciones: ["marchetta", "astrada", "gorosito", "ninguno"],
    correcta: "marchetta",
    evidencia: CITA.marchetta
  },
  {
    texto: "Sos la persona más gorda del colectivo, ¿y te pones adelante? Anda para atrás, gorda re puta",
    nivel: 4,
    opciones: ["enzo", "palacios", "depaul", "ninguno"],
    correcta: "depaul",
    evidencia: IMAGEN.depaul
  },
  {
    texto: "¡Querés salir campeón de la concha de tu hermana!",
    nivel: 2,
    opciones: ["gorosito", "caruso", "griguol", "ninguno"],
    correcta: "griguol",
    evidencia: YOUTUBE.griguol
  },
  {
    texto: "La pelota no dobla",
    nivel: 2,
    opciones: ["passarella", "basile", "simeone", "ninguno"],
    correcta: "passarella",
    evidencia: YOUTUBE.passarella
  },
  {
    texto: "En el puesto de los bobos, yo soy el más vivo",
    nivel: 2,
    opciones: ["gatti", "chilavert", "burgos", "ninguno"],
    correcta: "gatti",
    evidencia: CITA.gatti
  },
  {
    texto: "Creeme que me cortaron las piernas",
    nivel: 1,
    opciones: ["follmann", "garrincha", "maradona", "ninguno"],
    correcta: "maradona",
    evidencia: YOUTUBE.maradona_2
  },
  {
    texto: "¡Pero si vos no sabés lo que es una pelota! ¡Anda a lavar los platos!",
    nivel: 4,
    opciones: ["chilavert", "higuita", "gatti", "ninguno"],
    correcta: "gatti",
    evidencia: YOUTUBE.gatti
  },
  {
    texto: "Encarnen su energía femenina. Cuidando, nutriendo, recibiendo, multiplicando, limpiando, sosteniendo el hogar",
    nivel: 4,
    opciones: ["enner", "chicharito", "pabon", "ninguno"],
    correcta: "chicharito",
    evidencia: YOUTUBE.chicharito
  },
  {
    texto: "¡¿Qué haces la concha puta de tu madre?! ¡Eh! ¡¡Eh!! Me está puteando",
    nivel: 3,
    opciones: ["osvaldo", "guillermo", "wanchope", "ninguno"],
    correcta: "guillermo",
    evidencia: YOUTUBE.guillermo
  },
  {
    texto: "Ese señor que no sé como se llama me está insultando",
    nivel: 2,
    opciones: ["gustavo", "guillermo", "tevez", "ninguno"],
    correcta: "guillermo",
    evidencia: YOUTUBE.guillermo_2
  },
  {
    texto: "Pase Maestro, lo estábamos esperando",
    nivel: 2,
    opciones: ["valdano", "maradona", "burruchaga", "ninguno"],
    correcta: "maradona",
    evidencia: CITA.maradona
  },
  {
    texto: "Al equipo contrario, ni un vaso de agua",
    nivel: 2,
    opciones: ["bilardo", "marchetta", "bianchi", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "Ganar no es lo importante, es lo único",
    nivel: 3,
    opciones: ["simeone", "mourinho", "bilardo", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.vince
  },
  {
    texto: "¿Carlos Gardel? No lo conozco, pero le voy a mandar un saludo",
    nivel: 3,
    opciones: ["paulo_diaz", "romania", "villa", "ninguno"],
    correcta: "villa",
    evidencia: IMAGEN.villa
  },
  {
    texto: "Prefiero perder jugando bien que ganar jugando mal",
    nivel: 2,
    opciones: ["bielsa", "menotti", "cappa", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "La vida me dio dos piernas para jugar al fútbol, no para correr detrás de una chica a la que no le intereso",
    nivel: 4,
    opciones: ["elshaarawy", "balotelli", "insigne", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "A la gloria no se llega por un camino de rosas",
    nivel: 2,
    opciones: ["minella", "lorenzo", "zubeldia", "ninguno"],
    correcta: "zubeldia",
    evidencia: CITA.zubeldia
  },
  {
    texto: "¿Qué puedo saber eu de esa situación?",
    nivel: 3,
    opciones: ["luis_zubeldia", "palermo", "vojvoda", "ninguno"],
    correcta: "luis_zubeldia",
    evidencia: YOUTUBE.luis_zubeldia
  },
  {
    texto: "Me muero si me decís que hago trampa. ¿Cómo voy a hacer trampa? Yo no hago trampa... ¡La reconcha de tu madre!",
    nivel: 3,
    opciones: ["caruso", "coudet", "guillermo", "ninguno"],
    correcta: "guillermo",
    evidencia: YOUTUBE.guillermo_3
  },
  {
    texto: "Yo no me quedo con ese análisis que dice usted. Delgadillo, Bouzat, Vargas, Robertone, Ramis, Bazán. Quédese bien tranquilo que yo los voy a entrenar",
    nivel: 3,
    opciones: ["cacique", "heinze", "pellegrino", "ninguno"],
    correcta: "heinze",
    evidencia: YOUTUBE.heinze
  },
  {
    texto: "¡Me quiero pelear! ¡¡Me quiero agarrar a piñas!!",
    nivel: 4,
    opciones: ["gallego", "gorosito", "astrada", "ninguno"],
    correcta: "gorosito",
    evidencia: CITA.gorosito
  },
  {
    texto: "No nos alcanza. Hicimos 30 puntos y no nos alcanza. ¡Que se hagan responsables lo que se tienen que hacer responsables de esto!",
    nivel: 3,
    opciones: ["de_felippe", "madelon", "osella", "ninguno"],
    correcta: "osella",
    evidencia: YOUTUBE.osella
  },
  {
    texto: " - ¿Qué le parece este triunfo?\n- Insisto, bárbaro. Un polvo, un polvo bárbaro.",
    nivel: 3,
    opciones: ["veira", "falcioni", "coudet", "ninguno"],
    correcta: "falcioni",
    evidencia: YOUTUBE.falcioni
  },
  {
    texto: "Visca el Barça, visca Catalunya, ¡y aguante Argentina, la concha de su madre!",
    nivel: 3,
    opciones: ["gabriel_milito", "messi", "maxi_lopez", "ninguno"],
    correcta: "messi",
    evidencia: YOUTUBE.messi
  },
  {
    texto: "Seremos menos malos que los demás",
    nivel: 3,
    opciones: ["bianchi", "gallardo", "riquelme", "ninguno"],
    correcta: "riquelme",
    evidencia: YOUTUBE.riquelme
  },
  {
    texto: "Estos dos meses en los que nosotros veníamos jugando muy mal, fue parte de la estrategia",
    nivel: 3,
    opciones: ["gallego", "gallardo", "simeone", "ninguno"],
    correcta: "gallardo",
    evidencia: YOUTUBE.gallardo
  },
  {
    texto: "Yo no sabía que al segundo le daban medallas",
    nivel: 2,
    opciones: ["bianchi", "zubeldia", "pastoriza", "ninguno"],
    correcta: "bianchi",
    evidencia: YOUTUBE.bianchi
  },
  {
    texto: "Si perdés la sorpresa, perdés todo",
    nivel: 3,
    opciones: ["maradona", "clemente", "caruso", "ninguno"],
    correcta: "maradona",
    evidencia: YOUTUBE.maradona_3
  },
  {
    texto: "¿Terceros salieron?",
    nivel: 2,
    opciones: ["ramon_diaz", "astrada", "gallardo", "ninguno"],
    correcta: "ramon_diaz",
    evidencia: YOUTUBE.ramon_diaz
  },
  {
    texto: "¿Te quejas por qué te viene una vez al mes? A mi se me para la pija todos los días y me cuesta un huevo disimularlo",
    nivel: 4,
    opciones: ["lisandro_martinez", "enzo", "cuti", "ninguno"],
    correcta: "enzo",
    evidencia: IMAGEN.enzo
  },
  {
    texto: "Es mas fácil desintegrar un átomo que un prejuicio",
    nivel: 3,
    opciones: ["alfaro", "bielsa", "soso", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.einstein
  },
  {
    texto: " - ¿Cómo esta el vestuario?\n- Bien, las paredes están pintadas, esta lindo",
    nivel: 3,
    opciones: ["bianchi", "riquelme", "tevez", "ninguno"],
    correcta: "ninguno",
    evidencia: IMAGEN.baiteo
  },
  {
    texto: "A la B Nacional la veo parecida al campeonato italiano",
    nivel: 3,
    opciones: ["almeyda", "montenegro", "chori", "ninguno"],
    correcta: "almeyda",
    evidencia: CITA.almeyda
  },
  {
    texto: "Ribair tiene la posibilidad de ser negro. Y eso lo hace más atractivo",
    nivel: 4,
    opciones: ["arruabarrena", "zielinski", "bianchi", "ninguno"],
    correcta: "bianchi",
    evidencia: CITA.bianchi
  },
  {
    texto: "No tengo SIDA",
    nivel: 3,
    opciones: ["veira", "goycochea", "caniggia", "ninguno"],
    correcta: "goycochea",
    evidencia: IMAGEN.goyco
  },
  {
    texto: "Y la ilusión de mi sobrino también se la robaron 5 gordos de traje en un escritorio. ¡Mafiosos! ¡Aguante Boca, caretas!",
    nivel: 3,
    opciones: ["tevez", "osvaldo", "benedetto", "ninguno"],
    correcta: "osvaldo",
    evidencia: IMAGEN.osvaldo
  },
  {
    texto: "Dale. Y si yo te tumbo, te garcho. Vamos por ahí, donde no nos vea nadie",
    nivel: 4,
    opciones: ["wanchope", "ibarra", "clemente", "ninguno"],
    correcta: "wanchope",
    evidencia: CITA.wanchope
  },
  {
    texto: "¿Qué mirás bobo? Anda, anda pa' allá, bobo. Anda pa' allá",
    nivel: 1,
    opciones: ["aguero", "messi", "lavezzi", "ninguno"],
    correcta: "messi",
    evidencia: YOUTUBE.messi_2
  },
];
