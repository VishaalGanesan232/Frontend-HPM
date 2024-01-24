import {
  type ChartName,
  type ChartValue,
  H4,
  type BarChartProps,
  BarChart,
} from "@filament/react";
import React from "react";

const data = [
  { name: "Jan", value: 5000 },
  { name: "Feb", value: 8700 },
  { name: "Mar", value: 16200 },
  { name: "Apr", value: 20400 },
  { name: "May", value: 17100 },
  { name: "Jun", value: 24200 },
  { name: "Jul", value: 19400 },
  { name: "Aug", value: 9800 },
];

const series = [{ dataKey: "value", name: "Conversions" }];

const ServerTime = <T extends ChartValue, N extends ChartName>(
  props: BarChartProps<T, N>
) => (
  <div
    style={{
      width: "100%",
      height: 400,
      overflow: "hidden",
      padding: "0%",
      boxSizing: "border-box",
    }}
  >
    <BarChart
      {...props}
      data={data}
      legend={false}
      series={series}
      categoryDataKey="name"
    >
      <H4>Marketing conversions 2023</H4>
    </BarChart>
  </div>
);

export default ServerTime;
