import "@/styles/admin-modulos.css";
import type { ReactNode } from "react";

const areas = [
  {
    tipo: "Principal (Col 2x)",
    nombre: "Desarrollo de software",
    estado: "Publicado",
    foto: "Foto: programación colaborativa",
    featured: true,
  },
  {
    tipo: "Secundaria",
    nombre: "Análisis de datos",
    estado: "Publicado",
    foto: "Foto: análisis de datos en pantalla",
  },
  {
    tipo: "Secundaria",
    nombre: "Redes y Telecomunicaciones",
    estado: "Publicado",
    foto: "Foto: equipos de redes",
  },
];

const aliados = [
  { nombre: "Grupo Tech HN", estado: "Publicado" },
  { nombre: "Banco Atlántida", estado: "Publicado" },
  { nombre: "ClearCode Labs", estado: "Publicado" },
  { nombre: "Slot 4 (Vacío)", estado: "Vacío" },
  { nombre: "Slot 5 (Vacío)", estado: "Vacío" },
  { nombre: "Slot 6 (Vacío)", estado: "Vacío" },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    search: "M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16 M17 17l5 5",
    plus: "M12 5v14 M5 12h14",
    edit: "M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z",
    upload: "M12 16V4 M7 9l5-5 5 5 M4 20h16",
    close: "M6 6l12 12 M18 6 6 18",
    reorder: "M4 7h16 M4 12h16 M4 17h16",
  };

  return (
    <svg viewBox="0 0 24 24" className="adm-av-icon" aria-hidden="true">
      <path d={paths[name] || paths.plus} />
    </svg>
  );
}

function ModalPreview({
  title,
  eyebrow,
  description,
  children,
  footer,
  wide = false,
}: {
  title: string;
  eyebrow: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={`adm-av-modal-preview ${wide ? "wide" : ""}`}>
      <div className="adm-av-modal">
        <header className="adm-av-modal-header">
          <div>
            <span className="adm-av-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <button className="adm-av-close" aria-label="Cerrar" type="button">
            <Icon name="close" />
          </button>
        </header>
        <div className="adm-av-modal-body">{children}</div>
        <footer className="adm-av-modal-footer">{footer}</footer>
      </div>
    </div>
  );
}

