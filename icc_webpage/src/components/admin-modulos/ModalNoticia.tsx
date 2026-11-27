"use client";

import { useEffect, useState } from "react";
import { NoticiaAdmin, EstadoContenidoAdmin } from "@/data/admin-modulos";

interface ModalNoticiaProps {
  abierto: boolean;
  noticiaEditar: NoticiaAdmin | null;
  onCerrar: () => void;
  onGuardar: (noticia: NoticiaAdmin) => void;
}

const ESTADO_INICIAL: NoticiaAdmin = {
  id: "",
  titulo: "",
  resumen: "",
  contenido: "",
  categoria: "",
  fechaPublicacion: "",
  fotografia: "",
  textoAlternativo: "",
  estado: "borrador",
  destacada: false,
};

function aFormatoInputDate(fecha: string): string {
  if (!fecha) return "";
  if (fecha.includes("/")) {
    const [dia, mes, anio] = fecha.split("/");
    if (dia && mes && anio) {
      return `${anio}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
    }
  }
  return fecha;
}

function aFormatoVisible(fecha: string): string {
  if (!fecha) return "";
  if (fecha.includes("-")) {
    const [anio, mes, dia] = fecha.split("-");
    if (anio && mes && dia) {
      return `${dia}/${mes}/${anio}`;
    }
  }
  return fecha;
}

export default function ModalNoticia({
  abierto,
  noticiaEditar,
  onCerrar,
  onGuardar,
}: ModalNoticiaProps) {
  const [formulario, setFormulario] = useState<NoticiaAdmin>(ESTADO_INICIAL);

  useEffect(() => {
    if (!abierto) return;
    if (noticiaEditar) {
      setFormulario({
        ...noticiaEditar,
        fechaPublicacion: aFormatoInputDate(noticiaEditar.fechaPublicacion),
      });
    } else {
      setFormulario(ESTADO_INICIAL);
    }
  }, [abierto, noticiaEditar]);

  if (!abierto) return null;

  const actualizarCampo = (
    campo: keyof NoticiaAdmin,
    valor: string | boolean
  ) => {
    setFormulario((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const guardarNoticia = (estado: EstadoContenidoAdmin) => {
    if (
      !formulario.titulo.trim() ||
      !formulario.resumen.trim() ||
      !formulario.contenido.trim() ||
      !formulario.categoria.trim() ||
      !formulario.fechaPublicacion
    ) {
      alert("Completa todos los campos obligatorios.");
      return;
    }

    const noticiaGuardada: NoticiaAdmin = {
      ...formulario,
      id: formulario.id || `noticia-${Date.now()}`,
      fechaPublicacion: aFormatoVisible(formulario.fechaPublicacion),
      estado,
    };

    onGuardar(noticiaGuardada);
    onCerrar();
  };

  const handleFoto = (archivo?: File) => {
    if (!archivo) return;
    actualizarCampo("fotografia", archivo.name);
  };

  return (
    <div
      className="am-modal-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={onCerrar}
    >
      <div
        className="am-modal am-modal-noticia"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="am-modal-header">
          <div>
            <span className="am-modal-kicker">ACTUALIDAD ICC</span>
            <h2>{noticiaEditar ? "Editar noticia" : "Nueva noticia"}</h2>
            <p>
              {noticiaEditar
                ? "Actualiza el contenido y la publicación de esta noticia."
                : "Comparte las novedades de la carrera en Home ICC · UNICAH."}
            </p>
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            guardarNoticia("publicado");
          }}
        >
          <div className="am-form-body">
            <label className="am-field">
              <span>Título de la noticia *</span>
              <input
                type="text"
                value={formulario.titulo}
                onChange={(e) => actualizarCampo("titulo", e.target.value)}
                placeholder="Escribe el título de la noticia"
                required
              />
            </label>

            <label className="am-field">
              <span>Resumen *</span>
              <textarea
                rows={3}
                value={formulario.resumen}
                onChange={(e) => actualizarCampo("resumen", e.target.value)}
                placeholder="Escribe una breve introducción para la tarjeta de Home."
                required
              />
            </label>

            <label className="am-field">
              <span>Contenido de la noticia *</span>
              <textarea
                rows={4}
                value={formulario.contenido}
                onChange={(e) => actualizarCampo("contenido", e.target.value)}
                placeholder="Escribe aquí el contenido completo de la noticia."
                required
              />
            </label>

            <div className="am-form-row">
              <label className="am-field">
                <span>Categoría *</span>
                <select
                  value={formulario.categoria}
                  onChange={(e) => actualizarCampo("categoria", e.target.value)}
                  required
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="Institucional">Institucional</option>
                  <option value="Académica">Académica</option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Eventos">Eventos</option>
                  <option value="Comunidad">Comunidad</option>
                </select>
              </label>

              <label className="am-field">
                <span>Fecha de publicación *</span>
                <input
                  type="date"
                  value={formulario.fechaPublicacion}
                  onChange={(e) =>
                    actualizarCampo("fechaPublicacion", e.target.value)
                  }
                  required
                />
              </label>
            </div>

            <div className="am-field">
              <span>Fotografía de portada *</span>

              <div className="am-upload-box">
                <div>
                  <strong>
                    {formulario.fotografia || "Ningún archivo seleccionado"}
                  </strong>
                  <small>JPG o PNG · Máximo 5 MB</small>
                </div>

                <label className="am-upload-button">
                  Subir fotografía
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={(e) => handleFoto(e.target.files?.[0])}
                  />
                </label>
              </div>
            </div>

            <label className="am-field">
              <span>Texto alternativo de la fotografía *</span>
              <input
                type="text"
                value={formulario.textoAlternativo}
                onChange={(e) =>
                  actualizarCampo("textoAlternativo", e.target.value)
                }
                placeholder="Describe brevemente la fotografía"
                required
              />
            </label>

            <div className="am-form-row">
              <label className="am-field">
                <span>Estado</span>
                <select
                  value={formulario.estado}
                  onChange={(e) =>
                    actualizarCampo(
                      "estado",
                      e.target.value as EstadoContenidoAdmin
                    )
                  }
                >
                  <option value="borrador">Borrador</option>
                  <option value="publicado">Publicado</option>
                </select>
              </label>

              <label className="am-field">
                <span>Destacar en Home</span>
                <select
                  value={formulario.destacada ? "si" : "no"}
                  onChange={(e) =>
                    actualizarCampo("destacada", e.target.value === "si")
                  }
                >
                  <option value="no">No</option>
                  <option value="si">Sí · Noticia destacada</option>
                </select>
              </label>
            </div>

            <p className="am-form-note">* Campos obligatorios</p>
          </div>

          <div className="am-modal-footer">
            <button
              type="button"
              className="am-btn-secondary"
              onClick={onCerrar}
            >
              Cancelar
            </button>

            <button
              type="button"
              className="am-btn-secondary"
              onClick={() => guardarNoticia("borrador")}
            >
              Guardar borrador
            </button>

            <button type="submit" className="am-btn-primary">
              {noticiaEditar ? "Guardar cambios" : "Publicar noticia"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}