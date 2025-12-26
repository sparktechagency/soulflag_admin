import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import MultipleSelector from "@/components/ui/multi-select";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BanIcon,
  EditIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
  SlidersIcon,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Events</h1>
        <Button variant={"special"} asChild>
          <Link href={"/events/add"}>
            <PlusIcon /> Create event
          </Link>
        </Button>
      </div>
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
              <Label>Categories :</Label>
              <MultipleSelector
                options={[
                  { value: "popular", label: "Popular" },
                  { value: "music", label: "Music" },
                  { value: "sports", label: "Sports" },
                  { value: "arts", label: "Arts" },
                  { value: "festival", label: "Festival" },
                  { value: "stand-up", label: "Stand-up" },
                  { value: "theatre", label: "Theatre" },
                  { value: "party", label: "Party" },
                ]}
              />
            </div>
            <div className="space-y-4">
              <Label>Date :</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                  <SelectItem value="custom-range">
                    Specific Date Range
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <Table>
        <TableHeader className="bg-secondary">
          <TableRow>
            <TableHead className="text-center">Event Name</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Location</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Targeted users</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center">Jazz Night Istanbul</TableCell>
            <TableCell className="text-center">Concert</TableCell>
            <TableCell className="text-center">Nov 12, 2025</TableCell>
            <TableCell className="text-center">Istanbul</TableCell>
            <TableCell className="text-center">$250</TableCell>
            <TableCell className="text-center ">
              <Status status="online" className="mx-auto">
                <StatusIndicator />
                <StatusLabel>Active</StatusLabel>
              </Status>
            </TableCell>
            <TableCell className="text-center">1.2k users</TableCell>
            <TableCell className="text-center space-x-2">
              <Button variant={"outline"} size={"icon"} asChild>
                <Link href={"/events/id"}>
                  <EyeIcon />
                </Link>
              </Button>

              <Button variant={"outline"} size={"icon"}>
                <Trash2 />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
