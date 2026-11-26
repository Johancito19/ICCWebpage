import { indicadoresIcc } from "@/data/publico";

export default function PerspectivaIcc() {
  return (
    <section className="pub-section pub-section--dark pub-perspective" aria-labelledby="cifras">
      <div className="pub-container">
        <h2 className="pub-eyebrow" id="cifras">ICC en perspectiva</h2>
        <dl className="pub-perspective-grid">
          {indicadoresIcc.map(({ nombre, valor }) => (
            <div className="pub-perspective-item" key={nombre}>
              <dt>{nombre}</dt>
              <dd className="pub-perspective-value">{valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
