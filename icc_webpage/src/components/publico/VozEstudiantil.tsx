export default function VozEstudiantil() {
  return (
    <div className="pub-container pub-section">
      <section className="pub-voice" id="voz-estudiantil" aria-labelledby="voz-estudiantil-titulo">
        <div className="pub-voice-copy">
          <p className="pub-eyebrow">Voz Estudiantil</p>
          <h2 className="pub-section-title" id="voz-estudiantil-titulo">
            Tu perspectiva importa.
            <br />
            Tu sugerencia puede ser el comienzo.
          </h2>
          <p className="pub-voice-description">
            Comparte tus opiniones, propuestas e ideas para la vida en la facultad. Este
            espacio también te invita a participar de forma anónima.
          </p>
        </div>

        <div className="pub-voice-action">
          <svg
            className="pub-voice-icon"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8 4h15a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H10l-6 5V8a4 4 0 0 1 4-4Z" />
            <path d="M14 26v3a3 3 0 0 0 3 3h13l6 5V19a3 3 0 0 0-3-3h-2" />
          </svg>
          <p className="pub-voice-note">Con tu nombre o de forma anónima.</p>
          <div className="pub-voice-cta">
            <button className="btn-amarillo pub-voice-button" type="button" disabled>
              Comparte tu idea
              <span className="pub-arrow" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
