"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  onAbrirModalSalir: () => void;
}

export default function Sidebar({ onAbrirModalSalir }: SidebarProps) {
  const pathname = usePathname();

  const esActivo = (href: string, exact = false) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="adm-sidebar">
      {/* Encabezado del Sidebar */}
      <div className="adm-sidebar-header">
        <div className="adm-logo-group">
          <img
            src="/img/shared/logo-icc.png"
            alt="Logo Facultad de Ingeniería en Ciencias de la Computación"
            className="adm-logo-img adm-logo-icc"
          />
          <img
            src="/img/shared/logo-unicahFA.png"
            alt="Escudo UNICAH"
            className="adm-logo-img adm-logo-unicah"
          />
        </div>
        <div className="adm-sidebar-brand">
          <span className="adm-sidebar-title">ICC / UNICAH</span>
          <span className="adm-sidebar-subtitle">PANEL ADMIN</span>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="adm-sidebar-section">
        <span className="adm-sidebar-label">GESTIÓN DE PÁGINA</span>
        <nav className="adm-nav">
          <Link
            href="/admin"
            className={`adm-nav-link ${esActivo("/admin", true) ? "adm-nav-link-active" : ""}`}
          >
            <svg viewBox="0 0 20 20" fill="none" className="adm-nav-icon">
              <rect x="2.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
              <rect x="11.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
              <rect x="2.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
              <rect x="11.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <span>Resumen General</span>
          </Link>

          <Link
            href="/admin/hero"
            className={`adm-nav-link ${esActivo("/admin/hero") ? "adm-nav-link-active" : ""}`}
          >
            <svg viewBox="0 0 20 20" fill="none" className="adm-nav-icon">
              <path
                d="M3 8.5L10 3L17 8.5V16.5C17 17.05 16.55 17.5 16 17.5H4C3.45 17.5 3 17.05 3 16.5V8.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M7.5 17.5V11.5H12.5V17.5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <span>Inicio, Hero y Cifras</span>
          </Link>

          <Link
            href="/admin/noticias"
            className={`adm-nav-link ${esActivo("/admin/noticias") ? "adm-nav-link-active" : ""}`}
          >
            <svg viewBox="0 0 20 20" fill="none" className="adm-nav-icon">
              <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3 8H17M6.5 2.5V5M13.5 2.5V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span>Noticias y Eventos</span>
          </Link>

          <Link
            href="/admin/docentes"
            className={`adm-nav-link ${esActivo("/admin/docentes") ? "adm-nav-link-active" : ""}`}
          >
            <svg viewBox="0 0 20 20" fill="none" className="adm-nav-icon">
              <path
                d="M10 3.5L2.5 7.2L10 10.9L17.5 7.2L10 3.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 9V13.5C5.5 15 7.5 16.2 10 16.2C12.5 16.2 14.5 15 14.5 13.5V9"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            <span>Docentes y Plan</span>
          </Link>

          <Link
            href="/admin/areas"
            className={`adm-nav-link ${esActivo("/admin/areas") ? "adm-nav-link-active" : ""}`}
          >
            <svg viewBox="0 0 20 20" fill="none" className="adm-nav-icon">
              <path
                d="M6.5 6.5L3 10L6.5 13.5M13.5 6.5L17 10L13.5 13.5M11.2 4.5L8.8 15.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Áreas, Laboratorios y Aliados</span>
          </Link>

          <Link
            href="/admin/usuarios"
            className={`adm-nav-link ${esActivo("/admin/usuarios") ? "adm-nav-link-active" : ""}`}
          >
            <svg viewBox="0 0 20 20" fill="none" className="adm-nav-icon">
              <rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M6.8 9V6.5C6.8 4.7 8.2 3.3 10 3.3C11.8 3.3 13.2 4.7 13.2 6.5V9"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            <span>Usuarios y Accesos</span>
          </Link>
        </nav>
      </div>

      {/* Pie del Sidebar: Perfil del usuario y Cerrar sesión */}
      <div className="adm-sidebar-footer">
        <div className="adm-user-card">
          <div className="adm-user-info">
            <div className="adm-user-avatar">JD</div>
            <div className="adm-user-meta">
              <span className="adm-user-name">Josué Daniel Mata</span>
              <span className="adm-user-role">Coordinador ICC</span>
            </div>
          </div>

          <button
            type="button"
            className="adm-btn-logout"
            onClick={onAbrirModalSalir}
          >
            <svg viewBox="0 0 18 18" fill="none" className="adm-logout-icon">
              <path
                d="M6.5 15.5H4C3.17 15.5 2.5 14.83 2.5 14V4C2.5 3.17 3.17 2.5 4 2.5H6.5M12 12.5L15.5 9L12 5.5M6.5 9H15.2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
