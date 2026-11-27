import AccesosRapidos from "@/components/publico/AccesosRapidos";
import ActualidadIcc from "@/components/publico/ActualidadIcc";
import EncabezadoPublico from "@/components/publico/EncabezadoPublico";
import GaleriaAreas from "@/components/publico/GaleriaAreas";
import HeroPublico from "@/components/publico/HeroPublico";
import PerspectivaIcc from "@/components/publico/PerspectivaIcc";
import QuienesSomos from "@/components/publico/QuienesSomos";
import "@/styles/publico.css";

export default function HomePublico() {
  return (
    <div className="pub-home">
      <EncabezadoPublico />
      <main>
        <HeroPublico />

        <AccesosRapidos />

        <QuienesSomos />

        <PerspectivaIcc />

        <GaleriaAreas />

        <ActualidadIcc />

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
