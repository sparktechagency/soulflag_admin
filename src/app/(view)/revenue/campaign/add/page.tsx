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
import { X, Plus, CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import MultipleSelector, { Option } from "@/components/ui/multi-select";

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
  const [date, setDate] = React.useState<Date>();
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
          <CardTitle className="text-2xl font-bold">
            Create New Campaign
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Plan Name */}
          <div className="space-y-2">
            <Label htmlFor="plan-name" className="text-base font-medium">
              Campaign Name
            </Label>
            <Input
              id="plan-name"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
              className="text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan-name" className="text-base font-medium">
              Target Plan
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Plus" />
              </SelectTrigger>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan-name" className="text-base font-medium">
              Discount Percentage
            </Label>
            <Input
              id="plan-name"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
              className="text-base"
            />
          </div>
          {/* Pricing Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="monthly-price" className="text-sm font-medium">
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      data-empty={!date}
                      className="w-full data-[empty=true]:text-muted-foreground justify-start text-left font-normal"
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthly-price" className="text-sm font-medium">
                  End Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      data-empty={!date}
                      className="w-full data-[empty=true]:text-muted-foreground justify-start text-left font-normal"
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Accessible Features */}
          <div className="space-y-4">
            <Label>Target Audience</Label>
            <MultipleSelector options={OPTIONS} />
          </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between pt-4 border-t">
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
            <Link href={"/revenue/campaign"}>Cancel</Link>
          </Button>
          <Button variant={"special"}>Save Campaign</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
const OPTIONS: Option[] = [
  { label: "Parents", value: "parents" },
  { label: "Teachers", value: "teachers" },
  { label: "Students (4–6)", value: "students_4_6" },
  { label: "Students (7–10)", value: "students_7_10" },
  { label: "School Admins", value: "school_admins" },
  { label: "Tutors", value: "tutors" },
  { label: "Homeschoolers", value: "homeschoolers" },
  { label: "Coaching Centers", value: "coaching_centers" },
  { label: "Special Needs Educators", value: "special_needs", disable: true },
  { label: "Content Creators", value: "content_creators", disable: true },
  { label: "Other", value: "other" },
];
