"use client";

import { useState } from "react";
import {
  HERO_EDITOR_INICIAL,
  CIFRAS_EDITOR_INICIAL,
  FOTO_PORTADA_INICIAL,
  DatosHeroEditor,
  DatosCifrasEditor,
  DatosFotografiaPortada,
} from "@/data/admin-base";
import ModalReemplazarFoto from "@/components/admin/ModalReemplazarFoto";

export default function AdminHeroPage() {
  const [hero, setHero] = useState<DatosHeroEditor>(HERO_EDITOR_INICIAL);
  const [cifras, setCifras] = useState<DatosCifrasEditor>(CIFRAS_EDITOR_INICIAL);
  const [fotoPortada, setFotoPortada] =
    useState<DatosFotografiaPortada>(FOTO_PORTADA_INICIAL);
  const [modalFotoAbierto, setModalFotoAbierto] = useState(false);

  const handleHeroChange = (campo: keyof DatosHeroEditor, valor: string) => {
    setHero((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleCifraChange = (campo: keyof DatosCifrasEditor, valor: string) => {
    setCifras((prev) => ({ ...prev, [campo]: valor }));
  };

  return (
    <main className="adm-hero-editor">
      {/* Columna izquierda: Formulario editable */}
      <section className="tarjeta adm-hero-form-card">
        <div className="adm-hero-block">
          <span className="etiqueta-seccion adm-dash-tag">
            SECCIÓN HERO PRINCIPAL
          </span>
          <h2 className="adm-hero-section-title">
            Textos y botones de portada
          </h2>

          <div className="adm-hero-grid-2">
            <div className="adm-form-group">
              <label htmlFor="antetitulo" className="adm-label">
                Antetítulo de categoría
              </label>
              <input
                id="antetitulo"
                type="text"
                className="input-base adm-login-input"
                value={hero.antetitulo}
                onChange={(e) => handleHeroChange("antetitulo", e.target.value)}
              />
            </div>

            <div className="adm-form-group">
              <label htmlFor="subtitulo" className="adm-label">
                Subtítulo del Hero
              </label>
              <input
                id="subtitulo"
                type="text"
                className="input-base adm-login-input"
                value={hero.subtitulo}
                onChange={(e) => handleHeroChange("subtitulo", e.target.value)}
              />
            </div>
          </div>

          <div className="adm-form-group">
            <label htmlFor="titular" className="adm-label">
              Titular principal editable (H1 Display)
            </label>
            <input
              id="titular"
              type="text"
              className="input-base adm-login-input"
              value={hero.titular}
              onChange={(e) => handleHeroChange("titular", e.target.value)}
            />
          </div>

          <div className="adm-hero-grid-2">
            <div className="adm-form-group">
              <label htmlFor="botonPrimario" className="adm-label">
                Botón primario (Amarillo)
              </label>
              <input
                id="botonPrimario"
                type="text"
                className="input-base adm-login-input"
                value={hero.botonPrimario}
                onChange={(e) =>
                  handleHeroChange("botonPrimario", e.target.value)
                }
              />
            </div>

            <div className="adm-form-group">
              <label htmlFor="botonSecundario" className="adm-label">
                Botón secundario (Outline)
              </label>
              <input
                id="botonSecundario"
                type="text"
                className="input-base adm-login-input"
                value={hero.botonSecundario}
                onChange={(e) =>
                  handleHeroChange("botonSecundario", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        <hr className="adm-hero-divider" />

        {/* Bloque Cifras Clave */}
        <div className="adm-hero-block">
          <span className="etiqueta-seccion adm-dash-tag">
            ICC EN PERSPECTIVA · CIFRAS CLAVE
          </span>
          <p className="adm-hero-subhint">
            Indicadores numéricos mostrados en la franja azul institucional
          </p>

          <div className="adm-hero-grid-4">
            <div className="adm-form-group">
              <label htmlFor="cifra-estudiantes" className="adm-label">
                Estudiantes
              </label>
              <input
                id="cifra-estudiantes"
                type="text"
                className="input-base adm-login-input"
                value={cifras.estudiantes}
                onChange={(e) =>
                  handleCifraChange("estudiantes", e.target.value)
                }
              />
            </div>

            <div className="adm-form-group">
              <label htmlFor="cifra-docentes" className="adm-label">
                Docentes
              </label>
              <input
                id="cifra-docentes"
                type="text"
                className="input-base adm-login-input"
                value={cifras.docentes}
                onChange={(e) => handleCifraChange("docentes", e.target.value)}
              />
            </div>

            <div className="adm-form-group">
              <label htmlFor="cifra-laboratorios" className="adm-label">
                Laboratorios
              </label>
              <input
                id="cifra-laboratorios"
                type="text"
                className="input-base adm-login-input"
                value={cifras.laboratorios}
                onChange={(e) =>
                  handleCifraChange("laboratorios", e.target.value)
                }
              />
            </div>

            <div className="adm-form-group">
              <label htmlFor="cifra-convenios" className="adm-label">
                Convenios
              </label>
              <input
                id="cifra-convenios"
                type="text"
                className="input-base adm-login-input"
                value={cifras.convenios}
                onChange={(e) => handleCifraChange("convenios", e.target.value)}
              />
            </div>
          </div>

          <div className="adm-hero-actions">
            <button type="button" className="btn-amarillo adm-hero-btn">
              Guardar y publicar en Home
            </button>
          </div>
        </div>
      </section>

      {/* Columna derecha: Vista previa en vivo */}
      <aside className="tarjeta adm-hero-preview-card">
        <div className="adm-preview-header">
          <h3 className="adm-preview-title">
            Vista previa en vivo · Escritorio
          </h3>
          <p className="adm-preview-subtitle">
            Así se visualizará en Home ICC · UNICAH antes de publicar.
          </p>
        </div>

        {/* Mini-preview del Hero */}
        <div className="adm-preview-hero-box">
          <span className="adm-preview-kicker">— {hero.antetitulo}</span>
          <h4 className="adm-preview-heading">{hero.titular}</h4>
          <p className="adm-preview-desc">{hero.subtitulo}</p>

          <div className="adm-preview-btns">
            <span className="btn-amarillo adm-preview-btn-primary">
              {hero.botonPrimario}
            </span>
            <span className="adm-preview-btn-secondary">
              {hero.botonSecundario}
            </span>
          </div>
        </div>

        {/* Mini-preview de ICC en perspectiva */}
        <div className="adm-preview-stats-box">
          <span className="adm-preview-kicker">— ICC en perspectiva</span>
          <div className="adm-preview-stats-grid">
            <div className="adm-preview-stat-item">
              <strong className="adm-preview-stat-val">
                {cifras.estudiantes}
              </strong>
              <span className="adm-preview-stat-lbl">Estudiantes</span>
            </div>
            <div className="adm-preview-stat-item">
              <strong className="adm-preview-stat-val">
                {cifras.docentes}
              </strong>
              <span className="adm-preview-stat-lbl">Docentes</span>
            </div>
            <div className="adm-preview-stat-item">
              <strong className="adm-preview-stat-val">
                {cifras.laboratorios}
              </strong>
              <span className="adm-preview-stat-lbl">Laboratorios</span>
            </div>
            <div className="adm-preview-stat-item">
              <strong className="adm-preview-stat-val">
                {cifras.convenios}
              </strong>
              <span className="adm-preview-stat-lbl">Convenios</span>
            </div>
          </div>
        </div>

        {/* Bloque fotografía de portada actual */}
        <div className="adm-preview-photo-box">
          <strong className="adm-preview-photo-title">
            Fotografía de portada actual
          </strong>
          <span className="adm-preview-photo-meta">
            {fotoPortada.nombreArchivo} · {fotoPortada.dimensiones}
          </span>
          <div>
            <button
              type="button"
              className="adm-btn-secondary adm-preview-photo-btn"
              onClick={() => setModalFotoAbierto(true)}
            >
              Reemplazar fotografía
            </button>
          </div>
        </div>
      </aside>

      <ModalReemplazarFoto
        abierto={modalFotoAbierto}
        fotoActual={fotoPortada}
        onCerrar={() => setModalFotoAbierto(false)}
        onGuardar={(nuevaFoto) => setFotoPortada(nuevaFoto)}
      />
    </main>
  );
}
