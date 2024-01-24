import { H4, BarChart } from "@filament/react";
import React from "react";

const data = [
  { name: "Jan", valueA: 13450, valueB: 23400, valueC: 22150 },
  { name: "Feb", valueA: 6700, valueB: 13800, valueC: 16700 },
  { name: "Mar", valueA: 22300, valueB: 21550, valueC: 18700 },
  { name: "Apr", valueA: 6700, valueB: 7500, valueC: 7200 },
  { name: "May", valueA: 16790, valueB: 14500, valueC: 18700 },
  { name: "Jun", valueA: 3400, valueB: 24400, valueC: 14800 },
  { name: "Jul", valueA: 16500, valueB: 21350, valueC: 18700 },
  { name: "Aug", valueA: 13450, valueB: 17500, valueC: 4350 },
];

const series = [
  { dataKey: "valueA", name: "Online" },
  { dataKey: "valueB", name: "Offline" },
  { dataKey: "valueC", name: "Other" },
];

const Entitlements = () => (
  <div
    style={{
      width: "100%",
      height: 400,
      overflow: "hidden",
      padding: "0 5",
      boxSizing: "border-box",
    }}
  >
    <BarChart data={data} categoryDataKey="name" series={series}>
      <H4>Marketing conversions 2023</H4>
    </BarChart>
  </div>
);

export default Entitlements;
