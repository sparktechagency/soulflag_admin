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
        <Button variant={"outline"} className="px-8!">
          <SlidersIcon /> Filter
        </Button>
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
