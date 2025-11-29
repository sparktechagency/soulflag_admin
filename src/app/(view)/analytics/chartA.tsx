"use client";

import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { week: "Week 1", lastMonth: 35000, nextMonth: 10000 },
  { week: "Week 2", lastMonth: 36500, nextMonth: 18000 },
  { week: "Week 3", lastMonth: 38000, nextMonth: 37000 },
  { week: "Week 4", lastMonth: 39000, nextMonth: 32000 },
  { week: "Week 5", lastMonth: 42000, nextMonth: 48000 },
];

const lastMonthTotal = 184329;
const nextMonthTotal = 203782;

export default function ChartA() {
  return (
    <div className="w-full mt-6">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">
                Income Comparison — Last Month vs Next Month Potential
              </CardTitle>
            </div>
            <div className="text-right space-y-1">
              <p className="text-sm font-medium text-pink-500">
                Next Month Predicted Total: ${nextMonthTotal.toLocaleString()}
              </p>
              <p className="text-sm font-medium text-blue-600">
                Last Month Total: ${lastMonthTotal.toLocaleString()}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              lastMonth: {
                label: "Last Month",
                color: "#6366f1",
              },
              nextMonth: {
                label: "Next Month (Predicted)",
                color: "#ec4899",
              },
            }}
            className="h-[300px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorLastMonth"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="0"
                  stroke="#e5e7eb"
                  vertical={false}
                />
                <XAxis
                  dataKey="week"
                  stroke="#9ca3af"
                  style={{ fontSize: "12px" }}
                />
                <YAxis
                  stroke="#9ca3af"
                  style={{ fontSize: "12px" }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) => `$${value.toLocaleString()}`}
                    />
                  }
                />
                <Area
                  type="monotone"
                  dataKey="lastMonth"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fill="url(#colorLastMonth)"
                  isAnimationActive={false}
                  dot={{ fill: "#6366f1", r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="nextMonth"
                  stroke="#ec4899"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "#ec4899", r: 5 }}
                  isAnimationActive={false}
                />
                <Legend
                  wrapperStyle={{ paddingTop: "20px" }}
                  formatter={(value) => {
                    return value === "lastMonth"
                      ? "Last Month"
                      : "Next Month (Predicted)";
                  }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
