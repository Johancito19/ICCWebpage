"use client";

import "@/styles/admin-modulos.css";

import { useState } from "react";
import {
  NOTICIAS_ADMIN,
  EVENTOS_ADMIN,
  NoticiaAdmin,
  EventoAdmin,
} from "@/data/admin-modulos";
import ModalNoticia from "@/components/admin-modulos/ModalNoticia";
import ModalEvento from "@/components/admin-modulos/ModalEvento";
import ModalReemplazarFoto from "@/components/admin-modulos/ModalReemplazarFoto";
import "@/styles/admin-modulos.css";

type FiltroNoticias = "todas" | "destacadas" | "eventos";

export default function AdminNoticiasPage() {
  const [noticias, setNoticias] = useState<NoticiaAdmin[]>(NOTICIAS_ADMIN);
  const [eventos, setEventos] = useState<EventoAdmin[]>(EVENTOS_ADMIN);
  const [filtro, setFiltro] = useState<FiltroNoticias>("todas");
  const [modalNoticiaAbierto, setModalNoticiaAbierto] = useState(false);
  const [modalEventoAbierto, setModalEventoAbierto] = useState(false);
  const [modalFotoAbierto, setModalFotoAbierto] = useState(false);
  const [noticiaEditar, setNoticiaEditar] = useState<NoticiaAdmin | null>(null);
  const [eventoEditar, setEventoEditar] = useState<EventoAdmin | null>(null);
  const [noticiaFoto, setNoticiaFoto] = useState<NoticiaAdmin | null>(null);

  const abrirEditarNoticia = (noticia: NoticiaAdmin) => {
    setNoticiaEditar(noticia);
    setModalNoticiaAbierto(true);
  };

  const guardarNoticia = (noticiaGuardada: NoticiaAdmin) => {
    setNoticias((prev) => {
      const existe = prev.some((noticia) => noticia.id === noticiaGuardada.id);

      if (existe) {
        return prev.map((noticia) =>
          noticia.id === noticiaGuardada.id ? noticiaGuardada : noticia
        );
      }

      return [noticiaGuardada, ...prev];
    });
  };

  const abrirReemplazarFoto = (noticia: NoticiaAdmin) => {
    setNoticiaFoto(noticia);
    setModalFotoAbierto(true);
  };

  const guardarFoto = (nombreArchivo: string) => {
    if (!noticiaFoto) return;

    setNoticias((prev) =>
      prev.map((noticia) =>
        noticia.id === noticiaFoto.id
          ? {
              ...noticia,
              fotografia: nombreArchivo,
            }
          : noticia
      )
    );
  };

  const abrirNuevoEvento = () => {
    setEventoEditar(null);
    setModalEventoAbierto(true);
  };

  const abrirEditarEvento = (evento: EventoAdmin) => {
    setEventoEditar(evento);
    setModalEventoAbierto(true);
  };

  const guardarEvento = (eventoGuardado: EventoAdmin) => {
    setEventos((prev) => {
      const existe = prev.some((evento) => evento.id === eventoGuardado.id);

      if (existe) {
        return prev.map((evento) =>
          evento.id === eventoGuardado.id ? eventoGuardado : evento
        );
      }

      return [...prev, eventoGuardado];
    });
  };

  const noticiasFiltradas = noticias.filter((noticia) => {
    if (filtro === "destacadas") return noticia.destacada;
    if (filtro === "eventos") return false;
    return true;
  });

  const eventosFiltrados = filtro === "eventos" ? eventos : [];
  const publicacionesVisibles = filtro !== "eventos" ? noticiasFiltradas : [];

  return (
    <>
      <main className="am-noticias-page">
        <div className="am-toolbar">
          <div className="am-tabs">
            <button
              type="button"
              className={`am-tab ${
                filtro === "todas" ? "am-tab-active" : ""
              }`}
              onClick={() => setFiltro("todas")}
            >
              Todas las noticias
              <span>{noticias.length}</span>
            </button>

            <button
              type="button"
              className={`am-tab ${
                filtro === "destacadas" ? "am-tab-active" : ""
              }`}
              onClick={() => setFiltro("destacadas")}
            >
              Noticia destacada
            </button>

            <button
              type="button"
              className={`am-tab ${
                filtro === "eventos" ? "am-tab-active" : ""
              }`}
              onClick={() => setFiltro("eventos")}
            >
              Próximos eventos
              <span>{eventos.length}</span>
            </button>
          </div>

          <button
            type="button"
            className="am-btn-secondary"
            onClick={abrirNuevoEvento}
          >
            + Agendar evento
          </button>
        </div>

        <div className="am-content-grid">
          <section className="am-panel am-publicaciones-panel">
            <div className="am-panel-header">
              <div>
                <span className="am-section-label">ACTUALIDAD ICC</span>

                <h2>
                  {filtro === "eventos"
                    ? "Eventos programados"
                    : filtro === "destacadas"
                    ? "Noticias destacadas en Home"
                    : "Publicaciones visibles en Home ICC"}
                </h2>
              </div>

              <span className="am-order-label">Orden: Destacada primero</span>
            </div>

            {publicacionesVisibles.length > 0 && (
              <div className="am-publicaciones-list">
                {publicacionesVisibles.map((noticia) => (
                  <article key={noticia.id} className="am-publicacion-row">
                    <div className="am-publicacion-thumb">
                      <span>{noticia.fotografia ? "IMG" : "ICC"}</span>
                    </div>

                    <div className="am-publicacion-info">
                      <h3>{noticia.titulo}</h3>

                      <p>{noticia.resumen}</p>

                      <span className="am-publicacion-categoria">
                        {noticia.categoria}
                      </span>
                    </div>

                    <div className="am-publicacion-meta">
                      <span className="am-date">
                        {noticia.fechaPublicacion}
                      </span>

                      <span
                        className={`am-status ${
                          noticia.estado === "publicado"
                            ? "am-status-published"
                            : "am-status-draft"
                        }`}
                      >
                        ●{" "}
                        {noticia.destacada && noticia.estado === "publicado"
                          ? "Destacada"
                          : noticia.estado === "publicado"
                          ? "Publicado"
                          : "Borrador"}
                      </span>
                    </div>

                    <div className="am-publicacion-actions">
                      <button
                        type="button"
                        className="am-btn-secondary am-btn-small"
                        onClick={() => abrirEditarNoticia(noticia)}
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        className="am-btn-text"
                        onClick={() => abrirReemplazarFoto(noticia)}
                      >
                        Foto
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {eventosFiltrados.length > 0 && (
              <div className="am-publicaciones-list">
                {eventosFiltrados.map((evento) => (
                  <article
                    key={evento.id}
                    className="am-publicacion-row am-evento-row"
                  >
                    <div className="am-evento-date-box">
                      <span>{evento.fecha}</span>
                      <strong>{evento.hora}</strong>
                    </div>

                    <div className="am-publicacion-info">
                      <h3>{evento.nombre}</h3>

                      <p>
                        {evento.tipo} · {evento.lugar}
                      </p>

                      <span className="am-publicacion-categoria">
                        {evento.modalidad}
                      </span>
                    </div>

                    <div className="am-publicacion-meta">
                      <span
                        className={`am-status ${
                          evento.estado === "publicado"
                            ? "am-status-published"
                            : "am-status-draft"
                        }`}
                      >
                        ●{" "}
                        {evento.estado === "publicado"
                          ? "Publicado"
                          : "Borrador"}
                      </span>
                    </div>

                    <div className="am-publicacion-actions">
                      <button
                        type="button"
                        className="am-btn-secondary am-btn-small"
                        onClick={() => abrirEditarEvento(evento)}
                      >
                        Editar
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {publicacionesVisibles.length === 0 &&
              eventosFiltrados.length === 0 && (
                <div className="am-empty-state">
                  <h3>No hay contenido disponible</h3>

                  <p>Agrega una noticia o evento para comenzar.</p>
                </div>
              )}
          </section>

          <aside className="am-panel am-agenda-panel">
            <div className="am-panel-header">
              <div>
                <span className="am-section-label">AGENDA ACADÉMICA</span>

                <h2>Próximos eventos en Home</h2>
              </div>
            </div>

            <p className="am-agenda-description">
              Se muestran los 3 eventos más próximos en la columna derecha de
              Actualidad ICC.
            </p>

            <div className="am-agenda-list">
              {eventos.slice(0, 3).map((evento) => (
                <article key={evento.id} className="am-agenda-card">
                  <div className="am-agenda-card-top">
                    <span>{evento.fecha}</span>

                    <span
                      className={`am-status ${
                        evento.estado === "publicado"
                          ? "am-status-published"
                          : "am-status-draft"
                      }`}
                    >
                      ● {evento.estado === "publicado" ? "Visible" : "Borrador"}
                    </span>
                  </div>

                  <h3>{evento.nombre}</h3>

                  <p>
                    {evento.tipo} · {evento.lugar}
                  </p>

                  <button
                    type="button"
                    className="am-agenda-edit"
                    onClick={() => abrirEditarEvento(evento)}
                  >
                    Editar evento
                  </button>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="am-btn-primary am-btn-full"
              onClick={abrirNuevoEvento}
            >
              + Agregar nuevo evento
            </button>
          </aside>
        </div>
      </main>

      <ModalNoticia
        abierto={modalNoticiaAbierto}
        noticiaEditar={noticiaEditar}
        onCerrar={() => setModalNoticiaAbierto(false)}
        onGuardar={guardarNoticia}
      />

      <ModalEvento
        abierto={modalEventoAbierto}
        eventoEditar={eventoEditar}
        onCerrar={() => setModalEventoAbierto(false)}
        onGuardar={guardarEvento}
      />

      <ModalReemplazarFoto
        abierto={modalFotoAbierto}
        nombreNoticia={noticiaFoto?.titulo || ""}
        fotografiaActual={noticiaFoto?.fotografia || ""}
        onCerrar={() => setModalFotoAbierto(false)}
        onGuardar={guardarFoto}
      />
    </>
  );
}