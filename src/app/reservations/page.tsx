import { Navbar } from "@/components/layout/Navbar";
export const metadata = { title: "Call to Book | Sol The Brew House" };
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { business } from "@/lib/sol";
import { Phone } from "lucide-react";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Your table at Sol."
        subtitle="A great evening starts with a call."
      />
      <main id="page-content">
        <section className="section-wrap section-space booking">
          <p className="eyebrow">Speak with reception</p>
          <h2>
            Call. Plan. <em>Join us.</em>
          </h2>
          <p>
            For a table at Sol The Brew House, call our reception team. Let us
            know your preferred date, time, number of guests and any special
            requests.
          </p>
          <a className="action primary" href={business.telephone}>
            <Phone size={20} />
            {business.phone}
          </a>
          <p className="small-note">
            Your table is confirmed directly by our team, subject to
            availability.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
