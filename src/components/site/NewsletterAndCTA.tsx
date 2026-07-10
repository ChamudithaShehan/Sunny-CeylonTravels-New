"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn, SafeImage } from "@/components/site/primitives";

export function Newsletter() {
  return (
    <section className="py-24 md:py-32 border-t border-border/50">
      <div className="container-x mx-auto max-w-4xl text-center">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-10 md:p-16 text-primary-foreground shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
            <div className="relative">
              <Sparkles className="mx-auto h-8 w-8 text-secondary mb-4" />
              <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">
                Join the Sunny Ceylon Club
              </h2>
              <p className="mt-4 text-white/85 max-w-xl mx-auto">
                Monthly stories, insider itineraries and members-only offers. No spam. Ever.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 flex flex-col sm:flex-row max-w-lg mx-auto gap-2"
              >
                <Input
                  placeholder="you@email.com"
                  className="bg-white/10 border-white/25 text-white placeholder:text-white/60 h-12 rounded-full px-6"
                />
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full h-12 px-8 shrink-0"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <SafeImage
        src="https://5.imimg.com/data5/EN/QW/GLADMIN-62515817/kanyakumari-tour-package-service-1000x1000.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      <div className="relative container-x mx-auto max-w-7xl text-white">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
              Your Sri Lanka story begins here.
            </h2>
            <p className="mt-5 text-white/85 text-lg">
              Speak to a specialist. No obligation, just inspiration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-secondary hover:bg-secondary/90 h-12 px-8"
              >
                <Link href="/contact">Plan my journey</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 border-white/40 text-white bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-md"
              >
                <Link href="/tours">Browse tours</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
