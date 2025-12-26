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
import { X, Plus, CalendarIcon, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import MultipleSelector, { Option } from "@/components/ui/multi-select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Slider } from "@/components/ui/slider";

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
              Select Subscription/Product
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Plus" />
              </SelectTrigger>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan-name" className="text-base font-medium">
              Target Plan
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Plus" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Favorite</SelectItem>
                <SelectItem value="2">Stand out</SelectItem>
                <SelectItem value="3">DM</SelectItem>
                <SelectItem value="4">Soulflag Plus</SelectItem>
                <SelectItem value="5">Soulflag Premium</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan-name" className="text-base font-medium">
              Discount Percentage
            </Label>
            <InputGroup>
              <InputGroupInput
                id="plan-name"
                value={planName}
                onChange={(e) => setPlanName(e.target.value)}
                className="text-base"
              />
              <InputGroupAddon>%</InputGroupAddon>
            </InputGroup>
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
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="justify-between w-full ">
                  Select Target audience <ChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="w-[76.5dvw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <div className="space-y-4 sm:col-span-2">
                  <Label>Status </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plus">Active</SelectItem>
                      <SelectItem value="premium">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <Label>Country :</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                  </Select>
                </div>
                <div className="space-y-4">
                  <Label>City :</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                  </Select>
                </div>
                <div className="space-y-4">
                  <Label>Gender:</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plus">Male</SelectItem>
                      <SelectItem value="premium">Female</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <Label>Subscription Type :</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select subscription" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plus">Plus</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="others">No Subscription</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <h4>Age Range</h4>

                    <Slider min={18} max={60} />
                    <div className="font-semibold text-sm text-muted-foreground flex justify-between">
                      <p>18</p>
                      <p>60+</p>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <Button variant={"outline"}>New Users</Button>
                  <Button variant={"outline"}>
                    Those who opened date mode
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
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
