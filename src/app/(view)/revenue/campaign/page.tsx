import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Sect from "./sect";
import { Button } from "@/components/ui/button";
import { EditIcon, PlusIcon, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      <Sect />
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-semibold">Campaign Management</h4>
        <Button variant={"special"} asChild>
          <Link href={"campaign/add"}>
            <PlusIcon />
            New Campaign
          </Link>
        </Button>
      </div>
      <div className=" w-full">
        <Table>
          <TableHeader className="bg-secondary!">
            <TableRow>
              <TableHead>Campaign Name</TableHead>
              <TableHead>Target Plan</TableHead>
              <TableHead>Discount%</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Target Segment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Summer Launch</TableCell>
              <TableCell>Premium Plus</TableCell>
              <TableCell>10%</TableCell>
              <TableCell>Nov 12, 2025</TableCell>
              <TableCell>Nov 12, 2025</TableCell>
              <TableCell className="space-x-2 space-y-2">
                <Badge>Inactive Female</Badge>
                <Badge>Inactive Male</Badge>
              </TableCell>
              <TableCell>
                <Status status="online">
                  <StatusIndicator />
                  <StatusLabel>Active</StatusLabel>
                </Status>
              </TableCell>
              <TableCell className="flex gap-2">
                <Button variant={"outline"} size={"icon"}>
                  <EditIcon />
                </Button>
                <Button variant={"outline"} size={"icon"}>
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
