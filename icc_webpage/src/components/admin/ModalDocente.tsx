"use client";

import { useState, useEffect } from "react";
import { PerfilDocenteAdmin, TipoEstadoSeccion } from "@/data/admin-base";

interface ModalDocenteProps {
  abierto: boolean;
  docenteEditar: PerfilDocenteAdmin | null;
  onCerrar: () => void;
  onGuardar: (docente: PerfilDocenteAdmin) => void;
}

export default function ModalDocente({
  abierto,
  docenteEditar,
  onCerrar,
  onGuardar,
}: ModalDocenteProps) {
  const [nombreCargo, setNombreCargo] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [tamanoTarjeta, setTamanoTarjeta] = useState("Secundaria");
  const [estadoTexto, setEstadoTexto] = useState("Borrador");
  const [nombreFoto, setNombreFoto] = useState("Ningún archivo seleccionado");
  const [textoAlternativo, setTextoAlternativo] = useState("");

  useEffect(() => {
    if (docenteEditar) {
      setNombreCargo(docenteEditar.nombreCargo);
      setEspecialidad(docenteEditar.especialidadJornada);
      setTamanoTarjeta(
        docenteEditar.estadoTexto === "Destacada"
          ? "Principal (Coordinación)"
          : "Secundaria"
      );
      setEstadoTexto(docenteEditar.estadoTexto);
      setNombreFoto("Fotografía institucional registrada");
      setTextoAlternativo(docenteEditar.nombreCargo);
    } else {
      setNombreCargo("");
      setEspecialidad("");
      setTamanoTarjeta("Secundaria");
      setEstadoTexto("Borrador");
      setNombreFoto("Ningún archivo seleccionado");
      setTextoAlternativo("");
    }
  }, [docenteEditar, abierto]);

  if (!abierto) return null;

  const handleSeleccionFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0];
    if (archivo) {
      setNombreFoto(archivo.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const estadoTipo: TipoEstadoSeccion =
      estadoTexto === "Borrador" ? "neutral" : "publicado";

    onGuardar({
      id: docenteEditar ? docenteEditar.id : `doc-${Date.now()}`,
      nombreCargo:
        nombreCargo.trim() || "Nuevo Docente ICC · Docente Tiempo Completo",
      especialidadJornada:
        especialidad.trim() ||
        "Ingeniería en Ciencias de la Computación · Tiempo completo",
      periodo: docenteEditar ? docenteEditar.periodo : "Nuevo · 2026",
      estadoTexto,
      estadoTipo,
    });
    onCerrar();
  };

  return (
    <div className="adm-modal-backdrop" role="dialog" aria-modal="true">
      <div className="tarjeta adm-modal-photo-card adm-modal-docente-card">
        <div className="adm-modal-photo-header">
          <div>
            <span className="adm-modal-kicker">DIRECTORIO DOCENTE</span>
            <h2 className="adm-modal-photo-title">
              {docenteEditar ? "Editar docente" : "Agregar docente"}
            </h2>
          </div>

          <button
            type="button"
            className="adm-modal-close"
            onClick={onCerrar}
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        <p className="adm-modal-photo-subtitle">
          Registra un perfil docente para el directorio oficial de Home ICC ·
          UNICAH.
        </p>

        <form onSubmit={handleSubmit} className="adm-modal-photo-form">
          <div className="adm-form-group">
            <label htmlFor="nombre-docente" className="adm-label">
              Nombre y cargo del docente *
            </label>
            <input
              id="nombre-docente"
              type="text"
              className="input-base adm-login-input"
              placeholder="Ej. Ing. Nombre Apellido · Docente ICC"
              value={nombreCargo}
              onChange={(e) => setNombreCargo(e.target.value)}
            />
          </div>

          <div className="adm-form-group">
            <label htmlFor="especialidad-docente" className="adm-label">
              Especialidad y cátedras que imparte *
            </label>
            <textarea
              id="especialidad-docente"
              rows={3}
              className="input-base adm-login-input adm-textarea"
              placeholder="Describe la especialidad académica, líneas de investigación y asignaturas principales."
              value={especialidad}
              onChange={(e) => setEspecialidad(e.target.value)}
            />
          </div>

          <div className="adm-hero-grid-2">
            <div className="adm-form-group">
              <label htmlFor="tamano-tarjeta-doc" className="adm-label">
                Tamaño de tarjeta
              </label>
              <select
                id="tamano-tarjeta-doc"
                className="input-base adm-login-input"
                value={tamanoTarjeta}
                onChange={(e) => setTamanoTarjeta(e.target.value)}
              >
                <option value="Secundaria">Secundaria</option>
                <option value="Principal (Coordinación)">
                  Principal (Coordinación)
                </option>
              </select>
            </div>

            <div className="adm-form-group">
              <label htmlFor="estado-doc" className="adm-label">
                Estado
              </label>
              <select
                id="estado-doc"
                className="input-base adm-login-input"
                value={estadoTexto}
                onChange={(e) => setEstadoTexto(e.target.value)}
              >
                <option value="Borrador">Borrador</option>
                <option value="Publicado">Publicado</option>
                <option value="Destacada">Destacada</option>
              </select>
            </div>
          </div>

          <div className="adm-form-group">
            <span className="adm-label">Fotografía institucional *</span>
            <div className="adm-file-upload-bar">
              <div className="adm-file-upload-info">
                <strong className="adm-file-upload-name">{nombreFoto}</strong>
                <span className="adm-file-upload-hint">
                  JPG o PNG · Máximo 5 MB
                </span>
              </div>

              <label className="adm-btn-secondary adm-file-upload-btn">
                Subir fotografía
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleSeleccionFoto}
                  className="adm-file-hidden"
                />
              </label>
            </div>
          </div>

          <div className="adm-form-group">
            <label htmlFor="alt-docente" className="adm-label">
              Texto alternativo *
            </label>
            <input
              id="alt-docente"
              type="text"
              className="input-base adm-login-input"
              placeholder="Describe la fotografía del docente"
              value={textoAlternativo}
              onChange={(e) => setTextoAlternativo(e.target.value)}
            />
          </div>

          <div className="adm-modal-footnotes">
            <span>
              El perfil docente se mostrará en la sección Docentes y Plan al
              publicarse.
            </span>
            <span>* Campos obligatorios</span>
          </div>

          <div className="adm-modal-photo-footer">
            <button
              type="button"
              className="adm-btn-secondary adm-modal-btn"
              onClick={onCerrar}
            >
              Cancelar
            </button>
            <button type="submit" className="btn-amarillo adm-modal-btn">
              {docenteEditar ? "Guardar cambios" : "Agregar docente"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
