import Link from "next/link";
import "@/styles/admin-base.css";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="adm-shell">
      <aside className="adm-sidebar">
        <div className="adm-sidebar-logo">
          ICC · <span>UNICAH</span>
        </div>
        <nav className="adm-nav">
          <Link href="/admin" className="adm-nav-link">Dashboard</Link>
          <Link href="/admin/hero" className="adm-nav-link">Hero y Cifras</Link>
          <Link href="/admin/noticias" className="adm-nav-link">Noticias y Eventos</Link>
          <Link href="/admin/areas" className="adm-nav-link">Áreas y Aliados</Link>
          <Link href="/admin/usuarios" className="adm-nav-link">Usuarios y Accesos</Link>
        </nav>
      </aside>

      <div className="adm-main">
        <header className="adm-topbar">
          <span className="adm-topbar-title">Panel de Administración</span>
          <Link href="/admin/login" className="btn-outline">Cerrar sesión</Link>
        </header>
        <div className="adm-content">{children}</div>
      </div>
    </div>
  );
}