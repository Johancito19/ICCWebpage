import Image from "next/image";
import Link from "next/link";

const grupos = [
  {
    titulo: "Explora ICC",
    area: "explore",
    enlaces: [
      { titulo: "Inicio", href: "/" },
      { titulo: "Nosotros", href: "#nosotros" },
      { titulo: "Académico", href: "#areas" },
      { titulo: "Vida estudiantil", href: "#actualidad" },
    ],
  },
  {
    titulo: "Conecta",
    area: "connect",
    enlaces: [
      { titulo: "Vinculación", href: "#vinculacion" },
      { titulo: "Admisiones", href: null },
      { titulo: "Voz Estudiantil", href: "#voz-estudiantil" },
      { titulo: "Contacto", href: null },
    ],
  },
];

const redes = [
  { nombre: "Facebook", icono: "M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.8a21 21 0 0 0-2.5-.2c-2.5 0-4.3 1.5-4.3 4.4v2H8v3h2.5v8H14Z" },
  { nombre: "Instagram", icono: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM17.5 6.6h.1" },
  { nombre: "LinkedIn", icono: "M3.5 9h3v11h-3zM6.7 5a1.7 1.7 0 1 1-3.4 0 1.7 1.7 0 0 1 3.4 0Z M10 9h3v1.7a4 4 0 0 1 3.4-1.9c3.1 0 4.1 1.9 4.1 4.5V20h-3v-6c0-1.4-.6-2.2-1.9-2.2-1.4 0-2.6 1-2.6 2.6V20h-3V9Z" },
];

export default function PieDePagina() {
  return (
    <footer className="pub-footer">
      <div className="pub-container">
        <div className="pub-footer-grid">
          <div className="pub-footer-details">
            <div className="pub-footer-brand">
              <Image
                src="/img/publico/escudo-icc-blanco.png"
                alt=""
                width={88}
                height={88}
                unoptimized
              />
              <div>
                <p className="pub-footer-brand-name">ICC / UNICAH</p>
                <p className="pub-footer-brand-faculty">Facultad de Ingeniería en Ciencias de la Computación</p>
              </div>
            </div>

            <p className="pub-footer-university">Universidad Católica de Honduras</p>
            <address className="pub-footer-contact">
              <p>correo@unicah.edu</p>
              <p className="pub-footer-phone">+504 0000-0000 · Teléfono de ejemplo</p>
            </address>
          </div>

          {grupos.map(({ titulo, area, enlaces }) => (
            <nav className={`pub-footer-nav pub-footer-nav--${area}`} aria-label={titulo} key={area}>
              <h2 className="pub-footer-heading">{titulo}</h2>
              <ul>
                {enlaces.map(({ titulo, href }) => (
                  <li key={titulo}>
                    {href ? (
                      <Link className="pub-footer-link" href={href}>{titulo}</Link>
                    ) : (
                      <span className="pub-footer-link" role="link" aria-disabled="true">{titulo}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="pub-footer-social">
            <h2 className="pub-footer-heading">Síguenos</h2>
            <ul className="pub-footer-social-list">
              {redes.map(({ nombre, icono }) => (
                <li key={nombre}>
                  <span className="pub-footer-social-icon" role="link" aria-label={nombre} aria-disabled="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
                      <path d={icono} />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
            <p className="pub-footer-country">Honduras</p>
          </div>
        </div>

        <div className="pub-footer-bottom">
          <p>ICC · UNICAH — Mockup con contenido de ejemplo</p>
          <ul className="pub-footer-legal">
            <li><span role="link" aria-disabled="true">Privacidad</span></li>
            <li><span role="link" aria-disabled="true">Accesibilidad</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
