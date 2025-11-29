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
    <section>
      <Sect />
      <ChartA />
      <div className="mt-6 grid grid-cols-2 gap-6">
        <ChartB />
        <ChartC />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <ChartD />
        <ChartE />
        <ChartF />
      </div>
    </section>
  );
}
