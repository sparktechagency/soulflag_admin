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
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Digital Products</h1>
        <Button variant={"special"} asChild>
          <Link href={"/revenue/products/add"}>
            <PlusIcon /> Add new Product
          </Link>
        </Button>
      </div>
      <Table>
        <TableHeader className="bg-secondary">
          <TableRow>
            <TableHead className="text-center">Product Name</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Last Updated</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center font-medium flex flex-row gap-2 justify-center items-center">
              Profile Boost
            </TableCell>
            <TableCell className="text-center">Boost</TableCell>
            <TableCell className="text-center">T$4.99</TableCell>
            <TableCell className="text-center">Jan 12, 2023</TableCell>
            <TableCell className="text-center ">
              <Status status="online" className="mx-auto">
                <StatusIndicator />
                <StatusLabel>Active</StatusLabel>
              </Status>
            </TableCell>

            <TableCell className="text-center space-x-2">
              <Button variant={"outline"} size={"icon"}>
                <EditIcon />
              </Button>
              <Button variant={"outline"} size={"icon"}>
                <Trash2Icon />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
