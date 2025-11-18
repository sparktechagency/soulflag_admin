import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  BanIcon,
  CheckIcon,
  EditIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
  SlidersIcon,
  XIcon,
} from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      {/* Main Grid */}
      <div className="w-full">
        {/* Traffic Card */}
        <Card className="">
          <CardHeader className="">
            <CardTitle className="text-2xl">Consent Log Management</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
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
                  <TableHead className="text-center">User Name</TableHead>
                  <TableHead className="text-center">Email</TableHead>
                  <TableHead className="text-center">Policy</TableHead>
                  <TableHead className="text-center">Version Number</TableHead>
                  <TableHead className="text-center">Date & Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">John Doe</TableCell>
                  <TableCell className="text-center ">
                    example@gmail.com
                  </TableCell>
                  <TableCell className="text-center ">Privacy Policy</TableCell>
                  <TableCell className="text-center ">
                    <Badge>v2.1</Badge>
                  </TableCell>
                  <TableCell className="text-center ">Nov 12, 2025</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
