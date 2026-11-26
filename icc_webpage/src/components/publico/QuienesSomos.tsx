import Image from "next/image";

export default function QuienesSomos() {
  return (
    <section className="pub-section" id="nosotros" aria-labelledby="nosotros-titulo">
      <div className="pub-container pub-about">
        <figure className="pub-about-figure">
          <picture>
            <source
              media="(width < 40rem)"
              srcSet="/img/publico/quienes-somos-movil.webp"
              width={346}
              height={316}
            />
            <source
              media="(width < 64rem)"
              srcSet="/img/publico/quienes-somos-tablet.webp"
              width={704}
              height={480}
            />
            <Image
              src="/img/publico/quienes-somos.webp"
              alt="Cuatro estudiantes conversan alrededor de una mesa con una computadora portátil."
              width={588}
              height={480}
              unoptimized
            />
          </picture>
          <figcaption>Foto: colaboración en un espacio de estudio</figcaption>
        </figure>

        <div className="pub-about-copy">
          <p className="pub-eyebrow">Quiénes somos</p>
          <h2 className="pub-section-title" id="nosotros-titulo">
            Estudia con gente que también quiere construir.
          </h2>
          <p className="pub-about-subtitle">
            Facultad de Ingeniería en Ciencias de la Computación
          </p>
          <p className="pub-about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget
            magna fermentum iaculis. Aenean euismod, nibh in facilisis viverra, lorem ipsum
            dolor sit amet.
          </p>

          <span className="pub-about-link" role="link" aria-disabled="true">
            Conoce nuestra facultad
            <span className="pub-arrow" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}
