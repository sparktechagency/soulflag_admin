import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sect from "./sect";
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

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      <Sect />
      {/* Main Grid */}
      <div className="w-full">
        {/* Traffic Card */}
        <Card className="">
          <CardHeader className="">
            <CardTitle className="text-2xl">
              Data Subject Access Requests
            </CardTitle>
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
                  <TableHead className="text-center">Requests ID</TableHead>
                  <TableHead className="text-center">User Name</TableHead>
                  <TableHead className="text-center">Email</TableHead>
                  <TableHead className="text-center">Requests Type</TableHead>
                  <TableHead className="text-center">Submission Date</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">DSAR-2023-001</TableCell>
                  <TableCell className="">John Doe</TableCell>
                  <TableCell className="text-center ">
                    example@gmail.com
                  </TableCell>
                  <TableCell className="text-center ">Access</TableCell>
                  <TableCell className="text-center ">Nov 12, 2025</TableCell>
                  <TableCell className="text-center ">
                    <Status status="degraded" className="mx-auto">
                      <StatusIndicator />
                      <StatusLabel>Pending</StatusLabel>
                    </Status>
                  </TableCell>
                  <TableCell className="text-center space-x-2">
                    <Button variant={"outline"} size={"icon"}>
                      <CheckIcon />
                    </Button>
                    <Button variant={"outline"} size={"icon"}>
                      <XIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
