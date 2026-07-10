'use client';

import { useState } from "react";
import { PageTransition, PageHero, FadeIn, Stagger, SectionTitle } from "@/components/site/primitives";
import { TourCard } from "@/components/site/cards";
import { tours } from "@/data/mock";
import { Button } from "@/components/ui/button";

const CATS = ["All", "Cultural", "Scenic", "Beach", "Wildlife", "Wellness", "Adventure"];


function Tours() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? tours : tours.filter(t => t.category === cat);
  return (
    <PageTransition>
      <PageHero
        title="Tour packages, made for you."
        subtitle="Choose a signature journey — or use it as a starting point for something entirely bespoke."
        image="https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Tours" }]}
      />
      <section className="py-20">
        <div className="container-x mx-auto max-w-7xl">
          <FadeIn><SectionTitle eyebrow="Signature Journeys" title="Our Tour Collection" /></FadeIn>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {CATS.map(c => (
              <Button key={c} variant={cat === c ? "default" : "outline"}
                className={`rounded-full ${cat === c ? "bg-primary" : ""}`}
                onClick={() => setCat(c)}>{c}</Button>
            ))}
          </div>
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(t => <TourCard key={t.id} tour={t} />)}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  );
}

export default Tours;
