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