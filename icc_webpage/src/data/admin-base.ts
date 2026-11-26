// Datos ficticios Panel Admin Base (Daniel)

export interface MetricaDashboard {
  id: string;
  valor: string;
  etiqueta: string;
  detalle: string;
}

export type TipoEstadoSeccion = "publicado" | "pendiente" | "neutral";

export interface SeccionAdministrable {
  id: string;
  titulo: string;
  subtitulo: string;
  ultimaActualizacion: string;
  estadoTexto: string;
  estadoTipo: TipoEstadoSeccion;
  hrefEditar: string;
}

export const METRICAS_DASHBOARD: MetricaDashboard[] = [
  {
    id: "estudiantes",
    valor: "420",
    etiqueta: "Estudiantes registrados",
    detalle: "Cifra publicada en Home ICC",
  },
  {
    id: "docentes",
    valor: "24",
    etiqueta: "Docentes activos",
    detalle: "4 perfiles actualizados este mes",
  },
  {
    id: "eventos",
    valor: "6",
    etiqueta: "Próximos eventos",
    detalle: "3 en agenda destacada de Home",
  },
];

export const SECCIONES_HOME_ADMIN: SeccionAdministrable[] = [
  {
    id: "hero",
    titulo: "Hero principal y CTA",
    subtitulo: "Construye el futuro desde Honduras",
    ultimaActualizacion: "Hoy, 14:20",
    estadoTexto: "Publicado",
    estadoTipo: "publicado",
    hrefEditar: "/admin/hero",
  },
  {
    id: "accesos",
    titulo: "Accesos rápidos (4 cards)",
    subtitulo: "Plan, Docentes, Noticias, Asociación",
    ultimaActualizacion: "18 Nov 2026",
    estadoTexto: "Publicado",
    estadoTipo: "publicado",
    hrefEditar: "/admin/hero",
  },
  {
    id: "cifras",
    titulo: "Quiénes somos y Cifras clave",
    subtitulo: "4 indicadores institucionales",
    ultimaActualizacion: "16 Nov 2026",
    estadoTexto: "Pendiente cifras",
    estadoTipo: "pendiente",
    hrefEditar: "/admin/hero",
  },
  {
    id: "areas",
    titulo: "Áreas y laboratorios (3)",
    subtitulo: "Software, Datos, Redes",
    ultimaActualizacion: "15 Nov 2026",
    estadoTexto: "Publicado",
    estadoTipo: "publicado",
    hrefEditar: "/admin/areas",
  },
  {
    id: "noticias",
    titulo: "Noticias y Próximos eventos",
    subtitulo: "3 noticias · 3 eventos en agenda",
    ultimaActualizacion: "Hoy, 11:05",
    estadoTexto: "Publicado",
    estadoTipo: "publicado",
    hrefEditar: "/admin/noticias",
  },
  {
    id: "vinculacion",
    titulo: "Vinculación y Aliados",
    subtitulo: "6 espacios de logos aliados",
    ultimaActualizacion: "10 Nov 2026",
    estadoTexto: "Faltan logos",
    estadoTipo: "neutral",
    hrefEditar: "/admin/areas",
  },
];

/* ==========================================
   DATOS INICIALES: EDITOR DE HERO Y CIFRAS (/admin/hero)
   ========================================== */
export interface DatosHeroEditor {
  antetitulo: string;
  subtitulo: string;
  titular: string;
  botonPrimario: string;
  botonSecundario: string;
}

export interface DatosCifrasEditor {
  estudiantes: string;
  docentes: string;
  laboratorios: string;
  convenios: string;
}

export interface DatosFotografiaPortada {
  nombreArchivo: string;
  dimensiones: string;
  textoAlternativo: string;
}

export const HERO_EDITOR_INICIAL: DatosHeroEditor = {
  antetitulo: "Ingeniería en Ciencias de la Computación",
  subtitulo: "Programa, conecta y construye en UNICAH.",
  titular: "Construye el futuro desde Honduras",
  botonPrimario: "Únete ahora",
  botonSecundario: "Conoce ICC",
};

export const CIFRAS_EDITOR_INICIAL: DatosCifrasEditor = {
  estudiantes: "420",
  docentes: "24",
  laboratorios: "06",
  convenios: "14",
};

export const FOTO_PORTADA_INICIAL: DatosFotografiaPortada = {
  nombreArchivo: "estudiantes-tecnologia-unicah.jpg",
  dimensiones: "1440×800 px",
  textoAlternativo:
    "Estudiantes de Ingeniería en Ciencias de la Computación en laboratorio UNICAH",
};

/* ==========================================
   DATOS: DOCENTES Y PLAN DE ESTUDIOS (/admin/docentes)
   ========================================== */
export interface PerfilDocenteAdmin {
  id: string;
  nombreCargo: string;
  especialidadJornada: string;
  periodo: string;
  estadoTexto: string;
  estadoTipo: TipoEstadoSeccion;
}

export interface DocumentoPlanEstudios {
  etiqueta: string;
  nombreArchivo: string;
  detalle: string;
}

export const PERFILES_DOCENTES_ADMIN: PerfilDocenteAdmin[] = [
  {
    id: "doc-1",
    nombreCargo: "Ing. Josué Daniel Mata · Coordinador Académico ICC",
    especialidadJornada:
      "Ingeniería de Software y Arquitectura Web · Tiempo completo",
    periodo: "Activo · 2026",
    estadoTexto: "Destacada",
    estadoTipo: "publicado",
  },
  {
    id: "doc-2",
    nombreCargo: "M.Sc. María José López · Docente Investigadora",
    especialidadJornada:
      "Ciencia de Datos e Inteligencia Artificial · Tiempo completo",
    periodo: "Activo · 2026",
    estadoTexto: "Publicado",
    estadoTipo: "publicado",
  },
  {
    id: "doc-3",
    nombreCargo: "Ing. Carlos Alberto Mejía · Especialista en Redes",
    especialidadJornada:
      "Redes, Ciberseguridad y Telecomunicaciones · Hora clase",
    periodo: "Activo · 2026",
    estadoTexto: "Publicado",
    estadoTipo: "publicado",
  },
  {
    id: "doc-4",
    nombreCargo: "M.Sc. Ana Lucía Rodríguez · Docente de Sistemas",
    especialidadJornada:
      "Bases de Datos y Gestión de Proyectos · Pendiente foto oficial",
    periodo: "Nuevo · 2026",
    estadoTexto: "Borrador",
    estadoTipo: "neutral",
  },
];

export const PLAN_ESTUDIOS_VIGENTE: DocumentoPlanEstudios = {
  etiqueta: "Documento PDF Oficial",
  nombreArchivo: "plan-estudios-icc-unicah.pdf",
  detalle: "Versión 2026 · 2.4 MB · Descarga pública",
};


