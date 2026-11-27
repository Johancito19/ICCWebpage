import Image from "next/image";
import { noticiaDestacada, noticiasBreves, proximosEventos } from "@/data/publico";
import type { NoticiaPublica } from "@/data/publico";

function FotoNoticia({ noticia }: { noticia: NoticiaPublica }) {
  const { alt, archivo, ancho, alto, anchoTablet, altoMovil, pie } = noticia;
  const source = `/img/publico/${archivo}`;

  return (
    <figure className="pub-news-photo">
      <picture>
        <source
          media="(width < 40rem)"
          srcSet={`${source}-movil.webp`}
          width={346}
          height={altoMovil}
        />
        <source
          media="(width < 64rem)"
          srcSet={`${source}-tablet.webp`}
          width={anchoTablet}
          height={alto}
        />
        <Image src={`${source}.webp`} alt={alt} width={ancho} height={alto} unoptimized />
      </picture>
      <figcaption>{pie}</figcaption>
    </figure>
  );
}

export default function ActualidadIcc() {
  return (
    <section
      className="pub-section pub-section--surface pub-news"
      id="actualidad"
      aria-labelledby="actualidad-titulo"
    >
      <div className="pub-container">
        <p className="pub-eyebrow">Actualidad ICC</p>
        <h2 className="pub-section-title" id="actualidad-titulo">
          Nuestra facultad demuestra estudiantes de ingeniosidad y servicio.
        </h2>

        <div className="pub-news-layout">
          <article className="pub-news-featured">
            <FotoNoticia noticia={noticiaDestacada} />
            <h3 className="pub-news-featured-title">{noticiaDestacada.titulo}</h3>
            <p className="pub-news-summary">{noticiaDestacada.resumen}</p>
            <span className="pub-news-read" role="link" aria-disabled="true">
              Leer historia
              <span className="pub-arrow" aria-hidden="true" />
            </span>
          </article>

          <div className="pub-news-briefs">
            {noticiasBreves.map((noticia) => (
              <article key={noticia.archivo}>
                <FotoNoticia noticia={noticia} />
                <h3 className="pub-news-brief-title">{noticia.titulo}</h3>
              </article>
            ))}
          </div>

          <aside className="pub-news-events" aria-labelledby="proximos-eventos">
            <h3 className="pub-news-events-title" id="proximos-eventos">Próximos eventos</h3>
            <ul className="pub-event-list">
              {proximosEventos.map(({ titulo, fecha, tipo }) => (
                <li className="pub-event" key={titulo}>
                  <p className="pub-event-date">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">
                      <rect x="2" y="3.5" width="12" height="10.5" rx="1.5" />
                      <path d="M5 2v3m6-3v3M2 7h12m-9 3h.5m2.5 0h.5m2.5 0h.5M5 12h.5M8 12h.5" />
                    </svg>
                    {fecha}
                  </p>
                  <h4 className="pub-event-title">{titulo}</h4>
                  <p className="pub-event-kind">{tipo} · Ejemplo</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
