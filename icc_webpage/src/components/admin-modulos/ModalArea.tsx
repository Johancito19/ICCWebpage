"use client";

import { useState, useEffect } from "react";
import {
  AreaAdmin,
  EstadoModulo,
  TamanoTarjetaArea,
} from "@/data/admin-modulos";

interface ModalAreaProps {
  abierto: boolean;
  areaEditar: AreaAdmin | null;
  onCerrar: () => void;
  onGuardar: (area: AreaAdmin) => void;
}

export default function ModalArea({
  abierto,
  areaEditar,
  onCerrar,
  onGuardar,
}: ModalAreaProps) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tamano, setTamano] = useState<TamanoTarjetaArea>("Secundaria");
  const [estado, setEstado] = useState<EstadoModulo>("Borrador");
  const [fotografia, setFotografia] = useState("");
  const [textoAlternativo, setTextoAlternativo] = useState("");

  useEffect(() => {
    if (!abierto) return;

    if (areaEditar) {
      setNombre(areaEditar.nombre);
      setDescripcion(areaEditar.descripcion);
      setTamano(areaEditar.tamano);
      setEstado(areaEditar.estado);
      setFotografia(areaEditar.fotografia);
      setTextoAlternativo(areaEditar.textoAlternativo);
    } else {
      setNombre("");
      setDescripcion("");
      setTamano("Secundaria");
      setEstado("Borrador");
      setFotografia("");
      setTextoAlternativo("");
    }
  }, [areaEditar, abierto]);

  if (!abierto) return null;

  const handleGuardar = () => {
    if (!nombre.trim() || !descripcion.trim() || !textoAlternativo.trim()) {
      alert("Completa los campos obligatorios.");
      return;
    }

    const areaGuardada: AreaAdmin = {
      id: areaEditar?.id ?? `area-${Date.now()}`,
      nombre,
      descripcion,
      tamano,
      estado,
      fotografia: fotografia || "Fotografía del área",
      textoAlternativo,
    };

    onGuardar(areaGuardada);
    onCerrar();
  };

  return (
    <div className="admm-modal-backdrop" role="dialog" aria-modal="true">
      <div className="admm-modal-card admm-modal-area">
        <header className="admm-modal-header">
          <div>
            <span className="admm-modal-tag">ÁREAS Y LABORATORIOS</span>
            <h2>{areaEditar ? "Editar área" : "Agregar área"}</h2>
            <p>
              {areaEditar
                ? "Actualiza los datos y la visibilidad de esta tarjeta."
                : "Crea una tarjeta para la galería Explora la Computación."}
            </p>
          </div>

          <button
            type="button"
            className="admm-modal-close"
            onClick={onCerrar}
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </header>

        <div className="admm-form">
          <div className="admm-form-group">
            <label>Nombre del área *</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Nombre del área"
            />
          </div>

          <div className="admm-form-group">
            <label>Descripción *</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Describe el enfoque del área para la galería de Home."
              rows={3}
            />
          </div>

          <div className="admm-form-row">
            <div className="admm-form-group">
              <label>Tamaño de tarjeta</label>
              <select
                value={tamano}
                onChange={(e) =>
                  setTamano(e.target.value as TamanoTarjetaArea)
                }
              >
                <option value="Secundaria">Secundaria</option>
                <option value="Principal (Col 2x)">Principal (Col 2x)</option>
              </select>
            </div>

            <div className="admm-form-group">
              <label>Estado</label>
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value as EstadoModulo)}
              >
                <option value="Borrador">Borrador</option>
                <option value="Publicado">Publicado</option>
              </select>
            </div>
          </div>

          <div className="admm-form-group">
            <label>Fotografía del área *</label>
            <div className="admm-upload-box">
              <div>
                <strong>{fotografia || "Ningún archivo seleccionado"}</strong>
                <small>JPG o PNG · Máximo 5 MB</small>
              </div>

              <label className="admm-upload-button">
                {areaEditar ? "Cambiar fotografía" : "Subir fotografía"}
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setFotografia(file.name);
                  }}
                />
              </label>
            </div>
          </div>

          <div className="admm-form-group">
            <label>Texto alternativo *</label>
            <input
              type="text"
              value={textoAlternativo}
              onChange={(e) => setTextoAlternativo(e.target.value)}
              placeholder="Describe la fotografía del área"
            />
          </div>

          <div className="admm-form-note">
            {areaEditar
              ? "Los cambios se aplicarán a la tarjeta publicada en Home."
              : "La tarjeta se mostrará en Explora la Computación al publicarla."}
          </div>

          <small className="admm-required-note">* Campos obligatorios</small>
        </div>

        <footer className="admm-modal-footer">
          <button
            type="button"
            className="admm-btn-secondary"
            onClick={onCerrar}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="admm-btn-primary"
            onClick={handleGuardar}
          >
            {areaEditar ? "Guardar cambios" : "Agregar área"}
          </button>
        </footer>
      </div>
    </div>
  );
}