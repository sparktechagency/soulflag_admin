"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <div className="h-full ">
      <div className="w-full h-full py-6 grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Name</Label>
          <Input placeholder="Alex Johnson" />
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input placeholder="alex@email.com" />
        </div>
        <div className="space-y-2">
          <Label>Number</Label>
          <Input placeholder="Phone number" type="tel" />
        </div>
        <div className="space-y-2">
          <Label>Location</Label>
          <Input placeholder="Location here" />
        </div>
        <div className="space-y-2">
          <Label>Birthday</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-48 justify-between font-normal w-full"
              >
                {date ? `${date.toLocaleDateString()}` : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label>Gender</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Bio</Label>
          <Textarea className="h-[140px]" placeholder="" />
        </div>
        <div className="space-y-2">
          <Label>Interests</Label>
          <Textarea className="h-[140px]" placeholder="" />
        </div>
        <div className="space-y-2">
          <Label>Educations</Label>
          <Input placeholder="" />
        </div>
        <div className="space-y-2">
          <Label>Occupations</Label>
          <Input placeholder="" />
        </div>
        <div className="space-y-2">
          <Label>Height</Label>
          <Input placeholder="" />
        </div>
        <div className="space-y-2">
          <Label>What are you looking for?</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Marriage..." />
            </SelectTrigger>
          </Select>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <Button variant={"special"}>Save Changes</Button>
      </div>
    </div>
  );
}
