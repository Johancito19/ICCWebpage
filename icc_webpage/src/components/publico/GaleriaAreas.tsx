import Image from "next/image";
import { areasEspecializacion } from "@/data/publico";

export default function GaleriaAreas() {
  return (
    <section className="pub-section pub-areas" id="areas" aria-labelledby="areas-titulo">
      <div className="pub-container">
        <p className="pub-eyebrow">Explora la computación</p>

        <div className="pub-areas-intro">
          <h2 className="pub-section-title" id="areas-titulo">
            Tenemos espacios para pensar,
            <br />
            con herramientas para crear.
          </h2>
          <a className="pub-areas-more" href="#galeria-areas">
            Explorar áreas
            <span className="pub-arrow" aria-hidden="true" />
          </a>
        </div>

        <ul className="pub-areas-grid" id="galeria-areas">
          {areasEspecializacion.map(({ titulo, pie, alt, archivo, ancho, alto, anchoTablet }) => {
            const source = `/img/publico/${archivo}`;

            return (
              <li className="pub-area-card" key={archivo}>
                <figure>
                  <picture>
                    <source
                      media="(width < 40rem)"
                      srcSet={`${source}-movil.webp`}
                      width={346}
                      height={316}
                    />
                    <source
                      media="(width < 64rem)"
                      srcSet={`${source}-tablet.webp`}
                      width={anchoTablet}
                      height={alto}
                    />
                    <Image
                      src={`${source}.webp`}
                      alt={alt}
                      width={ancho}
                      height={alto}
                      unoptimized
                    />
                  </picture>
                  <figcaption>{pie}</figcaption>
                </figure>

                <h3 className="pub-area-card-title">
                  <span className="pub-area-card-link" role="link" aria-disabled="true">
                    {titulo}
                    <span className="pub-arrow" aria-hidden="true" />
                  </span>
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