export default function AdminAreasPage() {
  return (
    <main className="adm-av-page">
      <header className="adm-av-header">
        <div className="adm-av-heading-copy">
          <div className="adm-av-breadcrumb">
            ICC · UNICAH / ESTRUCTURA ACADÉMICA
          </div>
          <h1>Gestión de Áreas, Laboratorios y Aliados de Vinculación</h1>
        </div>
        <div className="adm-av-header-actions">
          <div className="adm-av-search">
            <Icon name="search" />
            <span>Buscar sección o entrada...</span>
          </div>
          <button className="adm-av-btn adm-av-outline" type="button">
            Ver página pública
          </button>
          <button className="adm-av-btn adm-av-yellow" type="button">
            <Icon name="plus" /> Agregar área
          </button>
        </div>
      </header>

      <nav className="adm-av-tabs">
        <button className="adm-av-tab active" type="button">
          Áreas y Laboratorios <span>(3)</span>
        </button>
        <button className="adm-av-tab" type="button">
          Docentes <span>(24)</span>
        </button>
        <button className="adm-av-tab" type="button">
          Plan de Estudios
        </button>
        <button className="adm-av-tab" type="button">
          Aliados de Vinculación <span>(6)</span>
        </button>
      </nav>

      <section className="adm-av-panel adm-av-areas-panel">
        <div className="adm-av-panel-heading">
          <div>
            <span className="adm-av-kicker">
              <i /> EXPLORA LA COMPUTACIÓN
            </span>
            <h2>Tarjetas publicadas en la galería de Home ICC · UNICAH</h2>
          </div>
          <button
            className="adm-av-btn adm-av-outline adm-av-reorder"
            type="button"
          >
            <Icon name="reorder" /> Reordenar tarjetas
          </button>
        </div>

        <div className="adm-av-area-grid">
          {areas.map((area) => (
            <article className="adm-av-area-card" key={area.nombre}>
              <div className="adm-av-area-image" />
              <div className="adm-av-area-meta">
                <span>{area.tipo}</span>
                <span className="adm-av-status">
                  <i /> {area.estado}
                </span>
              </div>
              <h3>{area.nombre}</h3>
              <p>{area.foto}</p>
              <button className="adm-av-card-edit" type="button">
                Editar área y foto
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="adm-av-panel adm-av-allies-panel">
        <div className="adm-av-panel-heading">
          <div>
            <span className="adm-av-kicker">
              <i /> VINCULACIÓN EMPRESARIAL
            </span>
            <h2>Logos aliados en Home y solicitudes recibidas</h2>
          </div>
          <button className="adm-av-btn adm-av-yellow" type="button">
            <Icon name="upload" /> Subir logo aliado
          </button>
        </div>

        <div className="adm-av-allies-grid">
          {aliados.map((aliado, index) => (
            <article
              className={`adm-av-ally-slot ${
                aliado.estado === "Vacío" ? "empty" : "published"
              }`}
              key={index}
            >
              <strong>{aliado.nombre}</strong>
              {aliado.estado === "Vacío" ? (
                <span>+ Asignar logo</span>
              ) : (
                <small>{aliado.estado}</small>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="adm-av-modal-gallery">
        <div className="adm-av-modal-gallery-heading">
          <span>REFERENCIAS VISUALES</span>
          <h2>Vistas de los formularios</h2>
          <p>
            Los siguientes modales se muestran como muestras de diseño, sin funcionalidad.
          </p>
        </div>

        <ModalPreview
          title="Agregar área"
          eyebrow="ÁREAS Y LABORATORIOS"
          description="Crea una tarjeta para la galería Explora la Computación."
          footer={
            <>
              <button className="adm-av-btn adm-av-outline" type="button">
                Cancelar
              </button>
              <button className="adm-av-btn adm-av-yellow" type="button">
                Agregar área
              </button>
            </>
          }
        >
          <label>
            Nombre del área <b>*</b>
            <div className="adm-av-input-placeholder">Ej. Nombre del área</div>
          </label>
          <label>
            Descripción <b>*</b>
            <div className="adm-av-input-placeholder tall">
              Describe el enfoque del área para la galería de Home.
            </div>
          </label>
          <div className="adm-av-form-grid">
            <label>
              Tamaño de tarjeta
              <div className="adm-av-input-placeholder">Secundaria</div>
            </label>
            <label>
              Estado
              <div className="adm-av-input-placeholder">Borrador</div>
            </label>
          </div>
          <label>
            Fotografía del área <b>*</b>
            <div className="adm-av-upload-box">
              <div>
                <strong>Ningún archivo seleccionado</strong>
                <small>JPG o PNG · Máximo 5 MB</small>
              </div>
              <button className="adm-av-btn adm-av-outline" type="button">
                Subir fotografía
              </button>
            </div>
          </label>
          <label>
            Texto alternativo <b>*</b>
            <div className="adm-av-input-placeholder">
              Describe la fotografía del área
            </div>
          </label>
          <p className="adm-av-help">
            La tarjeta se mostrará en Explora la Computación al publicarla.
          </p>
          <p className="adm-av-required">* Campos obligatorios</p>
        </ModalPreview>

        <ModalPreview
          title="Editar área"
          eyebrow="ÁREAS Y LABORATORIOS"
          description="Actualiza los datos y la visibilidad de esta tarjeta."
          footer={
            <>
              <button className="adm-av-btn adm-av-outline" type="button">
                Cancelar
              </button>
              <button className="adm-av-btn adm-av-yellow" type="button">
                Guardar cambios
              </button>
            </>
          }
        >
          <label>
            Nombre del área <b>*</b>
            <div className="adm-av-input-placeholder">
              Desarrollo de software
            </div>
          </label>
          <label>
            Descripción <b>*</b>
            <div className="adm-av-input-placeholder tall">
              Espacio para la programación colaborativa y el desarrollo de proyectos de software.
            </div>
          </label>
          <div className="adm-av-form-grid">
            <label>
              Tamaño de tarjeta
              <div className="adm-av-input-placeholder">
                Principal (Col 2x)
              </div>
            </label>
            <label>
              Estado
              <div className="adm-av-input-placeholder">Publicado</div>
            </label>
          </div>
          <label>
            Fotografía del área <b>*</b>
            <div className="adm-av-upload-box">
              <div>
                <strong>Fotografía actual</strong>
                <small>Programación colaborativa</small>
              </div>
              <button className="adm-av-btn adm-av-outline" type="button">
                Cambiar fotografía
              </button>
            </div>
          </label>
          <label>
            Texto alternativo <b>*</b>
            <div className="adm-av-input-placeholder">
              Estudiantes trabajando en programación colaborativa
            </div>
          </label>
          <p className="adm-av-help">
            Los cambios se aplicarán a la tarjeta publicada en Home.
          </p>
          <p className="adm-av-required">* Campos obligatorios</p>
        </ModalPreview>

        <ModalPreview
          title="Subir logo aliado"
          eyebrow="VINCULACIÓN EMPRESARIAL"
          description="Agrega un aliado a la sección de vinculación en Home."
          footer={
            <>
              <button className="adm-av-btn adm-av-outline" type="button">
                Cancelar
              </button>
              <button className="adm-av-btn adm-av-yellow" type="button">
                Guardar aliado
              </button>
            </>
          }
        >
          <label>
            Nombre del aliado <b>*</b>
            <div className="adm-av-input-placeholder">
              Ej. Nombre de la organización
            </div>
          </label>
          <div className="adm-av-dropzone">
            <Icon name="upload" />
            <strong>Arrastra el logo del aliado</strong>
            <span>PNG con fondo transparente o SVG · Máximo 2 MB</span>
            <button className="adm-av-btn adm-av-outline" type="button">
              Seleccionar logo
            </button>
          </div>
          <label>
            Posición en la galería
            <div className="adm-av-input-placeholder">Slot 4 · Disponible</div>
          </label>
          <div className="adm-av-note">
            El logo se mostrará completo, sin recortes, junto al nombre del aliado.
          </div>
        </ModalPreview>
      </section>
    </main>
  );
}