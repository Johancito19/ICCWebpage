import AccesosRapidos from "@/components/publico/AccesosRapidos";
import EncabezadoPublico from "@/components/publico/EncabezadoPublico";
import HeroPublico from "@/components/publico/HeroPublico";
import "@/styles/publico.css";

export default function HomePublico() {
  return (
    <div className="pub-home">
      <EncabezadoPublico />
      <main>
        <HeroPublico />

        <AccesosRapidos />

        <section className="pub-section" aria-labelledby="nosotros">
          <div className="pub-container">
            <p className="pub-eyebrow">Quiénes somos</p>
            <h2 className="pub-section-title" id="nosotros">
              Estudia con gente que también quiere construir.
            </h2>
          </div>
        </section>

        <section className="pub-section pub-section--dark" aria-labelledby="cifras">
          <div className="pub-container">
            <h2 className="pub-eyebrow" id="cifras">ICC en perspectiva</h2>
          </div>
        </section>

        <section className="pub-section" aria-labelledby="areas">
          <div className="pub-container">
            <p className="pub-eyebrow">Explora la computación</p>
            <h2 className="pub-section-title" id="areas">
              Tenemos espacios para pensar, con herramientas para crear.
            </h2>
          </div>
        </section>

        <section className="pub-section pub-section--surface" aria-labelledby="actualidad">
          <div className="pub-container">
            <p className="pub-eyebrow">Actualidad ICC</p>
            <h2 className="pub-section-title" id="actualidad">
              Nuestra facultad demuestra estudiantes de ingeniosidad y servicio.
            </h2>
          </div>
        </section>

        <div className="pub-container pub-section">
          <section className="pub-voice" aria-labelledby="voz-estudiantil">
            <p className="pub-eyebrow">Voz Estudiantil</p>
            <h2 className="pub-section-title" id="voz-estudiantil">
              Tu perspectiva importa.
              <br />
              Tu sugerencia puede ser el comienzo.
            </h2>
          </section>
        </div>

        <section className="pub-section" aria-labelledby="vinculacion">
          <div className="pub-container">
            <p className="pub-eyebrow">Vinculación</p>
            <h2 className="pub-section-title" id="vinculacion">
              Conecta tus ideas para abrir posibilidades...
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
