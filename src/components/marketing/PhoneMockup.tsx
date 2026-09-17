import { Phone, PhoneOff, BarChart3 } from "lucide-react";

/** Purely illustrative static mockup — not wired to the live demo dataset. */
export function PhoneMockup() {
  return (
    <div className="w-[190px] rounded-[2.5rem] border-4 border-white/10 bg-surface-dark p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
      <div className="rounded-[2rem] bg-gradient-to-b from-[#141a2b] to-surface-dark px-5 py-8 text-center">
        <div className="mx-auto mb-6 flex items-center justify-center gap-1.5 text-white">
          <BarChart3 size={16} className="text-accent-blue" />
          <span className="text-sm font-semibold">NeverLose</span>
        </div>

        <p className="text-sm font-medium text-white">AI Answering</p>
        <p className="mt-1 text-xs text-white/60">Customer Call</p>

        <div className="my-8 flex justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-blue/20 text-accent-blue">
            <Phone size={24} />
          </span>
        </div>

        <p className="text-[11px] leading-relaxed text-white/50">
          NeverLose is answering so you never miss a customer.
        </p>

        <div className="mt-8 flex justify-center gap-8">
          <div className="flex flex-col items-center gap-1.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-danger">
              <PhoneOff size={18} className="text-white" />
            </span>
            <span className="text-[10px] text-white/50">Decline</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-success">
              <Phone size={18} className="text-white" />
            </span>
            <span className="text-[10px] text-white/50">Accept</span>
          </div>
        </div>
      </div>
    </div>
  );
}
