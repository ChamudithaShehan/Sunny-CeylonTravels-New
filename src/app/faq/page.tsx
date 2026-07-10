
import { PageTransition, PageHero, FadeIn, SectionTitle } from "@/components/site/primitives";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/mock";


function FAQ() {
  return (
    <PageTransition>
      <PageHero
        title="Questions, answered."
        subtitle="Everything you might want to know before your Sri Lanka journey."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <section className="py-20">
        <div className="container-x mx-auto max-w-3xl">
          <FadeIn><SectionTitle eyebrow="Help" title="Frequently Asked Questions" /></FadeIn>
          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b py-2">
                  <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline hover:text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}

export default FAQ;
