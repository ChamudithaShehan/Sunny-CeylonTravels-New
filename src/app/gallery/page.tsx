'use client';

import { PageTransition, PageHero } from "@/components/site/primitives";
import { galleryImages } from "@/data/mock";
import { motion } from "framer-motion";


function Gallery() {
  return (
    <PageTransition>
      <PageHero
        title="A moment, a memory."
        subtitle="Sri Lanka through the lens of our travellers and guides."
        image="https://images.unsplash.com/photo-1580835845083-2adcd8ee6291?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <section className="py-20">
        <div className="container-x mx-auto max-w-7xl">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {[...galleryImages, ...galleryImages].map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl group">
                <img src={src} alt="Sri Lanka" loading="lazy" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Gallery;
