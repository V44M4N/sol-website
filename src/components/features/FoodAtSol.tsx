import Link from "next/link";
export function FoodAtSol() {
  return (
    <section className="section-wrap section-space">
      <p className="eyebrow">Bar & food</p>
      <h2>Something for the table.</h2>
      <Link className="action secondary" href="/food">
        View our menus
      </Link>
    </section>
  );
}
