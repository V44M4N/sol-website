import { Navbar } from "@/components/layout/Navbar";
export const metadata = { title: "Visit Sol | Sol The Brew House" };
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Location } from "@/components/features/Location";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Find your way to Sol."
        subtitle="The Mall, Shimla. Above the everyday."
      />
      <main id="page-content">
        <Location />
      </main>
      <Footer />
    </>
  );
}
