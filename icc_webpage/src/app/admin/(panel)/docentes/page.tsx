"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  PERFILES_DOCENTES_ADMIN,
  PLAN_ESTUDIOS_VIGENTE,
  PerfilDocenteAdmin,
  DocumentoPlanEstudios,
  TipoEstadoSeccion,
} from "@/data/admin-base";
import ModalDocente from "@/components/admin/ModalDocente";
import ModalPlanEstudio from "@/components/admin/ModalPlanEstudio";

const CLASE_BADGE_DOCENTE: Record<TipoEstadoSeccion, string> = {
  publicado: "adm-badge-publicado",
  pendiente: "adm-badge-pendiente",
  neutral: "adm-badge-neutral",
};

function ContenidoDocentes() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [docentes, setDocentes] = useState<PerfilDocenteAdmin[]>(
    PERFILES_DOCENTES_ADMIN
  );
  const [planEstudios, setPlanEstudios] = useState<DocumentoPlanEstudios>(
    PLAN_ESTUDIOS_VIGENTE
  );
  const [modalDocenteAbierto, setModalDocenteAbierto] = useState(false);
  const [docenteEditar, setDocenteEditar] =
    useState<PerfilDocenteAdmin | null>(null);
  const [modalPlanAbierto, setModalPlanAbierto] = useState(false);

  useEffect(() => {
    if (searchParams.get("nuevo") === "1") {
      setDocenteEditar(null);
      setModalDocenteAbierto(true);
      router.replace("/admin/docentes");
    }
  }, [searchParams, router]);

  const handleAbrirNuevoDocente = () => {
    setDocenteEditar(null);
    setModalDocenteAbierto(true);
  };

  const handleAbrirEditarDocente = (docente: PerfilDocenteAdmin) => {
    setDocenteEditar(docente);
    setModalDocenteAbierto(true);
  };

  const handleGuardarDocente = (docenteGuardado: PerfilDocenteAdmin) => {
    setDocentes((prev) => {
      const existe = prev.some((d) => d.id === docenteGuardado.id);
      if (existe) {
        return prev.map((d) =>
          d.id === docenteGuardado.id ? docenteGuardado : d
        );
      }
      return [...prev, docenteGuardado];
    });
  };

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

          <div className="adm-docentes-header-right">
            <span className="adm-docentes-sort">
              Orden: Coordinación primero
            </span>
            <button
              type="button"
              className="adm-btn-secondary adm-btn-edit"
              onClick={handleAbrirNuevoDocente}
            >
              + Agregar docente
            </button>
          </div>
        </div>

        <div className="adm-docentes-list">
          {docentes.map((docente) => (
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
                  onClick={() => handleAbrirEditarDocente(docente)}
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
          <span className="adm-plan-doc-kicker">{planEstudios.etiqueta}</span>
          <strong className="adm-plan-doc-name">
            {planEstudios.nombreArchivo}
          </strong>
          <span className="adm-plan-doc-meta">{planEstudios.detalle}</span>
        </div>

        <button
          type="button"
          className="btn-amarillo adm-btn-full"
          onClick={() => setModalPlanAbierto(true)}
        >
          + Plan de Estudio
        </button>
      </aside>

      <ModalDocente
        abierto={modalDocenteAbierto}
        docenteEditar={docenteEditar}
        onCerrar={() => setModalDocenteAbierto(false)}
        onGuardar={handleGuardarDocente}
      />

      <ModalPlanEstudio
        abierto={modalPlanAbierto}
        planActual={planEstudios}
        onCerrar={() => setModalPlanAbierto(false)}
        onGuardar={(nuevoPlan) => setPlanEstudios(nuevoPlan)}
      />
    </main>
  );
}

export default function AdminDocentesPage() {
  return (
    <Suspense fallback={null}>
      <ContenidoDocentes />
    </Suspense>
  );
}
