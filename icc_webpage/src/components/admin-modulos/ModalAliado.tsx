"use client";

import { useState } from "react";
import { AliadoAdmin } from "@/data/admin-modulos";

interface ModalAliadoProps {
  abierto: boolean;
  posicionDisponible: number;
  onCerrar: () => void;
  onGuardar: (aliado: AliadoAdmin) => void;
}

export default function ModalAliado({
  abierto,
  posicionDisponible,
  onCerrar,
  onGuardar,
}: ModalAliadoProps) {
  const [nombre, setNombre] = useState("");
  const [logo, setLogo] = useState("");

  if (!abierto) return null;

  const handleGuardar = () => {
    if (!nombre.trim()) {
      alert("Ingresa el nombre del aliado.");
      return;
    }

    const aliado: AliadoAdmin = {
      id: `aliado-${Date.now()}`,
      nombre,
      logo,
      posicion: posicionDisponible,
      estado: "Publicado",
    };

    onGuardar(aliado);
    setNombre("");
    setLogo("");
    onCerrar();
  };

  return (
    <div className="admm-modal-backdrop" role="dialog" aria-modal="true">
      <div className="admm-modal-card admm-modal-aliado">
        <header className="admm-modal-header">
          <div>
            <span className="admm-modal-tag">VINCULACIÓN EMPRESARIAL</span>
            <h2>Subir logo aliado</h2>
            <p>Agrega un aliado a la sección de vinculación en Home.</p>
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
            <label>Nombre del aliado *</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Nombre de la organización"
            />
          </div>

          <div className="admm-logo-upload">
            <div className="admm-logo-upload-icon">↑</div>
            <strong>Arrastra el logo del aliado</strong>
            <small>PNG con fondo transparente o SVG · Máximo 2 MB</small>

            <label className="admm-upload-button">
              Seleccionar logo
              <input
                type="file"
                accept="image/png,image/svg+xml"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setLogo(file.name);
                }}
              />
            </label>

            {logo && (
              <span className="admm-selected-file">
                Archivo seleccionado: {logo}
              </span>
            )}
          </div>

          <div className="admm-form-group">
            <label>Posición en la galería</label>
            <input
              type="text"
              value={`Slot ${posicionDisponible} · Disponible`}
              disabled
            />
          </div>

          <div className="admm-form-note">
            El logo se mostrará completo, sin recortes, junto al nombre del
            aliado.
          </div>
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
            Guardar aliado
          </button>
        </footer>
      </div>
    </div>
  );
}