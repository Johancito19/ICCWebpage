"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import ModalCerrarSesion from "@/components/admin/ModalCerrarSesion";
import "@/styles/admin-base.css";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalSalirAbierto, setModalSalirAbierto] = useState(false);

  return (
    <div className="adm-shell">
      <Sidebar onAbrirModalSalir={() => setModalSalirAbierto(true)} />

      <div className="adm-main">
        <Topbar />
        <div className="adm-content">{children}</div>
      </div>

      <ModalCerrarSesion
        abierto={modalSalirAbierto}
        onCerrar={() => setModalSalirAbierto(false)}
      />
    </div>
  );
}
