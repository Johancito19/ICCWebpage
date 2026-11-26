const accesos = [
  {
    title: "Plan de estudios",
    description: "Explora tu ruta académica",
    icon: "M12 6a5 5 0 0 0-4.5-2.5h-5v16h5a5 5 0 0 1 4.5 2 5 5 0 0 1 4.5-2h5v-16h-5A5 5 0 0 0 12 6Zm0 0v15.5",
    href: null,
  },
  {
    title: "Docentes",
    description: "Principales guía de los estudiantes",
    icon: "M2 10 12 5l10 5-10 5-10-5Zm4 2v4.5c3.5 2.7 8.5 2.7 12 0V12m4-2v5.5",
    href: null,
  },
  {
    title: "Voz Estudiantil",
    description: "Comparte lo que piensas",
    icon: "M21.5 17.5a2 2 0 0 1-2 2h-13l-4 3V5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v12.5Z",
    href: "#voz-estudiantil",
  },
  {
    title: "Asociación",
    description: "Unión y representación",
    icon: "M8 7V5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 5v2m5.5 5.5a24 24 0 0 1-19 0M12 13v1m7.5-7h-15a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z",
    href: null,
  },
];

export default function AccesosRapidos() {
  return (
    <nav className="pub-container pub-quick-links" id="accesos" aria-label="Accesos rápidos">
      <ul className="pub-quick-list">
        {accesos.map(({ title, description, icon, href }) => {
          const content = (
            <>
              <span className="pub-quick-icons" aria-hidden="true">
                <svg
                  className="pub-quick-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={icon} />
                </svg>
                <span className="pub-arrow" />
              </span>
              <span>
                <span className="pub-quick-title">{title}</span>
                <span className="pub-quick-description">{description}</span>
              </span>
            </>
          );

          return (
            <li key={title}>
              {href ? (
                <a className="pub-quick-card" href={href}>{content}</a>
              ) : (
                <span className="pub-quick-card" role="link" aria-disabled="true">{content}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
