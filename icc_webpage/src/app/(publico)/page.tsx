import AccesosRapidos from "@/components/publico/AccesosRapidos";
import ActualidadIcc from "@/components/publico/ActualidadIcc";
import EncabezadoPublico from "@/components/publico/EncabezadoPublico";
import GaleriaAreas from "@/components/publico/GaleriaAreas";
import HeroPublico from "@/components/publico/HeroPublico";
import PerspectivaIcc from "@/components/publico/PerspectivaIcc";
import QuienesSomos from "@/components/publico/QuienesSomos";
import VozEstudiantil from "@/components/publico/VozEstudiantil";
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

        <VozEstudiantil />

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
