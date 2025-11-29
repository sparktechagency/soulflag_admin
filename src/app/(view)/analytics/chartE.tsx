"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description =
  "A horizontal bar chart showing age distribution with a highlighted bar.";

const chartData = [
  // Data approximated from the visual lengths in the provided image
  { ageGroup: "25-35", count: 25000, fill: "hsl(252, 70%, 60%)" }, // Highlighted purple bar
  { ageGroup: "18-24", count: 700, fill: "hsl(240, 20%, 80%)" },
  { ageGroup: "35-44", count: 10000, fill: "hsl(240, 20%, 80%)" },
  { ageGroup: "45-54", count: 9500, fill: "hsl(240, 20%, 80%)" },
  { ageGroup: "55+", count: 12500, fill: "hsl(240, 20%, 80%)" },
];

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(252, 70%, 60%)", // Main chart color
  },
  // Define colors based on the data keys for potential future use,
  // but we use direct fill in chartData to manage the highlighted bar.
  highlight: {
    label: "25-35 Age Group",
    color: "hsl(252, 70%, 60%)",
  },
  standard: {
    label: "Other Age Groups",
    color: "hsl(240, 20%, 80%)",
  },
} satisfies ChartConfig;

export function ChartE() {
  return (
    <Card className="flex flex-col max-w-xl mx-auto">
      <CardHeader className="items-start pb-2">
        <CardTitle className="text-xl font-bold">Age Distribution</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="aspect-[4/3] w-full h-[350px]"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical" // Set layout to vertical for horizontal bars
            margin={{
              left: -10, // Adjust margin to accommodate YAxis labels
              right: 20,
              top: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid horizontal={false} strokeDasharray="3 3" />

            {/* YAxis for Age Groups (Categories) */}
            <YAxis
              dataKey="ageGroup"
              type="category" // Must be category for horizontal bars
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-sm"
              width={60}
            />

            {/* XAxis for Counts (Values) */}
            <XAxis
              dataKey="count"
              type="number" // Must be number for values
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              orientation="bottom"
              className="text-xs"
              domain={[0, 50000]} // Set explicit max domain to match the visual scale
              ticks={[0, 1000, 5000, 10000, 25000, 50000]} // Match the visual ticks
              tickFormatter={(value) => value.toLocaleString()}
            />

            <ChartTooltip
              cursor={{ fill: "hsl(var(--muted))", opacity: 0.5 }}
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value) => value.toLocaleString()}
                />
              }
            />

            <Bar
              dataKey="count"
              radius={4} // Slightly rounded corners
              // Custom fill applied directly from chartData to handle highlight
              fill="data"
              barSize={20}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
