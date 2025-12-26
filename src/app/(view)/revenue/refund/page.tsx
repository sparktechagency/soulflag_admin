import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon, SlidersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sect from "../cancellation/sect";
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
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      <Sect />
      <h1 className="text-2xl font-semibold">Refund Requests</h1>
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
              <Label>Platform :</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plus">IOS</SelectItem>
                  <SelectItem value="premium">Android</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label>Refund Status :</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Refund Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plus">Pending</SelectItem>
                  <SelectItem value="premium">Rejected</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label>Request Date :</Label>
              <Input type="date" />
            </div>
            <div className="space-y-4">
              <Label>Refund Date :</Label>
              <Input type="date" />
            </div>
          </PopoverContent>
        </Popover>
      </div>
      {/* Main Grid */}
      <div className=" w-full">
        <Table>
          <TableHeader className="bg-secondary!">
            <TableRow>
              <TableHead>User Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Plan Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Users Platform</TableHead>
              <TableHead>Request Date</TableHead>
              <TableHead>Refund Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>johnabc@email.com</TableCell>
              <TableCell>Premium Plus</TableCell>
              <TableCell>340</TableCell>
              <TableCell>IOS</TableCell>
              <TableCell>Nov 12, 2025</TableCell>
              <TableCell>Nov 12, 2025</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
