"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#0b1220] text-white/80 mt-24">
      <div className="container-x mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-xl font-bold text-white">Sunny Ceylon</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Travels</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Crafting bespoke luxury journeys through the wonders of Sri Lanka since 2008. Locally rooted, globally trusted.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +94 11 234 5678</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@sunnyceylon.travel</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 42 Galle Face Terrace, Colombo 03</div>
            </div>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-primary transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-display text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[["About","/about"],["Destinations","/destinations"],["Tours","/tours"],["Blog","/blog"],["FAQ","/faq"],["Contact","/contact"]].map(([l,h]) => (
                <li key={l}><Link href={h}>{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-display text-white text-lg mb-4">Popular Tours</h4>
            <ul className="space-y-2 text-sm">
              {["Cultural Triangle","Tea Country Rail","Southern Beaches","Yala Safari","Ayurveda Retreat"].map(t => (
                <li key={t}><Link href="/tours" className="hover:text-primary transition">{t}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="font-display text-white text-lg mb-4">Newsletter</h4>
            <p className="text-sm mb-3">Monthly stories & members-only offers.</p>
            <form onSubmit={e => e.preventDefault()} className="flex gap-2">
              <Input placeholder="you@email.com" className="bg-white/10 border-white/15 text-white placeholder:text-white/50" />
              <Button size="icon" className="bg-secondary hover:bg-secondary/90 shrink-0" aria-label="Subscribe"><Send className="h-4 w-4" /></Button>
            </form>
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://maps.google.com/maps?q=Colombo,%20Sri%20Lanka&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="aspect-[16/9] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left">
          <div>© {new Date().getFullYear()} Sunny Ceylon Travels. All rights reserved.</div>
          <div>Development by <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-2">Brain<span className="text-[var(--gold)]">t</span>isa</a></div>
          <div className="flex justify-center gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
