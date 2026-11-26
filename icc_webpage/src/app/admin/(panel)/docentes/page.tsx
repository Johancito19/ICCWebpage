import {
  PERFILES_DOCENTES_ADMIN,
  PLAN_ESTUDIOS_VIGENTE,
  TipoEstadoSeccion,
} from "@/data/admin-base";

const CLASE_BADGE_DOCENTE: Record<TipoEstadoSeccion, string> = {
  publicado: "adm-badge-publicado",
  pendiente: "adm-badge-pendiente",
  neutral: "adm-badge-neutral",
};

export default function AdminDocentesPage() {
  return (
    <main className="adm-docentes-grid">
      {/* Columna izquierda: Perfiles docentes visibles en Home ICC */}
      <section className="tarjeta adm-docentes-card">
        <div className="adm-docentes-header">
          <div>
            <span className="etiqueta-seccion adm-dash-tag">
              ACTUALIDAD ICC
            </span>
            <h2 className="adm-docentes-title">
              Perfiles docentes visibles en Home ICC
            </h2>
          </div>

          <span className="adm-docentes-sort">
            Orden: Coordinación primero
          </span>
        </div>

        <div className="adm-docentes-list">
          {PERFILES_DOCENTES_ADMIN.map((docente) => (
            <article key={docente.id} className="adm-docente-row">
              <div className="adm-docente-left">
                <div className="adm-docente-thumb" aria-hidden="true" />
                <div className="adm-docente-info">
                  <h3 className="adm-docente-name">{docente.nombreCargo}</h3>
                  <p className="adm-docente-desc">
                    {docente.especialidadJornada}
                  </p>
                </div>
              </div>

              <div className="adm-docente-actions">
                <span className="adm-section-date">{docente.periodo}</span>

                <span
                  className={`badge-estado ${CLASE_BADGE_DOCENTE[docente.estadoTipo]}`}
                >
                  ● {docente.estadoTexto}
                </span>

                <button
                  type="button"
                  className="adm-btn-secondary adm-btn-edit"
                >
                  Editar
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Columna derecha: Plan de Estudios ICC vigente */}
      <aside className="tarjeta adm-plan-card">
        <div className="adm-plan-header">
          <span className="etiqueta-seccion adm-dash-tag">
            AGENDA ACADÉMICA
          </span>
          <h3 className="adm-docentes-title">Plan de Estudios ICC vigente</h3>
          <p className="adm-plan-subtitle">
            Resumen oficial de periodos, asignaturas y documento PDF descargable
            en Home ICC.
          </p>
        </div>

        <div className="adm-plan-doc-box">
          <span className="adm-plan-doc-kicker">
            {PLAN_ESTUDIOS_VIGENTE.etiqueta}
          </span>
          <strong className="adm-plan-doc-name">
            {PLAN_ESTUDIOS_VIGENTE.nombreArchivo}
          </strong>
          <span className="adm-plan-doc-meta">
            {PLAN_ESTUDIOS_VIGENTE.detalle}
          </span>
        </div>

        <button type="button" className="btn-amarillo adm-btn-full">
          + Plan de Estudio
        </button>
      </aside>
    </main>
  );
}
