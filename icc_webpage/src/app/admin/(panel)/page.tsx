import Link from "next/link";
import {
  METRICAS_DASHBOARD,
  SECCIONES_HOME_ADMIN,
  TipoEstadoSeccion,
} from "@/data/admin-base";

const CLASE_BADGE_ESTADO: Record<TipoEstadoSeccion, string> = {
  publicado: "adm-badge-publicado",
  pendiente: "adm-badge-pendiente",
  neutral: "adm-badge-neutral",
};

export default function AdminDashboardPage() {
  return (
    <main className="adm-dashboard">
      {/* Encabezado de bienvenida */}
      <div className="adm-dash-header">
        <div className="adm-dash-welcome">
          <span className="etiqueta-seccion adm-dash-tag">
            VISTA GENERAL DEL SITIO
          </span>
          <h2 className="adm-dash-title">
            Bienvenido, Josué Daniel. Estado actual de Home ICC · UNICAH
          </h2>
        </div>
      </div>

      {/* 3 Tarjetas de métricas superiores */}
      <section className="adm-metrics-grid" aria-label="Indicadores generales">
        {METRICAS_DASHBOARD.map((metrica) => (
          <article key={metrica.id} className="tarjeta adm-metric-card">
            <div className="adm-metric-accent" aria-hidden="true" />
            <span className="adm-metric-value">{metrica.valor}</span>
            <span className="adm-metric-label">{metrica.etiqueta}</span>
            <span className="adm-metric-detail">{metrica.detalle}</span>
          </article>
        ))}
      </section>

      {/* Tarjeta de secciones administrables de Home */}
      <section className="tarjeta adm-sections-card">
        <div className="adm-sections-header">
          <div>
            <h3 className="adm-sections-title">
              Secciones administrables de Home ICC · UNICAH
            </h3>
            <p className="adm-sections-subtitle">
              Cada módulo corresponde directamente a una sección visible en la
              página pública.
            </p>
          </div>

          <Link href="/" className="adm-btn-secondary adm-btn-preview">
            Previsualizar Home
          </Link>
        </div>

        <div className="adm-sections-list">
          {SECCIONES_HOME_ADMIN.map((seccion) => (
            <div key={seccion.id} className="adm-section-row">
              <div className="adm-section-info">
                <span className="adm-section-name">{seccion.titulo}</span>
                <span className="adm-section-desc">{seccion.subtitulo}</span>
              </div>

              <div className="adm-section-actions">
                <span className="adm-section-date">
                  {seccion.ultimaActualizacion}
                </span>

                <span
                  className={`badge-estado ${CLASE_BADGE_ESTADO[seccion.estadoTipo]}`}
                >
                  ● {seccion.estadoTexto}
                </span>

                <Link
                  href={seccion.hrefEditar}
                  className="adm-btn-secondary adm-btn-edit"
                >
                  Editar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
