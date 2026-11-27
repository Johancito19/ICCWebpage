"use client";

import "@/styles/admin-modulos.css";

import { useEffect, useMemo, useState } from "react";
import {
  USUARIOS_ADMIN_INICIALES,
  UsuarioAdmin,
} from "@/data/admin-modulos";
import ModalInvitarUsuario from "@/components/admin-modulos/ModalInvitarUsuario";
import ModalEditarAcceso from "@/components/admin-modulos/ModalEditarAcceso";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<UsuarioAdmin[]>(
    USUARIOS_ADMIN_INICIALES
  );

  const [busqueda, setBusqueda] = useState("");
  const [filtroRol, setFiltroRol] = useState("Todos");
  const [filtroEstado, setFiltroEstado] = useState("Todos");

  const [modalInvitar, setModalInvitar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] =
    useState<UsuarioAdmin | null>(null);

  useEffect(() => {
    const handleTopbarClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".adm-topbar-btn-primary")) {
        e.preventDefault();
        setModalInvitar(true);
      }
    };

    const handleTopbarSearch = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.classList.contains("adm-search-input")) {
        setBusqueda(target.value);
      }
    };

    document.addEventListener("click", handleTopbarClick);
    document.addEventListener("input", handleTopbarSearch);

    return () => {
      document.removeEventListener("click", handleTopbarClick);
      document.removeEventListener("input", handleTopbarSearch);
    };
  }, []);

  const usuariosFiltrados = useMemo(() => {
    return usuarios.filter((usuario) => {
      const coincideBusqueda =
        usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        usuario.correo.toLowerCase().includes(busqueda.toLowerCase());

      const coincideRol = filtroRol === "Todos" || usuario.rol === filtroRol;

      const coincideEstado =
        filtroEstado === "Todos" || usuario.estado === filtroEstado;

      return coincideBusqueda && coincideRol && coincideEstado;
    });
  }, [usuarios, busqueda, filtroRol, filtroEstado]);

  const activos = usuarios.filter((u) => u.estado === "Activo").length;
  const pendientes = usuarios.filter((u) => u.estado === "Pendiente").length;
  const suspendidos = usuarios.filter((u) => u.estado === "Suspendido").length;

  const abrirEditar = (usuario: UsuarioAdmin) => {
    setUsuarioSeleccionado(usuario);
    setModalEditar(true);
  };

  const guardarUsuario = (nuevoUsuario: UsuarioAdmin) => {
    setUsuarios((prev) =>
      prev.map((usuario) =>
        usuario.id === nuevoUsuario.id ? nuevoUsuario : usuario
      )
    );

    setModalEditar(false);
    setUsuarioSeleccionado(null);
  };

  const suspenderUsuario = (id: number) => {
    setUsuarios((prev) =>
      prev.map((usuario) =>
        usuario.id === id ? { ...usuario, estado: "Suspendido" } : usuario
      )
    );

    setModalEditar(false);
    setUsuarioSeleccionado(null);
  };

  const reenviarInvitacion = (usuario: UsuarioAdmin) => {
    alert(`Se ha reenviado la invitación a ${usuario.correo}`);
  };

  const agregarUsuario = (nuevoUsuario: UsuarioAdmin) => {
    setUsuarios((prev) => [...prev, nuevoUsuario]);
    setModalInvitar(false);
  };

  return (
    <div className="uax-page">
      <div className="uax-intro">
        <div className="uax-intro-line" />

        <div>
          <span>ADMINISTRACIÓN DEL EQUIPO</span>
          <h2>Gestiona quién puede acceder al panel</h2>
          <p>
            Invita al equipo y asigna permisos según sus responsabilidades.
          </p>
        </div>
      </div>

      <div className="uax-stats-grid">
        <div className="uax-stat-card">
          <div className="uax-stat-line" />
          <h3>{usuarios.length}</h3>
          <p>Usuarios del panel</p>
          <span className="uax-stat-detail">
            {activos} activos · {pendientes} pendientes · {suspendidos}{" "}
            suspendidos
          </span>
        </div>

        <div className="uax-stat-card">
          <div className="uax-stat-line" />
          <h3>2</h3>
          <p>Roles disponibles</p>
          <span className="uax-stat-detail">Coordinador y Editor</span>
        </div>

        <div className="uax-stat-card">
          <div className="uax-stat-line" />
          <h3>{pendientes}</h3>
          <p>Invitación pendiente</p>
          <span className="uax-stat-detail">
            El acceso se activa al aceptar
          </span>
        </div>
      </div>

      <div className="uax-table-card">
        <div className="uax-table-header">
          <h3>Usuarios del panel</h3>

          <div className="uax-filters">
            <button
              type="button"
              className="uax-filter-pill"
              onClick={() => {
                setFiltroRol("Todos");
                setFiltroEstado("Todos");
              }}
            >
              Todos ({usuarios.length})
            </button>

            <select
              value={filtroRol}
              onChange={(e) => setFiltroRol(e.target.value)}
              className="uax-filter-select"
            >
              <option value="Todos">Rol: Todos</option>
              <option value="Coordinador">Coordinador</option>
              <option value="Editor">Editor</option>
            </select>

            <select
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
              className="uax-filter-select"
            >
              <option value="Todos">Estado: Todos</option>
              <option value="Activo">Activo</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Suspendido">Suspendido</option>
            </select>
          </div>
        </div>

        <div className="uax-table-scroll">
          <table className="uax-table">
            <thead>
              <tr>
                <th>USUARIO / CORREO</th>
                <th>ROL</th>
                <th>ESTADO</th>
                <th>ÚLTIMO ACCESO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>

            <tbody>
              {usuariosFiltrados.map((usuario) => (
                <tr key={usuario.id}>
                  <td>
                    <div className="uax-user-name">
                      {usuario.nombre}
                      {usuario.id === 1 && (
                        <span className="uax-you-tag">Tú</span>
                      )}
                    </div>

                    <div className="uax-user-email">{usuario.correo}</div>
                  </td>

                  <td>{usuario.rol}</td>

                  <td>
                    <span
                      className={`uax-status uax-status-${usuario.estado.toLowerCase()}`}
                    >
                      <span className="uax-status-dot" />
                      {usuario.estado}
                    </span>
                  </td>

                  <td className="uax-last-access">{usuario.ultimoAcceso}</td>

                  <td>
                    {usuario.id === 1 ? (
                      <span className="uax-own-account">Tu cuenta</span>
                    ) : usuario.estado === "Pendiente" ? (
                      <button
                        type="button"
                        className="uax-action-btn"
                        onClick={() => reenviarInvitacion(usuario)}
                      >
                        Reenviar
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="uax-action-btn"
                        onClick={() => abrirEditar(usuario)}
                      >
                        Editar acceso
                      </button>
                    )}
                  </td>
                </tr>
              ))}

              {usuariosFiltrados.length === 0 && (
                <tr>
                  <td colSpan={5} className="uax-empty">
                    No se encontraron usuarios.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="uax-table-footer">
          <span>
            Mostrando {usuariosFiltrados.length} de {usuarios.length} usuarios
          </span>

          <span>Solo el Coordinador puede administrar accesos.</span>
        </div>
      </div>

      <div className="uax-roles-grid">
        <div className="uax-role-card">
          <span className="uax-role-label">ROLES Y PERMISOS</span>
          <h3>Coordinador</h3>
          <h4>Control total del panel</h4>
          <p>
            Publica contenido y administra usuarios, roles e invitaciones.
          </p>
        </div>

        <div className="uax-role-card">
          <span className="uax-role-label">ROLES Y PERMISOS</span>
          <h3>Editor</h3>
          <h4>Gestión de contenido</h4>
          <p>
            Edita el sitio, noticias, eventos, áreas y aliados. No gestiona
            accesos.
          </p>
        </div>
      </div>

      {modalInvitar && (
        <ModalInvitarUsuario
          onCerrar={() => setModalInvitar(false)}
          onInvitar={agregarUsuario}
        />
      )}

      {modalEditar && usuarioSeleccionado && (
        <ModalEditarAcceso
          usuario={usuarioSeleccionado}
          onCerrar={() => {
            setModalEditar(false);
            setUsuarioSeleccionado(null);
          }}
          onGuardar={guardarUsuario}
          onSuspender={suspenderUsuario}
        />
      )}
    </div>
  );
}