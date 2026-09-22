import { business } from "@/lib/sol";
export default function Reservations() {
  return (
    <section>
      <h1 className="text-3xl text-zinc-900">Reservations by phone</h1>
      <p className="mt-6 text-zinc-700">
        Guests now contact reception directly to arrange and confirm their
        table.
      </p>
      <a className="action primary mt-6" href={business.telephone}>
        {business.phone}
      </a>
    </section>
  );
}
