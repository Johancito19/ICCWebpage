// Valores de referencia del mockup hasta contar con cifras oficiales.
export const indicadoresIcc = [
  { nombre: "Estudiantes", valor: "00" },
  { nombre: "Docentes", valor: "00" },
  { nombre: "Laboratorios", valor: "00" },
  { nombre: "Convenios", valor: "00" },
];

export const areasEspecializacion = [
  {
    titulo: "Desarrollo de software",
    pie: "Foto: programación colaborativa",
    alt: "Dos estudiantes trabajan con código en el laboratorio de computación.",
    archivo: "area-software",
    ancho: 588,
    alto: 416,
    anchoTablet: 704,
  },
  {
    titulo: "Análisis de datos",
    pie: "Foto: análisis de datos en pantalla",
    alt: "Una estudiante consulta gráficos de datos en un monitor.",
    archivo: "area-datos",
    ancho: 282,
    alto: 320,
    anchoTablet: 340,
  },
  {
    titulo: "Redes y Telecomunicaciones",
    pie: "Foto: equipos de redes",
    alt: "Gabinete de equipos de red con paneles y cables de conexión.",
    archivo: "area-redes",
    ancho: 282,
    alto: 320,
    anchoTablet: 340,
  },
];

export interface NoticiaPublica {
  titulo: string;
  pie: string;
  alt: string;
  archivo: string;
  ancho: number;
  alto: number;
  anchoTablet: number;
  altoMovil: number;
}

export const noticiaDestacada = {
  titulo: "Llevamos años formando profesionales especializados en las ciencias computacionales",
  resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod nibh in facilisis viverra.",
  pie: "Foto: estudiantes presentando un proyecto",
  alt: "Un grupo de estudiantes presenta un proyecto en una computadora portátil.",
  archivo: "noticia-proyecto",
  ancho: 588,
  alto: 352,
  anchoTablet: 704,
  altoMovil: 316,
} satisfies NoticiaPublica & { resumen: string };

export const noticiasBreves: NoticiaPublica[] = [
  {
    titulo: "Aprender haciendo",
    pie: "Foto: trabajo en equipo",
    alt: "Estudiantes colaboran con sus computadoras en una mesa de trabajo.",
    archivo: "noticia-equipo",
    ancho: 282,
    alto: 136,
    anchoTablet: 340,
    altoMovil: 135,
  },
  {
    titulo: "Conversaciones sobre el futuro",
    pie: "Foto: encuentro académico",
    alt: "Participantes de un encuentro académico conversan alrededor de una mesa.",
    archivo: "noticia-encuentro",
    ancho: 282,
    alto: 136,
    anchoTablet: 340,
    altoMovil: 134,
  },
];

// Fechas y categorías de ejemplo tomadas del mockup.
export const proximosEventos = [
  { titulo: "Un primer paso en código", fecha: "00/00/0000", tipo: "Taller" },
  { titulo: "Hablemos de tecnología", fecha: "00/00/0000", tipo: "Conversatorio" },
  { titulo: "Ideas en comunidad", fecha: "00/00/0000", tipo: "Encuentro" },
];
