'use client';
import Link from "next/link";
import { PageTransition, PageHero, FadeIn, Stagger, SectionTitle, Counter } from "@/components/site/primitives";
import { Award, Heart, Leaf, Users, Compass, Sparkles } from "lucide-react";
import { stats } from "@/data/mock";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


const timeline = [
  { year: "2008", title: "A Family Dream", text: "Founder Nimal Perera guides his first guests through Sigiriya at sunrise." },
  { year: "2013", title: "Boutique Beginnings", text: "First office opens in Colombo. We begin curating heritage-hotel stays." },
  { year: "2018", title: "Global Recognition", text: "Named one of the world's top Sri Lanka specialists by Condé Nast Traveller." },
  { year: "2022", title: "Carbon-Positive", text: "Our tours become carbon-positive through partnerships with local reforestation projects." },
  { year: "2026", title: "12,000 Journeys", text: "We celebrate our 12,000th traveller — and are just getting started." },
];

const values = [
  { icon: Heart, title: "Warmth first", text: "We greet every traveller as family. It's the Sri Lankan way." },
  { icon: Leaf, title: "Regenerative travel", text: "Every tour funds reforestation and community education." },
  { icon: Compass, title: "Local mastery", text: "Our team lives here. We know the roads, the seasons, the secrets." },
  { icon: Sparkles, title: "Quiet luxury", text: "Understated excellence — never showy, always considered." },
];

function About() {
  return (
    <PageTransition>
      <PageHero
        title="Crafted by locals, loved by the world."
        subtitle="For nearly two decades we've shaped bespoke journeys through the island we call home."
        image="https://images.unsplash.com/photo-1602898430243-9b7dfaeae7e7?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="py-24">
        <div className="container-x mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 items-center">
          <FadeIn>
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
              alt="Sri Lankan hospitality" loading="lazy"
              className="rounded-3xl shadow-xl aspect-[4/5] object-cover w-full" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="text-xs uppercase tracking-[0.28em] text-primary font-semibold mb-4">Our Story</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">A journey that began on a rock in the jungle.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Sunny Ceylon Travels was born in 2008 when Nimal Perera — a fifth-generation Kandyan and lifelong storyteller — guided a small family through the Cultural Triangle. That family wrote home that they had discovered "the guide of a lifetime." The letters kept coming.</p>
              <p>Today we are a team of 42 designers, chauffeur-guides, concierges and creatives, quietly building the finest bespoke journeys in Sri Lanka.</p>
              <p>We believe true luxury is not marble bathrooms — it's the calm certainty that everything has been thought of, so you can simply be present.</p>
            </div>
            <Button asChild className="mt-8 rounded-full bg-secondary hover:bg-secondary/90 h-12 px-8">
              <Link href="/contact">Speak to a specialist</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container-x mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <FadeIn key={s.label}>
              <div className="font-display text-4xl md:text-6xl font-bold text-secondary"><Counter to={s.value} suffix={s.suffix} /></div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/80">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-x mx-auto max-w-6xl">
          <FadeIn><SectionTitle eyebrow="Milestones" title="Our Timeline" /></FadeIn>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {timeline.map((m, i) => (
                <FadeIn key={m.year}>
                  <div className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="md:w-1/2 pl-12 md:pl-0">
                      <div className={`p-6 rounded-2xl bg-card border shadow-sm ${i % 2 === 0 ? "md:text-right" : ""}`}>
                        <div className="font-display text-3xl font-bold text-primary">{m.year}</div>
                        <h3 className="font-display text-xl font-semibold mt-1">{m.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{m.text}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-secondary ring-4 ring-background" />
                    <div className="md:w-1/2" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container-x mx-auto max-w-6xl">
          <FadeIn><SectionTitle eyebrow="What We Stand For" title="Our Values" /></FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <motion.div key={title} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="p-8 rounded-2xl bg-card border shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4"><Icon className="h-5 w-5" /></div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x mx-auto max-w-6xl">
          <FadeIn><SectionTitle eyebrow="The Team" title="Faces behind the magic" /></FadeIn>
          <Stagger className="grid gap-8 grid-cols-2 md:grid-cols-4">
            {[
              { name: "Nimal Perera", role: "Founder & CEO", img: "photo-1560250097-0b93528c311a" },
              { name: "Ayesha Silva", role: "Head of Design", img: "photo-1580489944761-15a19d654956" },
              { name: "Ravi Fernando", role: "Guest Experience", img: "photo-1507003211169-0a1dd7228f2d" },
              { name: "Nadia Weeraratne", role: "Sustainability", img: "photo-1573496359142-b8d87734a5a2" },
            ].map(m => (
              <motion.div key={m.name} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-center">
                <div className="aspect-square overflow-hidden rounded-3xl mb-4">
                  <img src={`https://images.unsplash.com/${m.img}?auto=format&fit=crop&w=600&q=80`} alt={m.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <h3 className="font-display text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  );
}

export default About;
