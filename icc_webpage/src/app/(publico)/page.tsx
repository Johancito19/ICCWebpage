import AccesosRapidos from "@/components/publico/AccesosRapidos";
import ActualidadIcc from "@/components/publico/ActualidadIcc";
import EncabezadoPublico from "@/components/publico/EncabezadoPublico";
import GaleriaAreas from "@/components/publico/GaleriaAreas";
import HeroPublico from "@/components/publico/HeroPublico";
import PerspectivaIcc from "@/components/publico/PerspectivaIcc";
import PieDePagina from "@/components/publico/PieDePagina";
import QuienesSomos from "@/components/publico/QuienesSomos";
import Vinculacion from "@/components/publico/Vinculacion";
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

        <Vinculacion />
      </main>
      <PieDePagina />
    </div>
  );
}
