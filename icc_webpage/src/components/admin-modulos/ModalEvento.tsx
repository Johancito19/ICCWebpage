"use client";

import { useEffect, useState } from "react";
import { EventoAdmin, EstadoContenidoAdmin } from "@/data/admin-modulos";

interface ModalEventoProps {
  abierto: boolean;
  eventoEditar: EventoAdmin | null;
  onCerrar: () => void;
  onGuardar: (evento: EventoAdmin) => void;
}

const ESTADO_INICIAL: EventoAdmin = {
  id: "",
  nombre: "",
  tipo: "",
  modalidad: "Presencial",
  fecha: "",
  hora: "",
  lugar: "",
  descripcion: "",
  enlaceInscripcion: "",
  estado: "borrador",
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

export default function ModalEvento({
  abierto,
  eventoEditar,
  onCerrar,
  onGuardar,
}: ModalEventoProps) {
  const [formulario, setFormulario] = useState<EventoAdmin>(ESTADO_INICIAL);

  useEffect(() => {
    if (!abierto) return;
    if (eventoEditar) {
      setFormulario({
        ...eventoEditar,
        fecha: aFormatoInputDate(eventoEditar.fecha),
      });
    } else {
      setFormulario(ESTADO_INICIAL);
    }
  }, [abierto, eventoEditar]);

  if (!abierto) return null;

  const actualizarCampo = (campo: keyof EventoAdmin, valor: string) => {
    setFormulario((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const guardarEvento = (estado: EstadoContenidoAdmin) => {
    if (
      !formulario.nombre.trim() ||
      !formulario.tipo.trim() ||
      !formulario.modalidad.trim() ||
      !formulario.fecha ||
      !formulario.hora ||
      !formulario.lugar.trim() ||
      !formulario.descripcion.trim()
    ) {
      alert("Completa todos los campos obligatorios.");
      return;
    }

    const eventoGuardado: EventoAdmin = {
      ...formulario,
      id: formulario.id || `evento-${Date.now()}`,
      fecha: aFormatoVisible(formulario.fecha),
      estado,
    };

    onGuardar(eventoGuardado);
    onCerrar();
  };

  return (
    <div
      className="am-modal-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={onCerrar}
    >
      <div
        className="am-modal am-modal-evento"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="am-modal-header">
          <div>
            <span className="am-modal-kicker">AGENDA ACADÉMICA</span>
            <h2>{eventoEditar ? "Editar evento" : "Agregar nuevo evento"}</h2>
            <p>
              {eventoEditar
                ? "Actualiza los detalles del evento."
                : "Crea un evento para la agenda de Home ICC · UNICAH."}
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
            guardarEvento("publicado");
          }}
        >
          <div className="am-form-body">
            <label className="am-field">
              <span>Nombre del evento *</span>
              <input
                type="text"
                value={formulario.nombre}
                onChange={(e) => actualizarCampo("nombre", e.target.value)}
                placeholder="Escribe el nombre del evento"
                required
              />
            </label>

            <div className="am-form-row">
              <label className="am-field">
                <span>Tipo de evento *</span>
                <select
                  value={formulario.tipo}
                  onChange={(e) => actualizarCampo("tipo", e.target.value)}
                  required
                >
                  <option value="">Seleccionar tipo</option>
                  <option value="Taller">Taller</option>
                  <option value="Charla">Charla</option>
                  <option value="Conversatorio">Conversatorio</option>
                  <option value="Encuentro">Encuentro</option>
                  <option value="Conferencia">Conferencia</option>
                  <option value="Hackathon">Hackathon</option>
                </select>
              </label>

              <label className="am-field">
                <span>Modalidad *</span>
                <select
                  value={formulario.modalidad}
                  onChange={(e) => actualizarCampo("modalidad", e.target.value)}
                  required
                >
                  <option value="Presencial">Presencial</option>
                  <option value="Virtual">Virtual</option>
                  <option value="Híbrida">Híbrida</option>
                </select>
              </label>
            </div>

            <div className="am-form-row">
              <label className="am-field">
                <span>Fecha *</span>
                <input
                  type="date"
                  value={formulario.fecha}
                  onChange={(e) => actualizarCampo("fecha", e.target.value)}
                  required
                />
              </label>

              <label className="am-field">
                <span>Hora *</span>
                <input
                  type="time"
                  value={formulario.hora}
                  onChange={(e) => actualizarCampo("hora", e.target.value)}
                  required
                />
              </label>
            </div>

            <label className="am-field">
              <span>Lugar o enlace *</span>
              <input
                type="text"
                value={formulario.lugar}
                onChange={(e) => actualizarCampo("lugar", e.target.value)}
                placeholder="Ej. Laboratorio 1 · Campus UNICAH"
                required
              />
            </label>

            <label className="am-field">
              <span>Descripción *</span>
              <textarea
                rows={3}
                value={formulario.descripcion}
                onChange={(e) => actualizarCampo("descripcion", e.target.value)}
                placeholder="Describe el evento y a quién está dirigido."
                required
              />
            </label>

            <label className="am-field">
              <span>Enlace de inscripción (opcional)</span>
              <input
                type="url"
                value={formulario.enlaceInscripcion}
                onChange={(e) =>
                  actualizarCampo("enlaceInscripcion", e.target.value)
                }
                placeholder="https://"
              />
            </label>

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

            <div className="am-info-box">
              <strong>Visible en la agenda al publicar</strong>
              <small>
                Home muestra los próximos 3 eventos. También puedes guardar este
                evento como borrador.
              </small>
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
              onClick={() => guardarEvento("borrador")}
            >
              Guardar borrador
            </button>

            <button type="submit" className="am-btn-primary">
              {eventoEditar ? "Guardar cambios" : "Publicar evento"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}