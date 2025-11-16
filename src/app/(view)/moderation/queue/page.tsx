import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircleIcon } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="h-full flex flex-col flex-1 gap-6">
      <h2 className="text-2xl">Report Details</h2>
      <div className="flex-1 h-full w-full grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Report Overview</CardTitle>
          </CardHeader>
          <CardContent>{/* TODO: Continue working from here */}</CardContent>
        </Card>
      </div>
      <div className=" flex justify-end gap-4">
        <Button>
          <CheckCircleIcon />
          Mark as Resolved
        </Button>
      </div>
    </div>
  );
}
