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

import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { Slider } from "@/components/ui/slider";

export default function Page() {
  const [date, setDate] = React.useState<Date>();
  const [files, setFiles] = React.useState<File[] | undefined>();
  const [filePreview, setFilePreview] = React.useState<string | undefined>();
  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setFilePreview(e.target?.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };
  return (
    <div className="">
      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create New Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Event Name
              </Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearly-price" className="text-sm font-medium">
                Category
              </Label>
              <Input id="yearly-price" className="text-base" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Date & Time
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearly-price" className="text-sm font-medium">
                Location
              </Label>
              <Input id="yearly-price" className="text-base" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Price ($)
              </Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearly-price" className="text-sm font-medium">
                Status
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Draft" />
                </SelectTrigger>
              </Select>
            </div>
          </div>
          <div className="gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Description
              </Label>
              <Textarea placeholder="Enter event description" />
            </div>
          </div>
          <div className="gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Event Image
              </Label>
              <Dropzone
                maxSize={1024 * 1024 * 5}
                multiple={false}
                onDrop={handleDrop}
                onError={console.error}
                src={files}
              >
                <DropzoneEmptyState />
                <DropzoneContent>
                  {filePreview && (
                    <div className="h-[102px] w-full">
                      <img
                        alt="Preview"
                        className="absolute top-0 left-0 h-full w-full object-cover"
                        src={filePreview}
                      />
                    </div>
                  )}
                </DropzoneContent>
              </Dropzone>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Target Audience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4>Age Range</h4>
                <div className="font-semibold text-sm text-muted-foreground flex justify-between">
                  <p>18</p>
                  <p>60+</p>
                </div>
                <Slider min={18} max={60} />
              </div>
              <div className="mt-6 space-y-4">
                <Label>Gender</Label>
                <div className="space-x-2">
                  <Button variant={"outline"} className="rounded-full">
                    Male
                  </Button>
                  <Button variant={"outline"} className="rounded-full">
                    Female
                  </Button>
                  <Button variant={"outline"} className="rounded-full">
                    Other
                  </Button>
                </div>
              </div>
              <div className="space-y-2 mt-6">
                <Label htmlFor="yearly-price" className="text-sm font-medium">
                  Location
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </Select>
              </div>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="gap-2 justify-end">
          <Button variant={"outline"} asChild>
            <Link href={"/revenue/plan"}>Cancel</Link>
          </Button>
          <Button variant={"special"}>Save Plan</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
