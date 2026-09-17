import { Container } from "@/components/ui/Container";
import { brand } from "@/config/brand";

export function OneEmployee() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-gradient-to-br from-accent-blue/5 to-success/10 p-10 text-center sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {brand.oneEmployeeLine}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-body">
            {brand.oneEmployeeSubcopy}
          </p>
        </div>
      </Container>
    </section>
  );
}
