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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon, SlidersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      <Sect />
      <h1 className="text-2xl font-semibold">Subscription Cancellations</h1>
      <div className="flex gap-4">
        <InputGroup>
          <InputGroupInput placeholder="Search passengers by name,email, or phone...." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <Button variant={"outline"} className="px-8!">
          <SlidersIcon /> Filter
        </Button>
      </div>
      {/* Main Grid */}
      <div className=" w-full">
        <Table>
          <TableHeader className="bg-secondary!">
            <TableRow>
              <TableHead>User Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Plan Name</TableHead>
              <TableHead>Purchase Date</TableHead>
              <TableHead>Cancellation Date</TableHead>
              <TableHead>Reason</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>johnabc@email.com</TableCell>
              <TableCell>Premium Plus</TableCell>
              <TableCell>Nov 12, 2025</TableCell>
              <TableCell>Nov 12, 2025</TableCell>
              <TableCell>Found a Partner</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
