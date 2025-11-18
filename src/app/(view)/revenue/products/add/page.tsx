"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X, Plus } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Feature {
  id: string;
  name: string;
}

export default function Page() {
  const [planName, setPlanName] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [yearlyPrice, setYearlyPrice] = useState("");
  const [accessibleFeatures, setAccessibleFeatures] = useState<Feature[]>([]);
  const [inaccessibleFeatures, setInaccessibleFeatures] = useState<Feature[]>(
    []
  );
  const [accessibleInput, setAccessibleInput] = useState("");
  const [inaccessibleInput, setInaccessibleInput] = useState("");
  const [isActive, setIsActive] = useState(true);

  const addFeature = (
    features: Feature[],
    setFeatures: React.Dispatch<React.SetStateAction<Feature[]>>,
    input: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (input.trim()) {
      setFeatures([...features, { id: Date.now().toString(), name: input }]);
      setInput("");
    }
  };

  const removeFeature = (
    features: Feature[],
    setFeatures: React.Dispatch<React.SetStateAction<Feature[]>>,
    id: string
  ) => {
    setFeatures(features.filter((f) => f.id !== id));
  };

  return (
    <div className="min-h-screen p-8">
      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New Products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Pricing Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="monthly-price" className="text-sm font-medium">
                  Product Name
                </Label>
                <Input
                  id="monthly-price"
                  value={monthlyPrice}
                  onChange={(e) => setMonthlyPrice(e.target.value)}
                  className="text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearly-price" className="text-sm font-medium">
                  Product Type
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearly-price" className="text-sm font-medium">
                  Price ($)
                </Label>
                <Input
                  id="yearly-price"
                  value={yearlyPrice}
                  onChange={(e) => setYearlyPrice(e.target.value)}
                  className="text-base"
                />
              </div>
            </div>
          </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between pt-4">
            <Label htmlFor="status" className="text-base font-medium">
              Status
            </Label>
            <Switch
              id="status"
              checked={isActive}
              onCheckedChange={setIsActive}
            />
          </div>
        </CardContent>
        <CardFooter className="gap-2 justify-end">
          <Button variant={"outline"} asChild>
            <Link href={"/revenue/products"}>Cancel</Link>
          </Button>
          <Button variant={"special"}>Save Product</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
