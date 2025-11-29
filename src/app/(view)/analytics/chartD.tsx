"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts"; // Import Sector for custom active shape

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Removed CardDescription and CardFooter
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description =
  "A pie chart displaying gender distribution with custom labels and a legend.";

const chartData = [
  { gender: "Male", value: 218.51, fill: "hsl(240, 70%, 60%)" }, // Example color
  { gender: "Female", value: 235.5, fill: "hsl(0, 70%, 60%)" }, // Example color
  { gender: "Non-binary", value: 183.73, fill: "hsl(180, 70%, 60%)" }, // Example color
];

const chartConfig = {
  value: {
    label: "Value",
  },
  Male: {
    label: "Male",
    color: "hsl(240, 70%, 60%)",
  },
  Female: {
    label: "Female",
    color: "hsl(0, 70%, 60%)",
  },
  "Non-binary": {
    label: "Non-binary",
    color: "hsl(180, 70%, 60%)",
  },
} satisfies ChartConfig;

// Custom active shape for the pie slices to show the label with a line
const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={60}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={3} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        className="text-sm"
      >
        {payload.gender}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey + 16}
        textAnchor={textAnchor}
        fill="#999"
        className="text-xs"
      >
        {`${value.toFixed(2)}`}
      </text>
    </g>
  );
};

export function ChartD() {
  const totalValue = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  const [activeIndex, setActiveIndex] = React.useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const onPieEnter = React.useCallback(
    (_: any, index: React.SetStateAction<number>) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gender Distribution</CardTitle>
        {/* CardDescription removed */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />} // Hide label for custom tooltip outside
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="gender"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={0} // No stroke on the pie slices themselves
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
            >
              {/* Custom label in the center of the donut */}
              <Label
                content={({ viewBox }: any) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy - 10}
                          className="fill-muted-foreground text-sm"
                        >
                          Total
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 10}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalValue.toFixed(2)}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* Custom Legend */}
      <div className="flex justify-center gap-4 p-4 pt-0">
        {chartData.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-1">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: entry.fill }}
            ></span>
            <span className="text-sm text-muted-foreground">
              {entry.gender}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
