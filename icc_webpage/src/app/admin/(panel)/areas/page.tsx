"use client";

import "@/styles/admin-modulos.css";

import { useState, useEffect } from "react";
import {
  AREAS_ADMIN_INICIALES,
  ALIADOS_ADMIN_INICIALES,
  AreaAdmin,
  AliadoAdmin,
} from "@/data/admin-modulos";
import ModalArea from "@/components/admin-modulos/ModalArea";
import ModalAliado from "@/components/admin-modulos/ModalAliado";

type TabAreas = "areas" | "docentes" | "plan" | "aliados";

export default function AdminAreasPage() {
  const [areas, setAreas] = useState<AreaAdmin[]>(AREAS_ADMIN_INICIALES);
  const [aliados, setAliados] = useState<AliadoAdmin[]>(
    ALIADOS_ADMIN_INICIALES
  );
  const [tabActiva, setTabActiva] = useState<TabAreas>("areas");
  const [busqueda, setBusqueda] = useState("");
  const [reordenando, setReordenando] = useState(false);

  const [modalAreaAbierto, setModalAreaAbierto] = useState(false);
  const [modalAliadoAbierto, setModalAliadoAbierto] = useState(false);
  const [areaEditar, setAreaEditar] = useState<AreaAdmin | null>(null);
  const [slotSeleccionado, setSlotSeleccionado] = useState<number | null>(null);

  useEffect(() => {
    const handleTopbarClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".adm-topbar-btn-primary")) {
        e.preventDefault();
        setAreaEditar(null);
        setModalAreaAbierto(true);
      }
    };

    const handleTopbarSearch = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.classList.contains("adm-search-input")) {
        setBusqueda(target.value);
      }
    };

    document.addEventListener("click", handleTopbarClick);
    document.addEventListener("input", handleTopbarSearch);

    return () => {
      document.removeEventListener("click", handleTopbarClick);
      document.removeEventListener("input", handleTopbarSearch);
    };
  }, []);

  const posicionesOcupadas = aliados.map((aliado) => aliado.posicion);

  const posicionDisponible =
    slotSeleccionado ??
    [1, 2, 3, 4, 5, 6].find(
      (posicion) => !posicionesOcupadas.includes(posicion)
    ) ??
    6;

  const abrirEditarArea = (area: AreaAdmin) => {
    setAreaEditar(area);
    setModalAreaAbierto(true);
  };

  const guardarArea = (areaGuardada: AreaAdmin) => {
    setAreas((prev) => {
      const existe = prev.some((area) => area.id === areaGuardada.id);
      if (existe) {
        return prev.map((area) =>
          area.id === areaGuardada.id ? areaGuardada : area
        );
      }
      return [...prev, areaGuardada];
    });
  };

  const moverArea = (indice: number, direccion: -1 | 1) => {
    const nuevoIndice = indice + direccion;
    if (nuevoIndice < 0 || nuevoIndice >= areas.length) return;

    setAreas((prev) => {
      const copia = [...prev];
      const [movida] = copia.splice(indice, 1);
      copia.splice(nuevoIndice, 0, movida);
      return copia;
    });
  };

  const abrirModalAliado = (posicion?: number) => {
    setSlotSeleccionado(posicion ?? null);
    setModalAliadoAbierto(true);
  };

  const guardarAliado = (aliadoGuardado: AliadoAdmin) => {
    setAliados((prev) => [...prev, aliadoGuardado]);
    setSlotSeleccionado(null);
  };

  const quitarAliado = (id: string) => {
    setAliados((prev) => prev.filter((item) => item.id !== id));
  };

  const areasFiltradas = areas.filter((area) =>
    area.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="admm-areas-page">
      <div className="admm-tabs">
        <button
          type="button"
          className={tabActiva === "areas" ? "active" : ""}
          onClick={() => setTabActiva("areas")}
        >
          Áreas y Laboratorios ({areas.length})
        </button>

        <button
          type="button"
          className={tabActiva === "docentes" ? "active" : ""}
          onClick={() => setTabActiva("docentes")}
        >
          Docentes (24)
        </button>

        <button
          type="button"
          className={tabActiva === "plan" ? "active" : ""}
          onClick={() => setTabActiva("plan")}
        >
          Plan de Estudios
        </button>

        <button
          type="button"
          className={tabActiva === "aliados" ? "active" : ""}
          onClick={() => setTabActiva("aliados")}
        >
          Aliados de Vinculación ({aliados.length})
        </button>
      </div>

      {/* PANEL 1: EXPLORA LA COMPUTACIÓN */}
      {tabActiva === "areas" && (
        <section className="admm-panel">
          <div className="admm-panel-header">
            <div>
              <span className="admm-section-label">
                EXPLORA LA COMPUTACIÓN
              </span>
              <h2>Tarjetas publicadas en la galería de Home ICC · UNICAH</h2>
            </div>

            <button
              type="button"
              className="admm-btn-secondary"
              onClick={() => setReordenando((prev) => !prev)}
            >
              {reordenando ? "Listo" : "Reordenar tarjetas"}
            </button>
          </div>

          <div className="admm-area-grid">
            {areasFiltradas.map((area, index) => (
              <article
                key={area.id}
                className={`admm-area-card ${
                  area.tamano === "Principal (Col 2x)"
                    ? "admm-area-card-principal"
                    : ""
                }`}
              >
                <div className="admm-area-image" />

                <div className="admm-area-card-meta">
                  <span>{area.tamano}</span>

                  <span
                    className={`admm-status ${
                      area.estado === "Publicado"
                        ? "admm-status-published"
                        : "admm-status-draft"
                    }`}
                  >
                    ● {area.estado}
                  </span>
                </div>

                <h3>{area.nombre}</h3>
                <p className="admm-area-photo">Foto: {area.fotografia}</p>

                {reordenando ? (
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      type="button"
                      className="admm-btn-secondary admm-btn-full"
                      disabled={index === 0}
                      onClick={() => moverArea(index, -1)}
                    >
                      ← Subir
                    </button>
                    <button
                      type="button"
                      className="admm-btn-secondary admm-btn-full"
                      disabled={index === areasFiltradas.length - 1}
                      onClick={() => moverArea(index, 1)}
                    >
                      Bajar →
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="admm-btn-secondary admm-btn-full"
                    onClick={() => abrirEditarArea(area)}
                  >
                    Editar área y foto
                  </button>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* PANEL 2: VINCULACIÓN EMPRESARIAL (visible debajo en Áreas y también en su pestaña) */}
      {(tabActiva === "areas" || tabActiva === "aliados") && (
        <section className="admm-panel">
          <div className="admm-panel-header">
            <div>
              <span className="admm-section-label">
                VINCULACIÓN EMPRESARIAL
              </span>
              <h2>Logos aliados en Home y solicitudes recibidas</h2>
            </div>

            <button
              type="button"
              className="admm-btn-primary"
              onClick={() => abrirModalAliado()}
              disabled={aliados.length >= 6}
            >
              + Subir logo aliado
            </button>
          </div>

          <div className="admm-aliados-grid">
            {[1, 2, 3, 4, 5, 6].map((posicion) => {
              const aliado = aliados.find(
                (item) => item.posicion === posicion
              );

              return (
                <div
                  key={posicion}
                  className={`admm-aliado-slot ${
                    aliado ? "admm-aliado-ocupado" : ""
                  }`}
                >
                  {aliado ? (
                    <>
                      <strong>{aliado.nombre}</strong>
                      <span className="admm-status-published-text">
                        Publicado
                      </span>
                      <button
                        type="button"
                        onClick={() => quitarAliado(aliado.id)}
                      >
                        Quitar
                      </button>
                    </>
                  ) : (
                    <>
                      <span>Slot {posicion} (Vacío)</span>
                      <button
                        type="button"
                        onClick={() => abrirModalAliado(posicion)}
                      >
                        + Asignar logo
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {tabActiva === "docentes" && (
        <section className="admm-panel admm-placeholder-panel">
          <h2>Docentes</h2>
          <p>
            El módulo de docentes se encuentra en la sección correspondiente.
          </p>
        </section>
      )}

      {tabActiva === "plan" && (
        <section className="admm-panel admm-placeholder-panel">
          <h2>Plan de Estudios</h2>
          <p>
            El módulo del Plan de Estudios se encuentra en la sección
            correspondiente.
          </p>
        </section>
      )}

      <ModalArea
        abierto={modalAreaAbierto}
        areaEditar={areaEditar}
        onCerrar={() => setModalAreaAbierto(false)}
        onGuardar={guardarArea}
      />

      <ModalAliado
        abierto={modalAliadoAbierto}
        posicionDisponible={posicionDisponible}
        onCerrar={() => {
          setModalAliadoAbierto(false);
          setSlotSeleccionado(null);
        }}
        onGuardar={guardarAliado}
      />
    </main>
  );
}