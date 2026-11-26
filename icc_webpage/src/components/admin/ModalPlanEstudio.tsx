"use client";

import { useState } from "react";
import { DocumentoPlanEstudios } from "@/data/admin-base";

interface ModalPlanEstudioProps {
  abierto: boolean;
  planActual: DocumentoPlanEstudios;
  onCerrar: () => void;
  onGuardar: (nuevoPlan: DocumentoPlanEstudios) => void;
}

export default function ModalPlanEstudio({
  abierto,
  planActual,
  onCerrar,
  onGuardar,
}: ModalPlanEstudioProps) {
  const [nombreDocumento, setNombreDocumento] = useState("");
  const [nombreArchivo, setNombreArchivo] = useState(planActual.nombreArchivo);

  if (!abierto) return null;

  const handleSeleccionArchivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0];
    if (archivo) {
      setNombreArchivo(archivo.name);
    }
  };

  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();
    onGuardar({
      etiqueta: planActual.etiqueta,
      nombreArchivo: nombreDocumento.trim()
        ? `${nombreDocumento.trim()}.pdf`
        : nombreArchivo,
      detalle: planActual.detalle,
    });
    setNombreDocumento("");
    onCerrar();
  };

  return (
    <div className="adm-modal-backdrop" role="dialog" aria-modal="true">
      <div className="tarjeta adm-modal-photo-card">
        <div className="adm-modal-photo-header">
          <div>
            <span className="adm-modal-kicker">PLAN DE ESTUDIO</span>
            <h2 className="adm-modal-photo-title">Agregar documento</h2>
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
          Agrega el documento del plan de estudio de ICC.
        </p>

        <form onSubmit={handleGuardar} className="adm-modal-photo-form">
          <div className="adm-form-group">
            <label htmlFor="nombre-doc-plan" className="adm-label">
              Nombre del documento
            </label>
            <input
              id="nombre-doc-plan"
              type="text"
              className="input-base adm-login-input"
              placeholder="Ej. ICC-PEMSUM2026"
              value={nombreDocumento}
              onChange={(e) => setNombreDocumento(e.target.value)}
            />
          </div>

          <div className="adm-dropzone">
            <svg viewBox="0 0 24 24" fill="none" className="adm-upload-icon">
              <path
                d="M12 15V4M12 4L8 8M12 4L16 8"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 15.5V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
            <strong className="adm-dropzone-title">Arrastra el archivo</strong>
            <span className="adm-dropzone-hint">
              Archivo PDF · Máximo 5-10 MB
            </span>

            <label className="adm-btn-secondary adm-dropzone-btn">
              Seleccionar Archivo
              <input
                type="file"
                accept="application/pdf"
                onChange={handleSeleccionArchivo}
                className="adm-file-hidden"
              />
            </label>
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
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

