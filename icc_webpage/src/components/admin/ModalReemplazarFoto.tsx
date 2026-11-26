"use client";

import { useState } from "react";
import { DatosFotografiaPortada } from "@/data/admin-base";

interface ModalReemplazarFotoProps {
  abierto: boolean;
  fotoActual: DatosFotografiaPortada;
  onCerrar: () => void;
  onGuardar: (nuevaFoto: DatosFotografiaPortada) => void;
}

export default function ModalReemplazarFoto({
  abierto,
  fotoActual,
  onCerrar,
  onGuardar,
}: ModalReemplazarFotoProps) {
  const [nombreArchivo, setNombreArchivo] = useState(fotoActual.nombreArchivo);
  const [textoAlternativo, setTextoAlternativo] = useState("");

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
      nombreArchivo,
      dimensiones: fotoActual.dimensiones,
      textoAlternativo: textoAlternativo.trim() || fotoActual.textoAlternativo,
    });
    onCerrar();
  };

  return (
    <div className="adm-modal-backdrop" role="dialog" aria-modal="true">
      <div className="tarjeta adm-modal-photo-card">
        <div className="adm-modal-photo-header">
          <div>
            <span className="adm-modal-kicker">IMAGEN DE PORTADA</span>
            <h2 className="adm-modal-photo-title">Reemplazar fotografía</h2>
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
          Actualiza la imagen principal de Home ICC · UNICAH.
        </p>

        <form onSubmit={handleGuardar} className="adm-modal-photo-form">
          {/* Bloque fotografía actual */}
          <div className="adm-current-photo-row">
            <div className="adm-current-photo-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" className="adm-photo-svg">
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="16"
                  rx="2.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="9" cy="9.5" r="1.5" fill="currentColor" />
                <path
                  d="M4 17.5L9.2 12.6L13 16L16.2 13.2L20 17.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="adm-current-photo-meta">
              <span className="adm-current-photo-label">FOTOGRAFÍA ACTUAL</span>
              <span className="adm-current-photo-file">
                {nombreArchivo} · {fotoActual.dimensiones}
              </span>
            </div>
          </div>

          {/* Zona de carga */}
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
            <strong className="adm-dropzone-title">
              Arrastra tu nueva fotografía aquí
            </strong>
            <span className="adm-dropzone-hint">
              JPG o PNG · Máximo 5 MB
              <br />
              Recomendado: 1440 × 800 px
            </span>

            <label className="adm-btn-secondary adm-dropzone-btn">
              Seleccionar fotografía
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleSeleccionArchivo}
                className="adm-file-hidden"
              />
            </label>
          </div>

          {/* Texto alternativo */}
          <div className="adm-form-group">
            <label htmlFor="texto-alt-foto" className="adm-label">
              Texto alternativo *
            </label>
            <input
              id="texto-alt-foto"
              type="text"
              className="input-base adm-login-input"
              placeholder="Describe lo que aparece en la fotografía"
              value={textoAlternativo}
              onChange={(e) => setTextoAlternativo(e.target.value)}
            />
          </div>

          {/* Nota informativa */}
          <div className="adm-modal-info-note">
            La fotografía actual se conservará hasta que guardes el reemplazo.
          </div>

          {/* Acciones inferiores */}
          <div className="adm-modal-photo-footer">
            <button
              type="button"
              className="adm-btn-secondary adm-modal-btn"
              onClick={onCerrar}
            >
              Cancelar
            </button>
            <button type="submit" className="btn-amarillo adm-modal-btn">
              Guardar fotografía
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
