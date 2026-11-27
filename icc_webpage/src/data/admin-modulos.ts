// Noticias y eventos (Valeria)

export type EstadoContenidoAdmin = "publicado" | "borrador";

export interface NoticiaAdmin {
  id: string;
  titulo: string;
  resumen: string;
  contenido: string;
  categoria: string;
  fechaPublicacion: string;
  fotografia: string;
  textoAlternativo: string;
  estado: EstadoContenidoAdmin;
  destacada: boolean;
}

export interface EventoAdmin {
  id: string;
  nombre: string;
  tipo: string;
  modalidad: string;
  fecha: string;
  hora: string;
  lugar: string;
  descripcion: string;
  enlaceInscripcion: string;
  estado: EstadoContenidoAdmin;
}

export const NOTICIAS_ADMIN: NoticiaAdmin[] = [
  {
    id: "noticia-1",
    titulo: "Llevamos años formando profesionales especializados",
    resumen:
      "Conoce la formación de profesionales en Ingeniería en Ciencias de la Computación.",
    contenido:
      "La carrera de Ingeniería en Ciencias de la Computación presenta su propuesta de formación profesional. Conoce más sobre nuestra comunidad académica, proyectos y oportunidades.",
    categoria: "Institucional",
    fechaPublicacion: "18/11/2026",
    fotografia: "",
    textoAlternativo: "Estudiantes presentando un proyecto",
    estado: "publicado",
    destacada: true,
  },
  {
    id: "noticia-2",
    titulo: "Aprender haciendo: nuevos talleres prácticos",
    resumen:
      "Estudiantes participan en experiencias prácticas de aprendizaje.",
    contenido:
      "La Ingeniería en Ciencias de la Computación continúa promoviendo el aprendizaje práctico mediante talleres, actividades y proyectos colaborativos.",
    categoria: "Académica",
    fechaPublicacion: "15/11/2026",
    fotografia: "",
    textoAlternativo: "Trabajo en equipo durante un taller",
    estado: "publicado",
    destacada: false,
  },
  {
    id: "noticia-3",
    titulo: "Conversaciones sobre el futuro de la IA en Honduras",
    resumen:
      "Un espacio académico para dialogar sobre inteligencia artificial.",
    contenido:
      "La comunidad académica participa en espacios de discusión relacionados con la inteligencia artificial, sus oportunidades y desafíos para Honduras.",
    categoria: "Tecnología",
    fechaPublicacion: "12/11/2026",
    fotografia: "",
    textoAlternativo: "Encuentro académico sobre inteligencia artificial",
    estado: "publicado",
    destacada: false,
  },
  {
    id: "noticia-4",
    titulo: "Convocatoria Hackathon ICC 2026",
    resumen:
      "Invitación a participar en una nueva actividad de innovación.",
    contenido:
      "La carrera prepara una convocatoria para estudiantes interesados en desarrollar soluciones tecnológicas e innovadoras.",
    categoria: "Eventos",
    fechaPublicacion: "20/11/2026",
    fotografia: "",
    textoAlternativo: "Actividad tecnológica de estudiantes",
    estado: "borrador",
    destacada: false,
  },
];

export const EVENTOS_ADMIN: EventoAdmin[] = [
  {
    id: "evento-1",
    nombre: "Un primer paso en código",
    tipo: "Taller",
    modalidad: "Presencial",
    fecha: "24/11/2026",
    hora: "09:00",
    lugar: "Laboratorio 1",
    descripcion:
      "Taller introductorio de programación dirigido a estudiantes.",
    enlaceInscripcion: "",
    estado: "publicado",
  },
  {
    id: "evento-2",
    nombre: "Hablemos de tecnología",
    tipo: "Conversatorio",
    modalidad: "Presencial",
    fecha: "02/12/2026",
    hora: "14:00",
    lugar: "Auditorio",
    descripcion:
      "Conversatorio académico sobre temas actuales de tecnología.",
    enlaceInscripcion: "",
    estado: "publicado",
  },
  {
    id: "evento-3",
    nombre: "Ideas en comunidad",
    tipo: "Encuentro",
    modalidad: "Presencial",
    fecha: "10/12/2026",
    hora: "10:00",
    lugar: "Sala ICC",
    descripcion:
      "Encuentro para compartir ideas y propuestas de la comunidad académica.",
    enlaceInscripcion: "",
    estado: "borrador",
  },
];

// Áreas y aliados (Valeria)
export type EstadoModulo = "Publicado" | "Borrador";

export type TamanoTarjetaArea = "Principal (Col 2x)" | "Secundaria";

export interface AreaAdmin {
  id: string;
  nombre: string;
  descripcion: string;
  tamano: TamanoTarjetaArea;
  estado: EstadoModulo;
  fotografia: string;
  textoAlternativo: string;
}

export interface AliadoAdmin {
  id: string;
  nombre: string;
  logo: string;
  posicion: number;
  estado: EstadoModulo;
}

export const AREAS_ADMIN_INICIALES: AreaAdmin[] = [
  {
    id: "area-1",
    nombre: "Desarrollo de software",
    descripcion:
      "Espacio para la programación colaborativa y el desarrollo de proyectos de software.",
    tamano: "Principal (Col 2x)",
    estado: "Publicado",
    fotografia: "Programación colaborativa",
    textoAlternativo:
      "Estudiantes trabajando en programación colaborativa",
  },
  {
    id: "area-2",
    nombre: "Análisis de datos",
    descripcion:
      "Área dedicada al análisis, procesamiento e interpretación de datos.",
    tamano: "Secundaria",
    estado: "Publicado",
    fotografia: "Análisis de datos en pantalla",
    textoAlternativo:
      "Estudiantes analizando datos en una pantalla",
  },
  {
    id: "area-3",
    nombre: "Redes y Telecomunicaciones",
    descripcion:
      "Área de formación práctica en redes, telecomunicaciones e infraestructura tecnológica.",
    tamano: "Secundaria",
    estado: "Publicado",
    fotografia: "Equipos de redes",
    textoAlternativo:
      "Equipos utilizados para prácticas de redes",
  },
];

export const ALIADOS_ADMIN_INICIALES: AliadoAdmin[] = [
  {
    id: "aliado-1",
    nombre: "Grupo Tech HN",
    logo: "",
    posicion: 1,
    estado: "Publicado",
  },
  {
    id: "aliado-2",
    nombre: "Banco Atlántida",
    logo: "",
    posicion: 2,
    estado: "Publicado",
  },
  {
    id: "aliado-3",
    nombre: "ClearCode Labs",
    logo: "",
    posicion: 3,
    estado: "Publicado",
  },
];

