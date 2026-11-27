"use client";

import { useEffect, useState } from "react";

interface ModalReemplazarFotoProps {
  abierto: boolean;
  nombreNoticia: string;
  fotografiaActual: string;
  onCerrar: () => void;
  onGuardar: (nombreArchivo: string) => void;
}

export default function ModalReemplazarFoto({
  abierto,
  nombreNoticia,
  fotografiaActual,
  onCerrar,
  onGuardar,
}: ModalReemplazarFotoProps) {
  const [archivo, setArchivo] = useState("");

  useEffect(() => {
    if (abierto) {
      setArchivo("");
    }
  }, [abierto]);

  if (!abierto) return null;

  const guardar = () => {
    if (!archivo) {
      alert("Selecciona una fotografía.");
      return;
    }

    onGuardar(archivo);
    onCerrar();
  };

  return (
    <div className="am-modal-backdrop" role="dialog" aria-modal="true">
      <div className="am-modal am-modal-foto">
        <div className="am-modal-header">
          <div>
            <span className="am-modal-kicker">ACTUALIDAD ICC</span>
            <h2>Reemplazar fotografía</h2>
            <p>Cambia la fotografía de portada de la noticia seleccionada.</p>
          </div>

          <button
            type="button"
            className="am-modal-close"
            onClick={onCerrar}
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="am-form-body">
          <div className="am-current-photo">
            <strong>Noticia seleccionada</strong>
            <span>{nombreNoticia}</span>
          </div>

          <div className="am-upload-box am-upload-large">
            <div className="am-upload-icon">↑</div>
            <strong>Arrastra la fotografía aquí</strong>
            <small>JPG o PNG · Máximo 5 MB</small>

            <label className="am-upload-button">
              Seleccionar fotografía
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={(e) => setArchivo(e.target.files?.[0]?.name || "")}
              />
            </label>
          </div>

          <div className="am-info-box">
            <strong>Fotografía actual</strong>
            <small>
              {fotografiaActual || "No hay una fotografía registrada"}
            </small>
          </div>

          {archivo && (
            <div className="am-selected-file">
              <strong>Nuevo archivo seleccionado:</strong>
              <span>{archivo}</span>
            </div>
          )}
        </div>

        <div className="am-modal-footer">
          <button
            type="button"
            className="am-btn-secondary"
            onClick={onCerrar}
          >
            Cancelar
          </button>

          <button type="button" className="am-btn-primary" onClick={guardar}>
            Guardar fotografía
          </button>
        </div>
      </div>
    </div>
  );
}