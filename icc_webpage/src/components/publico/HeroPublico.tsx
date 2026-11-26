export default function HeroPublico() {
  return (
    <section className="pub-hero pub-section--dark" aria-labelledby="inicio">
      <div className="pub-container pub-hero-content">
        <p className="pub-eyebrow">Ingeniería en Ciencias de la Computación</p>

        <div className="pub-hero-copy">
          <h1 className="pub-title" id="inicio">
            Construye el futuro
            <br />
            desde Honduras
          </h1>
          <p className="pub-hero-subtitle">Programa, conecta y construye en UNICAH.</p>

          <div className="pub-hero-actions">
            <span className="btn-amarillo pub-hero-action" role="link" aria-disabled="true">
              Únete ahora
              <span className="pub-arrow" aria-hidden="true" />
            </span>
            <a className="btn-outline pub-hero-action" href="#nosotros">
              Conoce ICC
              <span className="pub-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>

        <a className="pub-hero-discover" href="#accesos">
          <span className="pub-arrow" aria-hidden="true" />
          Descubre ICC
        </a>
      </div>
    </section>
  );
}
