import { Container } from "@/components/ui/Container";
import { industries } from "@/config/industries";

const colors = [
  "border-cat-blue/30 text-cat-blue",
  "border-cat-orange/30 text-cat-orange",
  "border-cat-aqua/30 text-cat-aqua",
  "border-cat-violet/30 text-cat-violet",
];

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
          {industries.map((industry, i) => (
            <span
              key={industry.id}
              className={`rounded-full border bg-surface px-4 py-2 text-sm font-medium ${colors[i % colors.length]}`}
            >
              {industry.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
