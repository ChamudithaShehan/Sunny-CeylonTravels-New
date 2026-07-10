
import { PageTransition, PageHero, FadeIn, Stagger, SectionTitle } from "@/components/site/primitives";
import { BlogCard } from "@/components/site/cards";
import { blogPosts } from "@/data/mock";


function Blog() {
  return (
    <PageTransition>
      <PageHero
        title="Stories from the island."
        subtitle="Insider guides, seasonal recommendations and tales from our travellers."
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Journal" }]}
      />
      <section className="py-20">
        <div className="container-x mx-auto max-w-7xl">
          <FadeIn><SectionTitle eyebrow="Latest" title="From the Journal" /></FadeIn>
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...blogPosts, ...blogPosts].map((p, i) => <BlogCard key={i} p={p} />)}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  );
}

export default Blog;
