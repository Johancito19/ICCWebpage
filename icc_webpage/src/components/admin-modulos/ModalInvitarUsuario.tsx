"use client";

import { useState } from "react";
import type { UsuarioAdmin } from "@/data/admin-modulos";

type Props = {
  onCerrar: () => void;
  onInvitar: (usuario: UsuarioAdmin) => void;
};

export default function ModalInvitarUsuario({ onCerrar, onInvitar }: Props) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState<"Editor" | "Coordinador">("Editor");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim()) {
      alert("Completa todos los campos.");
      return;
    }

    if (!correo.includes("@")) {
      alert("Ingresa un correo válido.");
      return;
    }

    const nuevoUsuario: UsuarioAdmin = {
      id: Date.now(),
      nombre: nombre.trim(),
      correo: correo.trim(),
      rol,
      estado: "Pendiente",
      ultimoAcceso: "Sin acceso aún",
    };

    onInvitar(nuevoUsuario);
  };

  return (
    <div
      className="uax-modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onCerrar}
    >
      <div className="uax-modal" onClick={(e) => e.stopPropagation()}>
        <div className="uax-modal-heading">
          <div className="uax-modal-line" />
          <span>USUARIOS Y ACCESOS</span>
        </div>

        <h2>Invitar usuario</h2>

        <p className="uax-modal-description">
          Envía una invitación para colaborar en el panel ICC.
        </p>

        <form onSubmit={enviar}>
          <div className="uax-form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              placeholder="Nombre y apellidos"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="uax-form-group">
            <label>Correo institucional</label>
            <input
              type="email"
              placeholder="nombre@unicah.edu"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="uax-form-group">
            <label>Rol asignado</label>

            <div
              className={`uax-role-option ${
                rol === "Editor" ? "uax-role-selected" : ""
              }`}
              onClick={() => setRol("Editor")}
            >
              <div className="uax-role-radio">
                {rol === "Editor" && <span />}
              </div>

              <div>
                <strong>Editor</strong>
                <small>Edita contenido. Sin gestión de usuarios.</small>
              </div>
            </div>

            <div
              className={`uax-role-option ${
                rol === "Coordinador" ? "uax-role-selected" : ""
              }`}
              onClick={() => setRol("Coordinador")}
            >
              <div className="uax-role-radio">
                {rol === "Coordinador" && <span />}
              </div>

              <div>
                <strong>Coordinador</strong>
                <small>Control total del panel y sus accesos.</small>
              </div>
            </div>
          </div>

          <div className="uax-modal-info">
            Recibirá un enlace para configurar su contraseña y activar el
            acceso.
          </div>

          <div className="uax-modal-actions">
            <button
              type="button"
              className="uax-btn uax-btn-outline"
              onClick={onCerrar}
            >
              Cancelar
            </button>

            <button type="submit" className="uax-btn uax-btn-yellow">
              Enviar invitación
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}