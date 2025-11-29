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
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import CountrySelect from "@/components/country-select";
import RegionSelect from "@/components/region-select";

export default function Page() {
  const [date, setDate] = React.useState<Date>();
  const [files, setFiles] = React.useState<File[] | undefined>();
  const [filePreview, setFilePreview] = React.useState<string | undefined>();
  const [country, setCountry] = useState("");
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
            Create New Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className=" gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Notification Title
              </Label>
              <Input />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="yearly-price" className="text-sm font-medium">
              Message Body
            </Label>
            <Textarea
              placeholder="Enter event description"
              id="yearly-price"
              className="text-base"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Select template
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Draft" />
                </SelectTrigger>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearly-price" className="text-sm font-medium">
                Action Link (optional)
              </Label>
              <Input />
            </div>
          </div>
          <div className="gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Image (Optional)
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
              <div className="mt-6 space-y-4">
                <Label>Activity</Label>
                <div className="space-x-2">
                  <Button variant={"outline"} className="rounded-full">
                    Inactive 7+ days
                  </Button>
                  <Button variant={"outline"} className="rounded-full">
                    New this week
                  </Button>
                  <Button variant={"outline"} className="rounded-full">
                    Cancelled Subscription
                  </Button>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <Label>Subscription type</Label>
                <div className="space-x-2">
                  <Button variant={"outline"} className="rounded-full">
                    Free
                  </Button>
                  <Button variant={"outline"} className="rounded-full">
                    Plus
                  </Button>
                  <Button variant={"outline"} className="rounded-full">
                    Premium
                  </Button>
                  <Button variant={"outline"} className="rounded-full">
                    Premium Plus
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg">Demographics</h4>
              </div>
              <div className="mt-4 flex flex-row justify-start items-center gap-4">
                <div className="">
                  <Label className="pb-4">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="">
                  <Label className="pb-4">Age Range</Label>
                  <div className="flex gap-4">
                    <Input type="number" className="max-w-18" />
                    <div className="w-12 flex justify-center items-center">
                      <Separator className="border-1" />
                    </div>
                    <Input type="number" className="max-w-18" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-row justify-start items-center gap-4">
                <div className="">
                  <Label className="pb-4">Location</Label>
                  <div className="flex gap-4">
                    <CountrySelect
                      onChange={(e) => {
                        setCountry(e);
                      }}
                    />
                    <RegionSelect countryCode={country} />
                  </div>
                </div>
              </div>
              <div className="space-y-2 mt-6">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="This Notification wiil be sent to 4,250 user" />
                  </SelectTrigger>
                </Select>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="monthly-price"
                    className="text-sm font-medium"
                  >
                    Select type
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Draft" />
                    </SelectTrigger>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearly-price" className="text-sm font-medium">
                    Action Link (optional)
                  </Label>
                  <Input />
                </div>
              </div>
              <div className="space-y-2 mt-6">
                <Label htmlFor="monthly-price" className="text-sm font-medium">
                  Time Zone
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Turkey Time (GMT+3)" />
                  </SelectTrigger>
                </Select>
              </div>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="gap-2 justify-end">
          <Button variant={"outline"}>
            {/* <Link href={"/revenue/plan"}></Link> */}
            Save as draft
          </Button>
          <Button variant={"special"}>Send Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
