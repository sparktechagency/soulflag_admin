"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Sect from "./sect";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, SlidersVerticalIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Page() {
  const [value, setValue] = useState([0, 100]);
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      <Sect />
      {/* Main Grid */}
      <div className="flex justify-end items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className="px-8!">
              <SlidersVerticalIcon /> Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-[600px] grid grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <Label>Product :</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="No subscription" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plus">Favorite </SelectItem>
                  <SelectItem value="premium">Stand out</SelectItem>
                  <SelectItem value="all">DM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label>Subscription </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Plus </SelectItem>
                  <SelectItem value="inactive">Premium </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label>Payment Status :</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Success</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label>Date range :</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="justify-between font-normal w-full"
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
          </PopoverContent>
        </Popover>
      </div>
      <div className=" w-full">
        <Table>
          <TableHeader className="bg-secondary!">
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>User Name</TableHead>
              <TableHead>Product/Plan</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Failure Reason</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>TXN-00124</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Premium Plus</TableCell>
              <TableCell>$4.99</TableCell>
              <TableCell>
                <Status status="online">
                  <StatusIndicator />
                  <StatusLabel>Success</StatusLabel>
                </Status>
              </TableCell>
              <TableCell>Nov 12, 2025</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
