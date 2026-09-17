"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartColors } from "@/config/brand";
import type { DailyMetric } from "@/lib/demo";

export function LeadActivityChart({ data }: { data: DailyMetric[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }} barGap={3}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
          <XAxis
            dataKey="date"
            tick={{ fill: "#8B93A7", fontSize: 12 }}
            axisLine={{ stroke: chartColors.grid }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#8B93A7", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
            width={32}
          />
          <Tooltip
            contentStyle={{
              background: "#1B1F2E",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              fontSize: 12,
            }}
            labelStyle={{ color: "#fff" }}
          />
          <Legend iconType="circle" wrapperStyle={{ fontSize: 12, color: "#8B93A7" }} />
          <Bar dataKey="callsReceived" name="Calls Received" fill={chartColors.callsReceived} radius={[4, 4, 0, 0]} />
          <Bar dataKey="callsRecovered" name="Calls Recovered" fill={chartColors.callsRecovered} radius={[4, 4, 0, 0]} />
          <Bar dataKey="spamBlocked" name="Spam Blocked" fill={chartColors.spamBlocked} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
