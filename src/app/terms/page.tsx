
import { PageTransition, PageHero, FadeIn } from "@/components/site/primitives";


function Terms() {
  return (
    <PageTransition>
      <PageHero title="Terms & Conditions" subtitle="Last updated: 1 January 2026"
        image="https://images.unsplash.com/photo-1602898430243-9b7dfaeae7e7?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Terms" }]} />
      <section className="py-20">
        <div className="container-x mx-auto max-w-3xl">
          <FadeIn>
            <div className="space-y-6 text-foreground/85 leading-relaxed">
              <p>These terms govern all bookings made with Sunny Ceylon Travels (Pvt) Ltd. By confirming a booking you agree to these terms.</p>
              <h2 className="font-display text-2xl font-bold pt-4">Booking & payment</h2>
              <p>A 25% deposit is required to confirm your booking. The balance is due 60 days before arrival.</p>
              <h2 className="font-display text-2xl font-bold pt-4">Cancellations</h2>
              <p>Cancellations more than 60 days before arrival receive a full refund less a 10% administration fee. Later cancellations follow the schedule shared at booking.</p>
              <h2 className="font-display text-2xl font-bold pt-4">Insurance</h2>
              <p>Comprehensive travel insurance is mandatory and the traveller's responsibility.</p>
              <h2 className="font-display text-2xl font-bold pt-4">Force majeure</h2>
              <p>We are not liable for events outside our reasonable control including natural disasters, epidemics, strikes or political unrest.</p>
              <h2 className="font-display text-2xl font-bold pt-4">Governing law</h2>
              <p>These terms are governed by the laws of Sri Lanka.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}

export default Terms;
