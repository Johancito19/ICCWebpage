import "@/styles/admin-modulos.css";

const noticias = [
  {
    title: "Llevamos años formando profesionales especializados",
    date: "18 Nov 2026",
    category: "Actualidad ICC",
    status: "Destacada",
    description: "Noticia destacada · Foto: estudiantes presentando un proyecto",
    featured: true,
  },
  {
    title: "Aprender haciendo: nuevos talleres prácticos",
    date: "15 Nov 2026",
    category: "Académica",
    status: "Publicado",
    description: "Noticia breve · Foto: trabajo en equipo",
  },
  {
    title: "Conversaciones sobre el futuro de la IA en Honduras",
    date: "12 Nov 2026",
    category: "Tecnología",
    status: "Publicado",
    description: "Noticia breve · Foto: encuentro académico",
  },
  {
    title: "Convocatoria Hackathon ICC 2026",
    date: "20 Nov 2026",
    category: "Eventos",
    status: "Borrador",
    description: "Borrador pendiente de fotografía oficial",
  },
];

const eventos = [
  {
    date: "24 Nov 2026",
    title: "Un primer paso en código",
    type: "Taller",
    place: "Laboratorio 1",
    status: "Visible",
  },
  {
    date: "02 Dic 2026",
    title: "Hablemos de tecnología",
    type: "Conversatorio",
    place: "Auditorio",
    status: "Visible",
  },
  {
    date: "10 Dic 2026",
    title: "Ideas en comunidad",
    type: "Encuentro",
    place: "Sala ICC",
    status: "Borrador",
  },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    grid: "M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h6v6h-6z",
    home: "M3 10.5 12 3l9 7.5 M5.5 9.5V21h13V9.5 M9 21v-7h6v7",
    calendar: "M4 5h16v16H4z M8 3v4 M16 3v4 M4 10h16",
    graduation: "M2 10 12 4l10 6-10 6z M6 12v5c3 3 9 3 12 0v-5 M22 10v6",
    code: "M8 7 3 12l5 5 M16 7l5 5-5 5 M14 4l-4 16",
    users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    lock: "M5 11h14v10H5z M8 11V7a4 4 0 0 1 8 0v4",
    search: "M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16 M17 17l5 5",
    plus: "M12 5v14 M5 12h14",
    edit: "M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z",
    image: "M4 4h16v16H4z M4 16l5-5 4 4 3-3 4 4 M9 8h.01",
    close: "M6 6l12 12 M18 6 6 18",
  };

  return (
    <svg viewBox="0 0 24 24" className="adm-news-icon" aria-hidden="true">
      <path d={paths[name] || paths.grid} />
    </svg>
  );
}

