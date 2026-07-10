
import { PageTransition, PageHero, FadeIn, Stagger, SectionTitle } from "@/components/site/primitives";
import { DestinationCard } from "@/components/site/cards";
import { destinations } from "@/data/mock";


function Destinations() {
  return (
    <PageTransition>
      <PageHero
        title="Every corner of the pearl."
        subtitle="Ancient rock fortresses, misty highlands, palm-lined shores and leopard country — all within a single, small island."
        image="https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Destinations" }]}
      />
      <section className="py-20">
        <div className="container-x mx-auto max-w-7xl">
          <FadeIn><SectionTitle eyebrow="Explore" title="Popular Destinations" subtitle="Six regions, endless stories." /></FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map(d => <DestinationCard key={d.id} d={d} />)}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  );
}

export default Destinations;
