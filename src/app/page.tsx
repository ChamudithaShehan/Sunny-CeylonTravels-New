'use client';
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Search,
  Play,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Shield,
  Award,
  Heart,
  Compass,
  Sparkles,
  Instagram,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FadeIn,
  Stagger,
  SectionTitle,
  Counter,
  PageTransition,
  SafeImage,
  staggerItem,
} from "@/components/site/primitives";
import { TourCard, HotelCard, ReviewCard, BlogCard, VehicleCard } from "@/components/site/cards";
import {
  tours,
  destinations,
  hotels,
  reviews,
  blogPosts,
  vehicles,
  stats,
  trustedBy,
  activities,
  galleryImages,
  type Destination,
} from "@/data/mock";


function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-tea-plantation-in-sri-lanka-6913/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,118,110,0.25),transparent_60%)]" />

      <div className="relative z-10 container-x mx-auto max-w-7xl min-h-screen flex flex-col justify-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 self-start rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/90 mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 text-secondary" /> Voted #1 Luxury Operator · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-4xl text-balance"
        >
          Sri Lanka, <span className="italic text-secondary">artfully</span> curated.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-white/85"
        >
          Private guides, heritage stays, ancient wonders and untouched shores — designed by locals
          who know every hidden lane.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button
            size="lg"
            asChild
            className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 h-12 shadow-xl shadow-secondary/30"
          >
            <Link href="/tours">
              Book Your Journey <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-12 border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white backdrop-blur-md"
          >
            <Play className="mr-2 h-4 w-4" /> Watch Film
          </Button>
        </motion.div>

        {/* Search form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 md:mt-16 max-w-4xl rounded-2xl md:rounded-full glass p-3 md:p-2 shadow-2xl grid gap-2 md:gap-0 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center"
        >
          <label className="flex items-center gap-2 px-4 py-2.5 md:py-3 text-foreground min-w-0">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Destination
              </div>
              <input
                className="bg-transparent outline-none w-full text-sm font-medium"
                placeholder="Where to?"
                defaultValue="Sigiriya"
              />
            </div>
          </label>
          <label className="flex items-center gap-2 px-4 py-2.5 md:py-3 border-t md:border-t-0 md:border-l text-foreground min-w-0">
            <Calendar className="h-4 w-4 text-primary shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Dates
              </div>
              <input
                className="bg-transparent outline-none w-full text-sm font-medium"
                placeholder="Add dates"
                defaultValue="Mar 12 – Mar 19"
              />
            </div>
          </label>
          <label className="flex items-center gap-2 px-4 py-2.5 md:py-3 border-t md:border-t-0 md:border-l text-foreground min-w-0">
            <Users className="h-4 w-4 text-primary shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Guests
              </div>
              <input
                className="bg-transparent outline-none w-full text-sm font-medium"
                placeholder="2 adults"
                defaultValue="2 adults"
              />
            </div>
          </label>
          <Button
            type="submit"
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 h-12 px-6"
          >
            <Search className="h-4 w-4 md:mr-2" /> <span className="hidden md:inline">Search</span>
          </Button>
        </motion.form>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-dark rounded-2xl p-4 md:p-5">
              <div className="font-display text-2xl md:text-3xl font-bold text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[11px] uppercase tracking-widest text-white/70 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.3em] hidden md:block"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="py-14 border-b bg-background">
      <div className="container-x mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Featured & trusted by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16">
            {trustedBy.map((b) => (
              <span
                key={b}
                className="font-display text-lg md:text-xl font-semibold text-foreground/40 hover:text-foreground transition"
              >
                {b}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FeaturedTours() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Signature Journeys"
            title="Featured Tours"
            subtitle="Handpicked itineraries that capture the essence of Sri Lanka — from ancient kingdoms to hidden bays."
          />
        </FadeIn>
        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours
            .filter((t) => t.featured)
            .map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
        </Stagger>
        <div className="mt-14 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8">
            <Link href="/tours">
              Explore all tours <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function BentoTile({
  d,
  large = false,
  isElla = false,
  className = "",
}: {
  d: Destination;
  large?: boolean;
  isElla?: boolean;
  className?: string;
}) {
  const tileRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={tileRef}
      variants={staggerItem}
      className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-muted shadow-[0_0_0_1px_rgba(180,160,120,0.18)] ring-1 ring-inset ring-white/10 transition-shadow duration-500 hover:shadow-[0_0_0_1px_rgba(180,160,120,0.35)] ${className}`}
    >
      <div
        className={`relative overflow-hidden ${large ? "aspect-[16/10] sm:aspect-[16/9] md:aspect-auto md:h-full" : "aspect-[4/3] sm:aspect-[4/5] md:aspect-auto md:h-full"}`}
      >
        {isElla ? (
          <motion.div className="absolute inset-0 will-change-transform" style={{ y: parallaxY }}>
            <SafeImage
              src={d.image}
              alt={d.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
            />
          </motion.div>
        ) : (
          <SafeImage
            src={d.image}
            alt={d.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

        <motion.div
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 6, y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-auto md:max-w-[220px]"
        >
          <div className="px-3 py-2 md:px-4 md:py-3">
            <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.24em] text-white/90 font-semibold drop-shadow-md">
              {d.region}
            </div>
            <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white mt-0.5 leading-tight drop-shadow-md">
              {d.name}
            </h3>
            <p className="text-[11px] sm:text-xs text-white/80 mt-1 line-clamp-1 md:line-clamp-2 drop-shadow-md">
              {d.blurb}
            </p>
            <div className="mt-1.5 flex items-center">
              <span className="inline-flex items-center text-[10px] md:text-[11px] font-semibold text-white bg-white/20 backdrop-blur-md rounded-full px-2.5 py-0.5 shadow-sm">
                {d.tours} tour{d.tours !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PopularDestinations() {
  const ella = destinations.find((d) => d.name === "Ella")!;
  const sigiriya = destinations.find((d) => d.name === "Sigiriya")!;
  const galle = destinations.find((d) => d.name === "Galle")!;
  const kandy = destinations.find((d) => d.name === "Kandy")!;
  const mirissa = destinations.find((d) => d.name === "Mirissa")!;
  const yala = destinations.find((d) => d.name === "Yala")!;

  return (
    <section className="py-16 sm:py-20 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-10 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
            <SectionTitle
              eyebrow="Where to go"
              title="Popular Destinations"
              align="left"
              className="mb-0"
            />
            <Link
              href="/destinations"
              className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[minmax(200px,1fr)] md:gap-5">
          <BentoTile
            d={sigiriya}
            className="md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-1"
          />
          <BentoTile
            d={ella}
            large
            isElla
            className="md:col-start-4 md:col-span-6 md:row-start-1 md:row-span-2"
          />
          <BentoTile
            d={galle}
            className="md:col-start-10 md:col-span-3 md:row-start-1 md:row-span-1"
          />
          <BentoTile
            d={mirissa}
            className="md:col-start-1 md:col-span-3 md:row-start-2 md:row-span-1"
          />
          <BentoTile
            d={kandy}
            className="md:col-start-10 md:col-span-3 md:row-start-2 md:row-span-1"
          />
          <BentoTile
            d={yala}
            className="md:col-start-1 md:col-span-4 md:row-start-3 md:row-span-1"
          />
        </Stagger>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    {
      icon: Shield,
      title: "Trusted for 18 Years",
      text: "IATA & SLTDA licensed, with unbroken 5-star reviews since 2008.",
    },
    {
      icon: Award,
      title: "Award-Winning Craft",
      text: "Recognised by Condé Nast, T+L and BBC as a top Sri Lanka specialist.",
    },
    {
      icon: Heart,
      title: "Locally Rooted",
      text: "Every guide, driver and property partner is family we've worked with for years.",
    },
    {
      icon: Compass,
      title: "Truly Bespoke",
      text: "No cookie-cutter groups. Your itinerary is designed around you, alone.",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
        <FadeIn>
          <div className="relative">
            <SafeImage
              src="https://snslearninglk.com/wp-content/uploads/2026/03/Galle-Fort-Travel-Guide-2026.png"
              alt="Beautiful mountain landscape"
              loading="lazy"
              className="rounded-3xl shadow-2xl aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-4 md:-right-8 glass rounded-2xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <div className="font-display text-2xl font-bold">4.96 / 5</div>
              <div className="text-xs text-muted-foreground">2,140+ verified reviews</div>
            </div>
          </div>
        </FadeIn>
        <div>
          <FadeIn>
            <SectionTitle
              eyebrow="Why Sunny Ceylon"
              title="Luxury woven with sincerity."
              align="left"
              subtitle="We believe true luxury is the calm confidence that everything — every meal, every transfer, every sunrise — has been thought of."
            />
          </FadeIn>
          <Stagger className="mt-10 grid sm:grid-cols-2 gap-6">
            {items.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5">{text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function TourCategories() {
  const cats = [
    { name: "Cultural", image: "photo-1588598198321-9735fd52455b" },
    { name: "Beach", image: "photo-1507525428034-b723cf961d3e" },
    { name: "Wildlife", image: "photo-1516426122078-c23e76319801" },
    { name: "Wellness", image: "photo-1540555700478-4be289fbecef" },
    { name: "Adventure", image: "photo-1464822759023-fed622ff2c3b" },
    { name: "Honeymoon", image: "photo-1519741497674-611481863552" },
  ];
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container-x mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle
            eyebrow="By Experience"
            title="Tour Categories"
            subtitle="Whatever moves you — culture, coastline or canopy — we have a journey shaped for it."
          />
        </FadeIn>
        <Stagger className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {cats.map((c) => (
            <motion.button
              key={c.name}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <SafeImage
                src={`https://images.unsplash.com/${c.image}?auto=format&fit=crop&w=500&q=80`}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white font-display font-semibold text-lg text-left">
                {c.name}
              </div>
            </motion.button>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function SpecialOffers() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Limited Time"
            title="Special Offers"
            subtitle="Curated escapes with members-only savings — usually gone within a fortnight."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              tag: "Save 25%",
              title: "Southern Beach Escape",
              sub: "8 nights · Private villa · Book by 31 May",
              price: 1890,
              orig: 2520,
              image: "photo-1507525428034-b723cf961d3e",
            },
            {
              tag: "Free Upgrade",
              title: "Tea Country Rail",
              sub: "5 nights · Suite upgrade included",
              price: 1240,
              orig: 1490,
              image: "photo-1546484475-7f7bd55792da",
            },
            {
              tag: "Complimentary Spa",
              title: "Ayurveda Retreat",
              sub: "6 nights · Daily treatments",
              price: 1450,
              orig: 1650,
              image: "photo-1540555700478-4be289fbecef",
            },
          ].map((o, i) => (
            <FadeIn key={o.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg">
                <SafeImage
                  src={`https://images.unsplash.com/${o.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={o.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs font-semibold">
                  {o.tag}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-bold">{o.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{o.sub}</p>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <span className="text-xs text-white/60 line-through mr-2">${o.orig}</span>
                      <span className="font-display text-3xl font-bold">${o.price}</span>
                    </div>
                    <Button className="rounded-full bg-white text-foreground hover:bg-white/90">
                      Book
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdventureActivities() {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container-x mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle
            eyebrow="Do Something Wild"
            title="Adventure Activities"
            subtitle="Beyond the itinerary — add unforgettable moments."
          />
        </FadeIn>
        <Stagger className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {activities.map((a) => (
            <motion.div
              key={a.id}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="group rounded-2xl overflow-hidden bg-card shadow hover:shadow-lg transition"
            >
              <div className="relative aspect-square overflow-hidden">
                <SafeImage
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm">{a.name}</h3>
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{a.duration}</span>
                  <span className="font-bold text-primary">${a.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function LuxuryHotels() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <SectionTitle
              eyebrow="Where you'll rest"
              title="Luxury Hotels"
              align="left"
              className="mb-0"
            />
            <Link
              href="/hotels"
              className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hotels.map((h) => (
            <HotelCard key={h.id} h={h} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FleetPreview() {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container-x mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle
            eyebrow="On the Road"
            title="The Sunny Ceylon Fleet"
            subtitle="From chauffeured Mercedes sedans to safari-ready Land Cruisers."
          />
        </FadeIn>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function CustomerReviews() {
  const row1 = [...reviews, ...reviews, ...reviews, ...reviews];
  const row2 = [...reviews, ...reviews, ...reviews, ...reviews].reverse();

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
      <div className="container-x mx-auto max-w-7xl relative">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-secondary font-semibold mb-4">
              <span className="h-px w-8 bg-secondary/50" /> In their words{" "}
              <span className="h-px w-8 bg-secondary/50" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">
              Stories from our travellers
            </h2>
          </div>
        </FadeIn>
        
        <div className="relative mt-12 -mx-4 px-4 sm:mx-0 sm:px-0 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] flex flex-col gap-6 overflow-hidden">
          
          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-6">
            {row1.map((r, index) => (
              <div key={`r1-${index}`} className="w-[85vw] sm:w-[320px] lg:w-[360px] shrink-0">
                <ReviewCard r={r} />
              </div>
            ))}
          </div>

          <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] gap-6">
            {row2.map((r, index) => (
              <div key={`r2-${index}`} className="w-[85vw] sm:w-[320px] lg:w-[360px] shrink-0">
                <ReviewCard r={r} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function InstagramGrid() {
  const featuredGallery = [
    {
      src: galleryImages[0],
      title: "Sigiriya at sunrise",
      caption: "Ancient stone, soft light",
      span: "lg:col-span-5 lg:row-span-2",
      ratio: "aspect-[4/5]",
    },
    {
      src: galleryImages[1],
      title: "Tea country mood",
      caption: "Green hills and slow mornings",
      span: "lg:col-span-4",
      ratio: "aspect-[4/3]",
    },
    {
      src: galleryImages[2],
      title: "Coastline escape",
      caption: "Barefoot luxury by the sea",
      span: "lg:col-span-3 lg:row-span-2",
      ratio: "aspect-[3/4]",
    },
    {
      src: galleryImages[3],
      title: "Wildlife moments",
      caption: "Quiet encounters in the park",
      span: "lg:col-span-4",
      ratio: "aspect-[4/3]",
    },
    {
      src: "https://www.yogawinetravel.com/wp-content/uploads/2017/12/Lankathilaka-Polonnaruwa-Sri-Lanka-2-1-683x1024.jpg",
      title: "Fort textures",
      caption: "Old walls, modern wanderlust",
      span: "lg:col-span-4",
      ratio: "aspect-[4/3]",
    },
    {
      src: "https://www.bluelankatours.com/wp-content/uploads/2020/01/Evening_Pool_View_at_Anantara_Peace_Haven.jpg",
      title: "Poolside calm",
      caption: "Design details, made for lingered afternoons",
      span: "lg:col-span-4",
      ratio: "aspect-[4/3]",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-md">
              <Instagram className="h-4 w-4" /> @sunnyceylon
            </div>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold text-balance">
              Follow the journey
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg text-balance">
              A living mosaic of arrivals, coastlines, tea hills and heritage moments from recent
              guest journeys.
            </p>
          </div>
        </FadeIn>
        <div className="flex items-center overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:items-stretch md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 md:gap-5 lg:grid-cols-12 md:auto-rows-[minmax(0,1fr)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {featuredGallery.map((item, i) => (
            <motion.a
              key={item.src}
              href="/gallery"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`shrink-0 w-[85vw] sm:w-[60vw] snap-center md:w-auto md:shrink group relative overflow-hidden rounded-[1.75rem] bg-muted shadow-[0_18px_60px_-28px_rgba(15,23,42,0.45)] ${item.span}`}
            >
              <div className={`relative ${item.ratio} md:h-full`}>
                <SafeImage
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.18)_45%,rgba(15,23,42,0.72)_100%)] opacity-85 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-white/75">
                    <span className="h-px w-6 bg-secondary/80" /> Recent guest story
                  </div>
                  <h3 className="mt-3 font-display text-2xl md:text-[2rem] font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm md:text-base text-white/80">{item.caption}</p>
                </div>
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Tap to explore
                </div>
                <div className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/12 text-white backdrop-blur-md ring-1 ring-white/20 opacity-0 transition group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function TravelBlog() {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container-x mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <SectionTitle
              eyebrow="From the Journal"
              title="Stories & Guides"
              align="left"
              className="mb-0"
            />
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              All articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
        <Stagger className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((p) => (
            <BlogCard key={p.id} p={p} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Home() {
  return (
    <PageTransition>
      <Hero />
      <TrustedBy />
      <FeaturedTours />
      <PopularDestinations />
      <WhyChooseUs />
      <TourCategories />
      <SpecialOffers />
      <AdventureActivities />
      <LuxuryHotels />
      <FleetPreview />
      <CustomerReviews />
      <InstagramGrid />
      <TravelBlog />
    </PageTransition>
  );
}

export default Home;
