"use client";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BanIcon,
  ChevronDownIcon,
  EditIcon,
  EyeIcon,
  SearchIcon,
  SlidersIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });
  const [value, setValue] = useState([0, 100]);
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">All Users</h1>
      <p className="">Search and manage users accounts</p>
      <div className="flex gap-4">
        <InputGroup>
          <InputGroupInput placeholder="Search passengers by name,email, or phone...." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className="px-8!">
              <SlidersIcon /> Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-[600px] grid grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <Label>Subscription Type :</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="No subscription" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plus">Plus</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="all">No Subscription</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label>Status :</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="warned">Warned</SelectItem>
                  <SelectItem value="susp">Suspended</SelectItem>
                  <SelectItem value="ban">Banned</SelectItem>
                  <SelectItem value="temp">Temporarily Banned</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4 w-full h-full flex justify-center items-end">
              <Tabs className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="1">All-Star</TabsTrigger>
                  <TabsTrigger value="2">Not All-star </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="space-y-4">
              <Label>Registration date range :</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-48 justify-between font-normal w-full"
                  >
                    {dateRange
                      ? `${dateRange?.from?.toLocaleDateString()} - ${dateRange?.to?.toLocaleDateString()}`
                      : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="range"
                    defaultMonth={new Date(2025, 5, 12)}
                    numberOfMonths={2}
                    className="rounded-lg border shadow-sm"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-4">
              <Label>Location :</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">
                    Cities will be put dynamically
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label>Interests :</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select interest" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="concert">Concert</SelectItem>
                  <SelectItem value="festival">Festival</SelectItem>
                  <SelectItem value="party">Party</SelectItem>
                  <SelectItem value="theatre">Theatre</SelectItem>
                  <SelectItem value="standup">Stand up</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label>Age :</Label>
              <div className="w-full space-y-4">
                <Slider
                  value={value}
                  onValueChange={setValue}
                  max={100}
                  step={1}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Min: {value[0]}</span>
                  <span>Max: {value[1]}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Label>Gender :</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non">Non binary</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <Table>
        <TableHeader className="bg-secondary">
          <TableRow>
            <TableHead className="text-center">User</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Subscription</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Verification</TableHead>
            <TableHead className="text-center">Registration</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center font-medium flex flex-row gap-2 justify-center items-center">
              <Avatar>
                <AvatarImage src={"https://avatar.iran.liara.run/public"} />
                <AvatarFallback>UI</AvatarFallback>
              </Avatar>
              John Doe
            </TableCell>
            <TableCell className="text-center">example@gmail.com</TableCell>
            <TableCell className="text-center">TINDER PLUS</TableCell>
            <TableCell className="text-center ">
              <Status status="online" className="mx-auto">
                <StatusIndicator />
                <StatusLabel>Active</StatusLabel>
              </Status>
            </TableCell>
            <TableCell className="text-center ">
              <Status status="online" className="mx-auto">
                <StatusIndicator />
                <StatusLabel>Verified</StatusLabel>
              </Status>
            </TableCell>
            <TableCell className="text-center">Jan 12, 2023</TableCell>
            <TableCell className="text-center space-x-2">
              <Button
                variant={"outline"}
                size={"icon"}
                className="cursor-pointer"
                asChild
              >
                <Link href={"/users/id"}>
                  <EyeIcon />
                </Link>
              </Button>
              <Button variant={"outline"} size={"icon"}>
                <BanIcon />
              </Button>
              <Button variant={"outline"} size={"icon"}>
                <EditIcon />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
