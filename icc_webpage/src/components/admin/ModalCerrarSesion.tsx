"use client";

import { useRouter } from "next/navigation";

interface ModalCerrarSesionProps {
  abierto: boolean;
  onCerrar: () => void;
}

export default function ModalCerrarSesion({
  abierto,
  onCerrar,
}: ModalCerrarSesionProps) {
  const router = useRouter();

  if (!abierto) return null;

  const handleConfirmar = () => {
    onCerrar();
    router.push("/admin/login");
  };

  return (
    <div className="adm-modal-backdrop" role="dialog" aria-modal="true">
      <div className="tarjeta adm-modal-card">
        <span className="etiqueta-seccion adm-modal-tag">CONFIRMAR ACCIÓN</span>
        <h2 className="adm-modal-title">¿Desea realmente salir del panel?</h2>
        <p className="adm-modal-desc">
          Tu sesión actual de coordinador se cerrará y volverás a la pantalla de
          inicio de sesión.
        </p>

        <div className="adm-modal-actions">
          <button
            type="button"
            className="adm-btn-secondary adm-modal-btn"
            onClick={onCerrar}
          >
            No, continuar
          </button>
          <button
            type="button"
            className="adm-btn-danger adm-modal-btn"
            onClick={handleConfirmar}
          >
            Sí, cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
