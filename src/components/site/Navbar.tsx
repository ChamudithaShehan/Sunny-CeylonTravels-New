"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Globe, DollarSign, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Tours", to: "/tours" },
  { label: "Hotels", to: "/hotels" },
  { label: "Activities", to: "/activities" },
  { label: "Fleet", to: "/fleet" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [ccy, setCcy] = useState("USD");
  const pathname = usePathname();
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overHero;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_-15px_rgba(0,0,0,0.15)]" : "bg-transparent",
        )}
      >
        <div className="container-x mx-auto max-w-7xl flex h-18 md:h-20 items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg transition-transform group-hover:scale-105")}>
              <MapPin className="h-5 w-5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={cn("font-display text-lg md:text-xl font-bold tracking-tight", solid ? "text-foreground" : "text-white")}>Sunny Ceylon</span>
              <span className={cn("text-[10px] uppercase tracking-[0.2em]", solid ? "text-muted-foreground" : "text-white/70")}>Travels</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.slice(0, 8).map(n => (
              <Link
                key={n.to}
                href={n.to}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  solid ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white",
                  pathname === n.to && (solid ? "text-primary" : "text-white")
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            <Button variant="ghost" size="icon" aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className={cn(solid ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white")}>
              <Search className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className={cn("hidden md:inline-flex gap-1", solid ? "" : "text-white hover:bg-white/10 hover:text-white")} aria-label="Language">
                  <Globe className="h-4 w-4" /> {lang}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {["EN", "FR", "DE", "中文", "日本語"].map(l => (
                  <DropdownMenuItem key={l} onSelect={() => setLang(l)}>{l}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className={cn("hidden md:inline-flex gap-1", solid ? "" : "text-white hover:bg-white/10 hover:text-white")} aria-label="Currency">
                  <DollarSign className="h-4 w-4" /> {ccy}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {["USD", "EUR", "GBP", "AUD", "LKR"].map(c => (
                  <DropdownMenuItem key={c} onSelect={() => setCcy(c)}>{c}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-5 shadow-md">
              <Link href="/contact">Book Now</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("lg:hidden", solid ? "" : "text-white hover:bg-white/10 hover:text-white")} aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] sm:w-96">
                <div className="flex flex-col gap-1 pt-8">
                  {NAV.map(n => (
                    <Link key={n.to} href={n.to} className="px-3 py-3 text-base font-medium rounded-md hover:bg-muted transition">
                      {n.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 bg-secondary hover:bg-secondary/90 rounded-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-start justify-center pt-32 px-4"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
              className="w-full max-w-2xl bg-card rounded-2xl shadow-2xl border p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input autoFocus placeholder="Search destinations, tours, experiences…" className="flex-1 bg-transparent outline-none text-lg" />
                <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)} aria-label="Close search"><X className="h-5 w-5" /></Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Sigiriya","Ella","Galle","Yala Safari","Ayurveda","Whale Watching"].map(s => (
                  <button key={s} className="rounded-full border px-3 py-1 text-xs hover:bg-muted transition">{s}</button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
