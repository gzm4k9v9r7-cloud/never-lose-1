import clsx from "clsx";
import type { ConversationMessage } from "@/types/domain";

function bubbleStyle(role: ConversationMessage["role"]) {
  switch (role) {
    case "customer":
      return "ml-auto bg-surface-alt text-navy";
    case "ai":
      return "mr-auto bg-gradient-accent text-white";
    case "staff":
      return "mr-auto bg-success-soft text-success";
    case "system":
    default:
      return "mx-auto bg-transparent text-slate-muted text-xs italic";
  }
}

export function ConversationThread({ messages }: { messages: ConversationMessage[] }) {
  return (
    <div className="space-y-3">
      {messages.map((message) => (
        <div
          key={message.id}
          className={clsx(
            "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
            bubbleStyle(message.role)
          )}
        >
          {message.role !== "system" && (
            <p className="mb-0.5 text-[10px] uppercase tracking-wide opacity-70">
              {message.role === "ai" ? "NeverLose AI" : message.role}
              {" · "}
              {message.channel}
            </p>
          )}
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}
