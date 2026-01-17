"use client";

import React, { useState } from "react";
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

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Name */}
        <div className="space-y-2">
          <Label>Name</Label>
          <Input placeholder="Alex Johnson" />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label>Email</Label>
          <Input placeholder="alex@email.com" />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label>Number</Label>
          <Input placeholder="Phone number" type="tel" />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label>Location</Label>
          <Input placeholder="Location here" />
        </div>

        {/* Birthday */}
        <div className="space-y-2">
          <Label>Birthday</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                captionLayout="dropdown"
                className="rounded-md border shadow-sm"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label>Gender</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
          </Select>
        </div>

        {/* Bio */}
        <div className="space-y-2 sm:col-span-2 lg:col-span-3">
          <Label>Bio</Label>
          <Textarea className="h-[140px]" />
        </div>

        {/* Interests */}
        <div className="space-y-2 sm:col-span-2 lg:col-span-3">
          <Label>Interests</Label>
          <Textarea className="h-[140px]" />
        </div>

        {/* Education */}
        <div className="space-y-2">
          <Label>Educations</Label>
          <Input />
        </div>

        {/* Occupation */}
        <div className="space-y-2">
          <Label>Occupations</Label>
          <Input />
        </div>

        {/* Height */}
        <div className="space-y-2">
          <Label>Height</Label>
          <Input />
        </div>

        {/* Looking for */}
        <div className="space-y-2">
          <Label>What are you looking for?</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Marriage..." />
            </SelectTrigger>
          </Select>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button variant="special">Save Changes</Button>
      </div>
    </div>
  );
}
