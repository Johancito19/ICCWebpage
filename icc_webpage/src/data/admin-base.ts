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
