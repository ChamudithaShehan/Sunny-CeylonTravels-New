
import { PageTransition, PageHero, FadeIn } from "@/components/site/primitives";


function Privacy() {
  return (
    <PageTransition>
      <PageHero title="Privacy Policy" subtitle="Last updated: 1 January 2026"
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "Privacy" }]} />
      <section className="py-20">
        <div className="container-x mx-auto max-w-3xl prose prose-neutral">
          <FadeIn>
            <div className="space-y-6 text-foreground/85 leading-relaxed">
              <p>Sunny Ceylon Travels ("we", "us") respects your privacy. This policy explains what personal data we collect when you plan a journey with us, how we use it, and the rights you have over it.</p>
              <h2 className="font-display text-2xl font-bold pt-4">Information we collect</h2>
              <p>Contact details, travel preferences, passport details required for bookings, and any special requirements you share with your specialist.</p>
              <h2 className="font-display text-2xl font-bold pt-4">How we use your information</h2>
              <p>Only to design, deliver and support your journey — and, with your consent, to send occasional updates about new experiences.</p>
              <h2 className="font-display text-2xl font-bold pt-4">Sharing</h2>
              <p>We share only what is necessary with the hotels, airlines and partners fulfilling your booking. We never sell your data.</p>
              <h2 className="font-display text-2xl font-bold pt-4">Your rights</h2>
              <p>You may access, correct or delete your personal data at any time by writing to privacy@sunnyceylon.travel.</p>
              <h2 className="font-display text-2xl font-bold pt-4">Cookies</h2>
              <p>We use minimal, functional cookies to improve your browsing experience. No advertising trackers.</p>
              <p className="text-sm text-muted-foreground pt-6">Questions? Write to us at privacy@sunnyceylon.travel.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}

export default Privacy;
