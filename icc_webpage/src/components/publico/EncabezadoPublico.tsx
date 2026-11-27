import Image from "next/image";
import Link from "next/link";
import MenuMovil from "@/components/publico/MenuMovil";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Académico", href: "#areas" },
  { label: "Vida estudiantil", href: "#actualidad" },
  { label: "Vinculación", href: "#vinculacion" },
  { label: "Docentes", href: null },
  { label: "Contacto", href: null },
];

export default function EncabezadoPublico() {
  return (
    <header className="pub-header">
      <div className="pub-container pub-header-row">
        <Link className="pub-brand" href="/">
          <picture>
            <source
              media="(width < 64rem)"
              srcSet="/img/publico/logo-icc-compacto.png"
              width={104}
              height={46}
            />
            <Image
              src="/img/publico/logo-icc.png"
              alt="ICC · UNICAH"
              width={136}
              height={60}
              loading="eager"
              unoptimized
            />
          </picture>
        </Link>

        <nav className="pub-navigation" aria-label="Navegación principal">
          <ul className="pub-navigation-list">
            {navigation.map(({ label, href }) => (
              <li key={label}>
                {href ? (
                  <Link
                    className="pub-navigation-link"
                    href={href}
                    aria-current={href === "/" ? "page" : undefined}
                  >
                    {label}
                  </Link>
                ) : (
                  <span className="pub-navigation-link" role="link" aria-disabled="true">
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="pub-header-actions">
          <span className="btn-amarillo pub-admissions" role="link" aria-disabled="true">
            Admisiones
            <span className="pub-arrow" aria-hidden="true" />
          </span>
          <MenuMovil navigation={navigation} />
        </div>
      </div>
    </header>
  );
}
