"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartColors } from "@/config/brand";
import { formatCurrency } from "@/lib/format";
import type { DailyMetric } from "@/lib/demo";

export function RevenueChart({ data }: { data: DailyMetric[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={chartColors.revenueRecovered} stopOpacity={0.35} />
              <stop offset="100%" stopColor={chartColors.revenueRecovered} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="potentialFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={chartColors.potentialRevenue} stopOpacity={0.3} />
              <stop offset="100%" stopColor={chartColors.potentialRevenue} stopOpacity={0} />
            </linearGradient>
          </defs>
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
            tickFormatter={(v: number) => `$${v}`}
            width={56}
          />
          <Tooltip
            contentStyle={{
              background: "#1B1F2E",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              fontSize: 12,
            }}
            labelStyle={{ color: "#fff" }}
            formatter={(value, name) => [formatCurrency(Number(value)), String(name)]}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{ fontSize: 12, color: "#8B93A7" }}
          />
          <Area
            type="monotone"
            dataKey="revenueRecovered"
            name="Revenue Recovered"
            stroke={chartColors.revenueRecovered}
            strokeWidth={2}
            fill="url(#revenueFill)"
          />
          <Area
            type="monotone"
            dataKey="potentialRevenue"
            name="Potential Revenue"
            stroke={chartColors.potentialRevenue}
            strokeWidth={2}
            fill="url(#potentialFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
