
import { PageTransition, PageHero, FadeIn, Stagger, SectionTitle } from "@/components/site/primitives";
import { ReviewCard } from "@/components/site/cards";
import { reviews } from "@/data/mock";


function Testimonials() {
  return (
    <PageTransition>
      <PageHero
        title="In their words."
        subtitle="Every review is unedited and unpaid. Every one is a family story."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Testimonials" }]}
      />
      <section className="py-20 bg-muted/30">
        <div className="container-x mx-auto max-w-7xl">
          <FadeIn><SectionTitle eyebrow="4.96 / 5" title="Stories from our travellers" /></FadeIn>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...reviews, ...reviews, ...reviews].map((r, i) => <ReviewCard key={i} r={r} />)}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  );
}

export default Testimonials;
