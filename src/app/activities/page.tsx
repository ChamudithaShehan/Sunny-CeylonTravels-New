'use client';

import { PageTransition, PageHero, FadeIn, Stagger, SectionTitle, staggerItem } from "@/components/site/primitives";
import { activities } from "@/data/mock";
import { motion } from "framer-motion";


function Activities() {
  return (
    <PageTransition>
      <PageHero
        title="Adventures worth the pause."
        subtitle="Add unforgettable moments to any journey — from dawn balloon rides to leopard tracking."
        image="https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Activities" }]}
      />
      <section className="py-20">
        <div className="container-x mx-auto max-w-7xl">
          <FadeIn><SectionTitle eyebrow="Add-ons" title="Signature Activities" /></FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map(a => (
              <motion.div key={a.id} variants={staggerItem} className="group rounded-2xl overflow-hidden bg-card shadow hover:shadow-xl transition">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{a.name}</h3>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{a.duration} experience</span>
                    <span className="font-display font-bold text-primary text-xl">${a.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  );
}

export default Activities;
