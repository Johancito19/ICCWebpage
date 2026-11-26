"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TopbarConfig {
  breadcrumb: string;
  titulo: string;
  placeholderBusqueda: string;
  textoBotonPrimario: string;
  hrefBotonPrimario: string;
}

const CONFIG_POR_RUTA: Record<string, TopbarConfig> = {
  "/admin": {
    breadcrumb: "ICC · UNICAH / PANEL DE ADMINISTRADOR",
    titulo: "Resumen General",
    placeholderBusqueda: "Buscar sección o entrada...",
    textoBotonPrimario: "+ Nueva noticia",
    hrefBotonPrimario: "/admin/noticias",
  },
  "/admin/hero": {
    breadcrumb: "ICC · UNICAH / GESTIÓN DE PÁGINA / INICIO",
    titulo: "Editor de Hero, Quiénes Somos y Cifras Clave",
    placeholderBusqueda: "Buscar sección o entrada...",
    textoBotonPrimario: "Resumen general",
    hrefBotonPrimario: "/admin",
  },
  "/admin/noticias": {
    breadcrumb: "ICC · UNICAH / ACTUALIDAD ICC",
    titulo: "Gestión de Noticias y Próximos Eventos",
    placeholderBusqueda: "Buscar sección o entrada...",
    textoBotonPrimario: "+ Nueva noticia",
    hrefBotonPrimario: "/admin/noticias",
  },
  "/admin/docentes": {
    breadcrumb: "ICC · UNICAH / ACTUALIDAD ICC",
    titulo: "Gestión de Docentes y Plan de Estudios",
    placeholderBusqueda: "Buscar sección o entrada...",
    textoBotonPrimario: "+ Agregar Docente",
    hrefBotonPrimario: "/admin/docentes",
  },
  "/admin/areas": {
    breadcrumb: "ICC · UNICAH / ESTRUCTURA ACADÉMICA",
    titulo: "Gestión de Áreas, Laboratorios y Aliados de Vinculación",
    placeholderBusqueda: "Buscar sección o entrada...",
    textoBotonPrimario: "+ Agregar área",
    hrefBotonPrimario: "/admin/areas",
  },
  "/admin/usuarios": {
    breadcrumb: "ICC · UNICAH / ADMINISTRACIÓN",
    titulo: "Usuarios y Accesos",
    placeholderBusqueda: "Buscar usuario o correo...",
    textoBotonPrimario: "+ Invitar usuario",
    hrefBotonPrimario: "/admin/usuarios",
  },
};

export default function Topbar() {
  const pathname = usePathname();
  const config = CONFIG_POR_RUTA[pathname] ?? CONFIG_POR_RUTA["/admin"];

  return (
    <header className="adm-topbar">
      <div className="adm-topbar-left">
        <span className="adm-topbar-breadcrumb">{config.breadcrumb}</span>
        <h1 className="adm-topbar-title">{config.titulo}</h1>
      </div>

      <div className="adm-topbar-right">
        <div className="adm-search-box">
          <svg viewBox="0 0 18 18" fill="none" className="adm-search-icon">
            <circle
              cx="8"
              cy="8"
              r="5.2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 12L15.5 15.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="search"
            placeholder={config.placeholderBusqueda}
            className="adm-search-input"
          />
        </div>

        <Link href="/" className="adm-btn-secondary adm-topbar-btn">
          Ver página pública
        </Link>

        <Link
          href={config.hrefBotonPrimario}
          className="btn-amarillo adm-topbar-btn-primary"
        >
          {config.textoBotonPrimario}
        </Link>
      </div>
    </header>
  );
}
