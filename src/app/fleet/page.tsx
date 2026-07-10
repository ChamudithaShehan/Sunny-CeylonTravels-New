
import { PageTransition, PageHero, FadeIn, Stagger, SectionTitle } from "@/components/site/primitives";
import { VehicleCard } from "@/components/site/cards";
import { vehicles } from "@/data/mock";


function Fleet() {
  return (
    <PageTransition>
      <PageHero
        title="On the road, in comfort."
        subtitle="Modern, immaculately kept vehicles paired with our finest English-speaking chauffeur-guides."
        image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Fleet" }]}
      />
      <section className="py-20">
        <div className="container-x mx-auto max-w-7xl">
          <FadeIn><SectionTitle eyebrow="The Fleet" title="Choose your ride" /></FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.map(v => <VehicleCard key={v.id} v={v} />)}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  );
}

export default Fleet;
