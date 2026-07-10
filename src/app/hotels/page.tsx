
import { PageTransition, PageHero, FadeIn, Stagger, SectionTitle } from "@/components/site/primitives";
import { HotelCard } from "@/components/site/cards";
import { hotels } from "@/data/mock";


function Hotels() {
  return (
    <PageTransition>
      <PageHero
        title="Where you'll rest, beautifully."
        subtitle="Only the finest hotels, villas and heritage properties make our list."
        image="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Hotels" }]}
      />
      <section className="py-20">
        <div className="container-x mx-auto max-w-7xl">
          <FadeIn><SectionTitle eyebrow="Curated Stays" title="Our Hotel Partners" /></FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...hotels, ...hotels].map((h, i) => <HotelCard key={i} h={h} />)}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  );
}

export default Hotels;