export default function NoticiasPage() {
  return (
    <main className="adm-news-page">
      <header className="adm-news-header">
        <div className="adm-news-heading-copy">
          <div className="adm-news-breadcrumb">ICC · UNICAH / ACTUALIDAD ICC</div>
          <h1>Gestión de Noticias y Próximos Eventos</h1>
        </div>
        <div className="adm-news-header-actions">
          <div className="adm-news-search">
            <Icon name="search" />
            <span>Buscar sección o entrada...</span>
          </div>
          <button className="adm-news-btn adm-news-btn-outline" type="button">
            Ver página pública
          </button>
          <button className="adm-news-btn adm-news-btn-yellow" type="button">
            <Icon name="plus" /> Nueva noticia
          </button>
        </div>
      </header>

      <div className="adm-news-toolbar">
        <div className="adm-news-tabs">
          <button className="adm-news-tab adm-news-tab-active" type="button">
            Todas las noticias <span>12</span>
          </button>
          <button className="adm-news-tab" type="button">
            Noticia destacada
          </button>
          <button className="adm-news-tab" type="button">
            Próximos eventos <span>6</span>
          </button>
        </div>
        <button className="adm-news-btn adm-news-btn-outline" type="button">
          <Icon name="plus" /> Agendar evento
        </button>
      </div>

      <div className="adm-news-content-grid">
        <section className="adm-news-panel adm-news-publications">
          <div className="adm-news-panel-heading">
            <div>
              <span className="adm-news-section-label">
                <i /> ACTUALIDAD ICC
              </span>
              <h2>Publicaciones visibles en Home ICC</h2>
            </div>
            <span className="adm-news-sort">Orden: Destacada primero</span>
          </div>

          <div className="adm-news-list">
            {noticias.map((news, index) => (
              <article className="adm-news-row" key={index}>
                <div className="adm-news-thumb" aria-hidden="true">
                  <Icon name="image" />
                </div>
                <div className="adm-news-row-main">
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                </div>
                <span className="adm-news-date">{news.date}</span>
                <span
                  className={`adm-news-status ${
                    news.status === "Destacada"
                      ? "is-featured"
                      : news.status === "Borrador"
                      ? "is-draft"
                      : "is-published"
                  }`}
                >
                  <i /> {news.status}
                </span>
                <button className="adm-news-edit-btn" type="button">
                  <Icon name="edit" /> Editar
                </button>
              </article>
            ))}
          </div>
        </section>

        <aside className="adm-news-panel adm-news-events-panel">
          <div className="adm-news-panel-heading">
            <div>
              <span className="adm-news-section-label">
                <i /> AGENDA ACADÉMICA
              </span>
              <h2>Próximos eventos en Home</h2>
            </div>
          </div>
          <p className="adm-news-events-intro">
            Se muestran los 3 eventos más próximos en la columna derecha de Actualidad ICC.
          </p>
          <div className="adm-news-event-list">
            {eventos.map((event, index) => (
              <article className="adm-news-event-card" key={index}>
                <div className="adm-news-event-topline">
                  <span className="adm-news-event-date">{event.date}</span>
                  <span
                    className={`adm-news-status ${
                      event.status === "Borrador" ? "is-draft" : "is-published"
                    }`}
                  >
                    <i /> {event.status}
                  </span>
                </div>
                <h3>{event.title}</h3>
                <p>
                  {event.type} · {event.place}
                </p>
              </article>
            ))}
          </div>
          <button
            className="adm-news-btn adm-news-btn-yellow adm-news-add-event"
            type="button"
          >
            <Icon name="plus" /> Agregar nuevo evento
          </button>
        </aside>
      </div>

      <div className="adm-news-modal-preview" aria-hidden="true">
        <div className="adm-news-modal">
          <div className="adm-news-modal-header">
            <div>
              <span className="adm-news-section-label">ACTUALIDAD ICC</span>
              <h2>Nueva noticia</h2>
              <p>Comparte las novedades de la carrera en Home ICC · UNICAH.</p>
            </div>
            <button className="adm-news-modal-close" type="button">
              <Icon name="close" />
            </button>
          </div>

          <div className="adm-news-modal-body">
            <label>
              Título de la noticia <b>*</b>
              <div className="adm-news-input-placeholder">
                Escribe el título de la noticia
              </div>
            </label>
            <label>
              Resumen <b>*</b>
              <div className="adm-news-input-placeholder adm-news-placeholder-tall">
                Escribe una breve introducción para la tarjeta de Home.
              </div>
            </label>
            <label>
              Contenido de la noticia <b>*</b>
              <div className="adm-news-input-placeholder adm-news-placeholder-tall">
                Escribe aquí el contenido completo de la noticia...
              </div>
            </label>
            <div className="adm-news-form-grid">
              <label>
                Categoría <b>*</b>
                <div className="adm-news-input-placeholder">
                  Seleccionar categoría
                </div>
              </label>
              <label>
                Fecha de publicación <b>*</b>
                <div className="adm-news-input-placeholder">dd/mm/aaaa</div>
              </label>
            </div>
            <label>
              Fotografía de portada <b>*</b>
              <div className="adm-news-upload-box">
                <span>
                  Ningún archivo seleccionado
                  <small>JPG o PNG · Máximo 5 MB</small>
                </span>
                <button
                  className="adm-news-btn adm-news-btn-outline"
                  type="button"
                >
                  Subir fotografía
                </button>
              </div>
            </label>
            <div className="adm-news-form-grid">
              <label>
                Estado
                <div className="adm-news-input-placeholder">Borrador</div>
              </label>
              <label>
                Destacar en Home
                <div className="adm-news-input-placeholder">No</div>
              </label>
            </div>
            <small className="adm-news-required-note">* Campos obligatorios</small>
          </div>

          <div className="adm-news-modal-footer">
            <button className="adm-news-btn adm-news-btn-outline" type="button">
              Cancelar
            </button>
            <button className="adm-news-btn adm-news-btn-outline" type="button">
              Guardar borrador
            </button>
            <button className="adm-news-btn adm-news-btn-yellow" type="button">
              Publicar noticia
            </button>
          </div>
        </div>
      </div>

      <div
        className="adm-news-modal-preview adm-news-modal-edit-preview"
        aria-hidden="true"
      >
        <div className="adm-news-modal">
          <div className="adm-news-modal-header">
            <div>
              <span className="adm-news-section-label">ACTUALIDAD</span>
              <h2>Editar noticia</h2>
              <p>Actualiza el contenido y la publicación de esta noticia.</p>
            </div>
            <button className="adm-news-modal-close" type="button">
              <Icon name="close" />
            </button>
          </div>

          <div className="adm-news-modal-body">
            <label>
              Título de la noticia <b>*</b>
              <div className="adm-news-input-placeholder">
                Llevamos años formando profesionales especializados
              </div>
            </label>
            <label>
              Resumen <b>*</b>
              <div className="adm-news-input-placeholder adm-news-placeholder-tall">
                Conoce la formación de profesionales en Ingeniería en Ciencias de la Computación.
              </div>
            </label>
            <label>
              Contenido de la noticia <b>*</b>
              <div className="adm-news-input-placeholder adm-news-placeholder-tall">
                La carrera de Ingeniería en Ciencias de la Computación presenta su propuesta de formación profesional.
              </div>
            </label>
            <div className="adm-news-form-grid">
              <label>
                Categoría <b>*</b>
                <div className="adm-news-input-placeholder">Institucional</div>
              </label>
              <label>
                Fecha de publicación <b>*</b>
                <div className="adm-news-input-placeholder">18/11/2026</div>
              </label>
            </div>
            <label>
              Fotografía de portada <b>*</b>
              <div className="adm-news-upload-box">
                <span>
                  Fotografía actual de la noticia
                  <small>Estudiantes presentando un proyecto</small>
                </span>
                <button
                  className="adm-news-btn adm-news-btn-outline"
                  type="button"
                >
                  Reemplazar foto
                </button>
              </div>
            </label>
            <div className="adm-news-form-grid">
              <label>
                Estado
                <div className="adm-news-input-placeholder">Publicado</div>
              </label>
              <label>
                Destacar en Home
                <div className="adm-news-input-placeholder">
                  Sí · Noticia destacada
                </div>
              </label>
            </div>
            <small className="adm-news-required-note">* Campos obligatorios</small>
          </div>

          <div className="adm-news-modal-footer">
            <button className="adm-news-btn adm-news-btn-outline" type="button">
              Cancelar
            </button>
            <button className="adm-news-btn adm-news-btn-yellow" type="button">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>

      <div
        className="adm-news-modal-preview adm-news-event-modal-preview"
        aria-hidden="true"
      >
        <div className="adm-news-modal adm-news-event-modal">
          <div className="adm-news-modal-header">
            <div>
              <span className="adm-news-section-label">AGENDA ACADÉMICA</span>
              <h2>Agregar nuevo evento</h2>
              <p>Crea un evento para la agenda de Home ICC · UNICAH.</p>
            </div>
            <button className="adm-news-modal-close" type="button">
              <Icon name="close" />
            </button>
          </div>

          <div className="adm-news-modal-body">
            <label>
              Nombre del evento <b>*</b>
              <div className="adm-news-input-placeholder">
                Escribe el nombre del evento
              </div>
            </label>
            <div className="adm-news-form-grid">
              <label>
                Tipo de evento <b>*</b>
                <div className="adm-news-input-placeholder">
                  Taller / Charla / Encuentro
                </div>
              </label>
              <label>
                Modalidad <b>*</b>
                <div className="adm-news-input-placeholder">Presencial</div>
              </label>
            </div>
            <div className="adm-news-form-grid">
              <label>
                Fecha <b>*</b>
                <div className="adm-news-input-placeholder">dd/mm/aaaa</div>
              </label>
              <label>
                Hora <b>*</b>
                <div className="adm-news-input-placeholder">hh:mm</div>
              </label>
            </div>
            <label>
              Lugar o enlace <b>*</b>
              <div className="adm-news-input-placeholder">
                Ej. Laboratorio 1 · Campus UNICAH
              </div>
            </label>
            <label>
              Descripción <b>*</b>
              <div className="adm-news-input-placeholder adm-news-placeholder-tall">
                Describe el evento y a quién está dirigido.
              </div>
            </label>
            <label>
              Enlace de inscripción (opcional)
              <div className="adm-news-input-placeholder">https://</div>
            </label>
            <div className="adm-news-event-note">
              <strong>Visible en la agenda al publicar</strong>
              <p>
                Home muestra los 3 eventos más próximos. También puedes guardar este evento como borrador.
              </p>
            </div>
            <small className="adm-news-required-note">* Campos obligatorios</small>
          </div>

          <div className="adm-news-modal-footer">
            <button className="adm-news-btn adm-news-btn-outline" type="button">
              Cancelar
            </button>
            <button className="adm-news-btn adm-news-btn-outline" type="button">
              Guardar borrador
            </button>
            <button className="adm-news-btn adm-news-btn-yellow" type="button">
              Publicar evento
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}