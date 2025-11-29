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
import React, { useState } from "react";
import {
  CheckboxGroup,
  CheckboxGroupItem,
  CheckboxGroupItemHeader,
  CheckboxGroupItemTitle,
  CheckboxGroupItemDescription,
  CheckboxGroupIndicator,
} from "@/components/kibo-ui/choicebox";
import { Switch } from "@/components/ui/switch";
const options = [
  {
    id: "1",
    label: "Option 1",
    subtitle: "(the first option)",
    description: "This is the first option",
  },
  {
    id: "2",
    label: "Option 2",
    subtitle: "(the second option)",
    description: "This is the second option",
  },
];

export default function Page() {
  const [date, setDate] = React.useState<Date>();
  const [files, setFiles] = React.useState<File[] | undefined>();
  const [filePreview, setFilePreview] = React.useState<string | undefined>();
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (value: string, checked: boolean) => {
    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };
  const options = [
    {
      value: "option1",
      title: "Option 1",
      description: "First option",
    },
    {
      value: "option2",
      title: "Option 2",
      description: "Second option",
    },
    {
      value: "option3",
      title: "Option 3",
      description: "Third option",
    },
  ];
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
          <div className="gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Description
              </Label>
              <Input placeholder="Enter event description" />
            </div>
          </div>
          <div className="gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Description
              </Label>
              <Input placeholder="Enter event description" />
            </div>
          </div>
          <div className="gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-price" className="text-sm font-medium">
                Description
              </Label>
              <div className="">
                <CheckboxGroup>
                  {options.map((option) => (
                    <CheckboxGroupItem
                      key={option.value}
                      value={option.value}
                      id={option.value}
                      checked={selected.includes(option.value)}
                      onCheckedChange={(checked) =>
                        handleChange(option.value, checked as boolean)
                      }
                    >
                      <CheckboxGroupIndicator />
                      <CheckboxGroupItemHeader>
                        <CheckboxGroupItemTitle>
                          {option.title}
                        </CheckboxGroupItemTitle>
                        <CheckboxGroupItemDescription>
                          {option.description}
                        </CheckboxGroupItemDescription>
                      </CheckboxGroupItemHeader>
                    </CheckboxGroupItem>
                  ))}
                </CheckboxGroup>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="status" className="text-base font-medium">
              Status
            </Label>
            <Switch
              id="status"
              // checked={isActive}
              // onCheckedChange={setIsActive}
            />
          </div>
        </CardContent>
        <CardFooter className="gap-2 justify-end">
          <Button variant={"outline"} asChild>
            <Link href={"/admin-accounts"}>Cancel</Link>
          </Button>
          <Button variant={"special"}>Save Admin</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
