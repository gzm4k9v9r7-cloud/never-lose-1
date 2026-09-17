import { Container } from "@/components/ui/Container";
import { brand } from "@/config/brand";
import { Check } from "lucide-react";

const jobs = [
  "Answers calls",
  "Texts missed callers",
  "Books appointments",
  "Follows up on estimates",
  "Sends deposit links",
  "Follows up on invoices",
  "Reactivates previous customers",
];

export function OneEmployee() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-gradient-to-br from-accent-blue/5 to-success/10 p-10 sm:p-14">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              {brand.oneEmployeeLine}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-body">
              {brand.oneEmployeeSubcopy}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {jobs.map((job) => (
              <div key={job} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                <Check size={16} className="shrink-0 text-success" />
                <span className="text-sm text-navy">{job}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
