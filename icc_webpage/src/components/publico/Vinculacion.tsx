export default function Vinculacion() {
  return (
    <section className="pub-container pub-partnership" id="vinculacion" aria-labelledby="vinculacion-titulo">
      <p className="pub-eyebrow">Vinculación</p>
      <div className="pub-partnership-intro">
        <div>
          <h2 className="pub-section-title" id="vinculacion-titulo">
            Conecta tus ideas para abrir posibilidades...
          </h2>
          <p className="pub-partnership-description">
            Un espacio para explorar colaboraciones entre la comunidad académica y su entorno.
          </p>
        </div>
        <div>
          <p className="pub-partnership-question">¿Tienes una propuesta para conectar con ICC?</p>
          <button className="btn-amarillo pub-partnership-button" type="button" disabled>
            Conversemos
            <span className="pub-arrow" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="pub-partnership-allies">
        <p>Espacio para aliados · logos de ejemplo, no representan alianzas reales</p>
        <div className="pub-partnership-logos" aria-hidden="true">
          {Array.from({ length: 6 }, (_, index) => <span key={index}>Logo</span>)}
        </div>
      </div>
    </section>
  );
}
