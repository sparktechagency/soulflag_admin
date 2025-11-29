"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"; // Import Area and AreaChart

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Removed CardDescription as it's not used
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An Area chart with smooth lines and dots";

// Extended chartData to better match the visual pattern and length in the image
const chartData = [
  { month: "Jan", desktop: 200, mobile: 186 },
  { month: "Feb", desktop: 160, mobile: 180 },
  { month: "Mar", desktop: 195, mobile: 200 },
  { month: "Apr", desktop: 100, mobile: 120 },
  { month: "May", desktop: 150, mobile: 130 },
  { month: "Jun", desktop: 30, mobile: 40 },
  { month: "Jul", desktop: 120, mobile: 150 },
  { month: "Aug", desktop: 290, mobile: 280 },
  { month: "Sep", desktop: 100, mobile: 110 },
  { month: "Oct", desktop: 50, mobile: 60 },
  { month: "Nov", desktop: 100, mobile: 120 },
  { month: "Dec", desktop: 295, mobile: 300 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

// Component to represent the radio/toggle buttons
const ChartToggle = ({ label, active }: any) => (
  <div
    className={`flex items-center gap-1 ${
      !active ? "opacity-50" : ""
    } cursor-pointer`}
  >
    <span
      className={`h-3 w-3 rounded-full border-2 ${
        active
          ? "border-[hsl(var(--chart-1))] bg-[hsl(var(--chart-1))]/20"
          : "border-current"
      }`}
    >
      {active && (
        <div className="h-full w-full rounded-full bg-[hsl(var(--chart-1))]" />
      )}
    </span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export function ChartB() {
  const chartColor = "var(--color-desktop)";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Revenue Trend</CardTitle>
        {/* Added the Weekly/Monthly Toggles */}
        <div className="flex gap-4">
          <ChartToggle label="Weekly" active={true} />
          <ChartToggle label="Monthly" active={false} />
        </div>
      </CardHeader>

      <CardContent>
        {/* Changed LineChart to AreaChart for the filled area */}
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // Removed the slice as the months in the image look full/partial
            />
            {/* Added YAxis with specific tick values to match the image */}
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 350]}
              ticks={[0, 20, 40, 60, 300, 350]} // Set explicit ticks
            />
            <ChartTooltip
              cursor={true} // Changed cursor to true for a vertical line on hover
              content={<ChartTooltipContent />} // Removed hideLabel
            />
            {/* Area component for the filled background */}
            <defs>
              <linearGradient id="gradient-desktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#gradient-desktop)"
              stroke={chartColor}
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            {/* Line component for the line on top */}
            <Line
              dataKey="desktop"
              type="natural"
              stroke={chartColor}
              strokeWidth={2}
              dot={{
                fill: chartColor,
                r: 4, // Slightly smaller dot
              }}
              activeDot={{
                r: 6,
                fill: "white", // Active dot color
                stroke: chartColor,
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
