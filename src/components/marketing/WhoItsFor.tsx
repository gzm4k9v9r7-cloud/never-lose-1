import { Container } from "@/components/ui/Container";
import { industries } from "@/config/industries";

export function WhoItsFor() {
  return (
    <section id="industries" className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Built for every kind of service business
          </h2>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {industries.map((industry) => (
            <span
              key={industry.id}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-navy"
            >
              {industry.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
