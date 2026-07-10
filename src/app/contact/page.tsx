"use client";


import { PageTransition, PageHero, FadeIn } from "@/components/site/primitives";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";


function Contact() {
  return (
    <PageTransition>
      <PageHero
        title="Let's design your journey."
        subtitle="Send us a note or call our Colombo studio — we reply within one business day."
        image="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="py-20">
        <div className="container-x mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn>
            <div className="text-xs uppercase tracking-[0.28em] text-primary font-semibold mb-3">Get in touch</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">We'd love to hear from you.</h2>
            <p className="mt-4 text-muted-foreground">Every journey begins with a conversation. Share a few details and a specialist will craft your bespoke itinerary.</p>
            <div className="mt-8 space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "+94 11 234 5678" },
                { icon: Mail, label: "Email", value: "hello@sunnyceylon.travel" },
                { icon: MapPin, label: "Studio", value: "42 Galle Face Terrace, Colombo 03" },
                { icon: Clock, label: "Hours", value: "Mon–Sat · 9:00 – 19:00 IST" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 aspect-[16/10] rounded-2xl overflow-hidden border">
              <iframe
                title="Colombo map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.8,6.9,79.87,6.94&layer=mapnik"
                className="w-full h-full" loading="lazy"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form
              onSubmit={e => { e.preventDefault(); toast.success("Thank you! We'll be in touch within one business day."); (e.target as HTMLFormElement).reset(); }}
              className="rounded-3xl bg-card border p-8 md:p-10 shadow-lg"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div><Label htmlFor="fn">First name</Label><Input id="fn" required className="mt-2" /></div>
                <div><Label htmlFor="ln">Last name</Label><Input id="ln" required className="mt-2" /></div>
                <div><Label htmlFor="em">Email</Label><Input id="em" type="email" required className="mt-2" /></div>
                <div><Label htmlFor="ph">Phone</Label><Input id="ph" type="tel" className="mt-2" /></div>
                <div className="sm:col-span-2"><Label htmlFor="dst">Dream destination</Label><Input id="dst" placeholder="Sigiriya, Ella, Galle…" className="mt-2" /></div>
                <div><Label htmlFor="tr">Travellers</Label><Input id="tr" type="number" min={1} defaultValue={2} className="mt-2" /></div>
                <div><Label htmlFor="dt">Approx dates</Label><Input id="dt" placeholder="Mar 2026" className="mt-2" /></div>
                <div className="sm:col-span-2"><Label htmlFor="msg">Tell us about your dream trip</Label><Textarea id="msg" rows={5} className="mt-2" /></div>
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full rounded-full bg-secondary hover:bg-secondary/90 h-12">Send enquiry</Button>
              <p className="mt-4 text-xs text-muted-foreground text-center">By submitting you agree to our privacy policy.</p>
            </form>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}

export default Contact;
