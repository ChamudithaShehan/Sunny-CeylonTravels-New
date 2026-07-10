"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, ArrowRight, Users, Quote } from "lucide-react";
import type { Tour, Destination, Hotel, Review, BlogPost, Vehicle } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import { SafeImage, staggerItem } from "./primitives";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <motion.article variants={staggerItem} className="group relative overflow-hidden rounded-2xl bg-card shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_-15px_rgba(15,118,110,0.25)] transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <SafeImage src={tour.image} alt={tour.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute top-4 left-4 bg-white/95 text-foreground hover:bg-white">{tour.category}</Badge>
        <div className="absolute top-4 right-4 rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-xs text-white flex items-center gap-1">
          <Star className="h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" /> {tour.rating}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-1 text-xs opacity-90 mb-1">
            <MapPin className="h-3 w-3" /> {tour.location}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">{tour.title}</h3>
        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {tour.days}D / {tour.nights}N</span>
          <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {tour.reviews} reviews</span>
        </div>
        <div className="mt-5 flex items-center justify-between border-t pt-4">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">From</div>
            <div className="font-display text-2xl font-bold text-primary">${tour.price.toLocaleString()}</div>
          </div>
          <Link href="/tours" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
            Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function DestinationCard({ d }: { d: Destination }) {
  return (
    <motion.div variants={staggerItem} className="group relative aspect-[3/4] overflow-hidden rounded-3xl">
      <SafeImage src={d.image} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="text-[10px] uppercase tracking-[0.24em] text-white/70">{d.region}</div>
        <h3 className="font-display text-3xl font-bold mt-1">{d.name}</h3>
        <p className="text-sm text-white/80 mt-2 line-clamp-2">{d.blurb}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs bg-white/15 backdrop-blur px-3 py-1 rounded-full">{d.tours} tours</span>
          <Link href="/destinations" className="text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </motion.div>
  );
}

export function HotelCard({ h }: { h: Hotel }) {
  return (
    <motion.div variants={staggerItem} className="group overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition">
      <div className="relative aspect-[16/10] overflow-hidden">
        <SafeImage src={h.image} alt={h.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-3 left-3 flex gap-0.5">
          {Array.from({ length: h.stars }).map((_, i) => <Star key={i} className="h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" />)}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold truncate">{h.name}</h3>
            <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="h-3 w-3" />{h.location}</div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[10px] uppercase text-muted-foreground">Night</div>
            <div className="font-display font-bold text-primary">${h.price}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ReviewCard({ r }: { r: Review }) {
  return (
    <motion.div variants={staggerItem} className="relative rounded-2xl bg-card p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col overflow-hidden group">
      <div className="absolute top-0 right-0 -mr-6 -mt-6 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.05]">
        <Quote className="h-32 w-32" />
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />)}
        </div>
        <p className="text-foreground/80 font-serif text-sm leading-relaxed flex-1">"{r.text}"</p>
        <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border/50">
          <SafeImage src={r.avatar} alt={r.name} loading="lazy" className="h-10 w-10 rounded-full object-cover ring-2 ring-background shadow-sm" />
          <div>
            <div className="font-semibold text-xs">{r.name}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{r.country} · {r.tour}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function BlogCard({ p }: { p: BlogPost }) {
  return (
    <motion.article variants={staggerItem} className="group overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition">
      <div className="relative aspect-[16/10] overflow-hidden">
        <SafeImage src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <Badge className="absolute top-4 left-4 bg-white/95 text-foreground">{p.category}</Badge>
      </div>
      <div className="p-6">
        <div className="text-xs text-muted-foreground mb-2">{p.date} · {p.readTime} min read</div>
        <h3 className="font-display text-xl font-semibold leading-snug group-hover:text-primary transition line-clamp-2">{p.title}</h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.excerpt}</p>
        <Link href="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read more <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </motion.article>
  );
}

export function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <motion.div variants={staggerItem} className="group overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <SafeImage src={v.image} alt={v.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="text-xs text-muted-foreground">{v.type}</div>
        <h3 className="font-display text-lg font-semibold">{v.name}</h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {v.features.map(f => <span key={f} className="text-[10px] uppercase tracking-wider bg-muted rounded-full px-2 py-1">{f}</span>)}
        </div>
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div className="text-xs text-muted-foreground flex items-center gap-1"><Users className="h-3.5 w-3.5" />{v.seats} seats</div>
          <div className="font-display font-bold text-primary">${v.pricePerDay}<span className="text-xs text-muted-foreground font-sans">/day</span></div>
        </div>
      </div>
    </motion.div>
  );
}
