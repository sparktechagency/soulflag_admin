import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Subscription() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl">Current Plan</h2>
      <div className="w-full flex justify-between items-center">
        <p>Premium Plus</p>
        <Status status="online" className="mt-2" variant={"secondary"}>
          <StatusIndicator />
          <StatusLabel>Active</StatusLabel>
        </Status>
      </div>
      <p className="text-sm">Renews on: June 15, 2023</p>
      <Separator />
      <h2 className="text-2xl">Subscription History</h2>
      <div className="space-y-12">
        <div className="">
          <p className="text-lg font-semibold">Premium Plus</p>
          <p className="text-sm">March 15, 2024 - April 15, 2025</p>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Premium</p>
          <p className="text-sm">March 15, 2024 - April 15, 2025</p>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Plus</p>
          <p className="text-sm">March 15, 2024 - April 15, 2025</p>
        </div>
      </div>
    </div>
  );
}
