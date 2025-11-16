import Sect from "./sect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { InboxIcon } from "lucide-react";
import { ChartA } from "./_dashboard/chartA";
import { ChartB } from "./_dashboard/chartB";
import { ChartC } from "./_dashboard/chartC";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      <Sect />
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Traffic Card */}
        <Card className="lg:h-[400px] flex flex-col">
          <CardHeader className="flex flex-wrap justify-between items-center gap-3">
            <CardTitle>DAU/MAU Trend</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ChartA />
          </CardContent>
        </Card>

        {/* Sales by Retailer */}
        <Card className="lg:h-[400px] flex flex-col">
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Messages & Matches</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ChartB />
          </CardContent>
        </Card>

        {/* Top Performing Products */}
        <Card className="lg:h-[400px] flex flex-col col-span-2">
          <CardHeader>
            <CardTitle>Retention Cohort</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex justify-center items-center">
            <ChartC />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
