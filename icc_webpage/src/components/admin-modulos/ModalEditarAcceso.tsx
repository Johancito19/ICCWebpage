"use client";

import { useEffect, useState } from "react";
import type { UsuarioAdmin } from "@/data/admin-modulos";

type Props = {
  usuario: UsuarioAdmin;
  onCerrar: () => void;
  onGuardar: (usuario: UsuarioAdmin) => void;
  onSuspender: (id: number) => void;
};

export default function ModalEditarAcceso({
  usuario,
  onCerrar,
  onGuardar,
  onSuspender,
}: Props) {
  const [rol, setRol] = useState<"Editor" | "Coordinador">(usuario.rol);

  useEffect(() => {
    setRol(usuario.rol);
  }, [usuario]);

  const guardar = (e: React.FormEvent) => {
    e.preventDefault();
    onGuardar({
      ...usuario,
      rol,
    });
  };

  const suspender = () => {
    const confirmar = window.confirm(
      `¿Estás segura de suspender el acceso de ${usuario.nombre}?`
    );

    if (confirmar) {
      onSuspender(usuario.id);
    }
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

        <h2>Editar acceso de usuario</h2>

        <p className="uax-modal-description">
          Actualiza el rol o suspende el acceso al panel.
        </p>

        <form onSubmit={guardar}>
          <div className="uax-form-group">
            <label>Nombre completo</label>
            <input type="text" value={usuario.nombre} readOnly />
          </div>

          <div className="uax-form-group">
            <label>Correo institucional</label>
            <input type="email" value={usuario.correo} readOnly />
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

          <div className="uax-current-status">
            Estado actual: <strong>{usuario.estado}</strong>. Suspender no
            elimina su historial.
          </div>

          <div className="uax-modal-actions uax-edit-actions">
            <button
              type="button"
              className="uax-btn uax-btn-danger"
              onClick={suspender}
            >
              Suspender acceso
            </button>

            <button type="submit" className="uax-btn uax-btn-yellow">
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}