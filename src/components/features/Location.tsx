import { business } from "@/lib/sol";
export function Location() {
  return (
    <section className="section-wrap section-space location">
      <div>
        <p className="eyebrow">Find your way to Sol</p>
        <h2>
          Above Shimla.
          <br />
          <em>Right here.</em>
        </h2>
        <p>{business.address}</p>
        <a className="text-link" href={business.telephone}>
          {business.phone}
        </a>
        <div className="actions">
          <a
            href={business.maps}
            target="_blank"
            rel="noreferrer"
            className="action secondary"
          >
            Get directions ↗
          </a>
        </div>
        <p className="small-note">
          Call reception for current hours and table availability.
        </p>
      </div>
      <iframe
        title="Sol at Hotel Combermere, Shimla on Google Maps"
        src={business.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
