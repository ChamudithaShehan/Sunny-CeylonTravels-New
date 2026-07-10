"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function FadeIn({ children, delay = 0, y = 24, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >{children}</motion.div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      className={className}
    >{children}</motion.div>
  );
}
export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function SectionTitle({
  eyebrow, title, subtitle, align = "center", className,
}: { eyebrow?: string; title: string; subtitle?: string; align?: "center" | "left"; className?: string }) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl", className)}>
      {eyebrow && (
        <div className={cn("inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-primary font-semibold mb-4")}>
          <span className="h-px w-8 bg-primary/50" /> {eyebrow} <span className="h-px w-8 bg-primary/50" />
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-balance leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg text-balance">{subtitle}</p>}
    </div>
  );
}

export function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, v => Math.floor(v).toLocaleString());
  const [val, setVal] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    const unsub = rounded.on("change", v => setVal(v));
    return () => { controls.stop(); unsub(); };
  }, [inView, to, duration, mv, rounded]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-primary">Home</Link>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5" />
          {it.to ? <Link href={it.to}>{it.label}</Link> : <span className="text-foreground">{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({ title, subtitle, image, breadcrumbs }: { title: string; subtitle?: string; image: string; breadcrumbs?: { label: string; to?: string }[] }) {
  return (
    <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
      <SafeImage src={image} alt="" loading="eager" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 h-full container-x mx-auto max-w-7xl flex flex-col justify-end pb-14 pt-32 text-white">
        {breadcrumbs && (
          <div className="mb-4 text-white/80">
            <nav className="flex items-center gap-1 text-xs">
              <Link href="/" className="hover:text-white">Home</Link>
              {breadcrumbs.map((b, i) => (
                <span key={i} className="flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  {b.to ? <Link href={b.to}>{b.label}</Link> : <span>{b.label}</span>}
                </span>
              ))}
            </nav>
          </div>
        )}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl font-bold max-w-3xl text-balance">{title}</motion.h1>
        {subtitle && <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-white/85 max-w-2xl text-base md:text-lg">{subtitle}</motion.p>}
      </div>
    </section>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.main>
  );
}

const fallbackPhotoSrc = "/fallback-photo.svg";

export function SafeImage({
  src,
  alt,
  className,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      onError={() => {
        if (currentSrc !== fallbackPhotoSrc) {
          setCurrentSrc(fallbackPhotoSrc);
        }
      }}
      className={className}
    />
  );
}
