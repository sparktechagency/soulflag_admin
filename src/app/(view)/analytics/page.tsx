import React from "react";
import Sect from "./sect";
import ChartA from "./chartA";
import { ChartB } from "./chartB";
import { ChartC } from "./chartC";
import { ChartD } from "./chartD";
import { ChartE } from "./chartE";
import ChartF from "./chartF";

export default function Page() {
  return (
    <section className="overflow-x-hidden space-y-6">
      <Sect />
      <ChartA />
      <div className="mt-6 lg:grid lg:grid-cols-2 gap-6 space-y-6 lg:space-y-0">
        <ChartB />
        <ChartC />
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-6 mt-6 space-y-6 lg:space-y-0">
        <ChartD />
        <ChartE />
        <ChartF />
      </div>
    </section>
  );
}
