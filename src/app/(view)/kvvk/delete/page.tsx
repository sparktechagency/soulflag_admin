import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckIcon,
  EditIcon,
  PlusIcon,
  SearchIcon,
  SlidersIcon,
  Trash2Icon,
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
import { Badge } from "@/components/ui/badge";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-6 px-0 md:px-6 lg:px-0 overflow-x-hidden">
      {/* Main Grid */}
      <div className="w-full">
        {/* Traffic Card */}
        <Card className="">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-2xl">Data Deletion</CardTitle>
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
                  <TableHead className="text-center">Request type</TableHead>
                  <TableHead className="text-center">Submission Date</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">Lara croft</TableCell>
                  <TableCell className="text-center ">
                    lara345@email.com
                  </TableCell>
                  <TableCell className="text-center ">Access</TableCell>
                  <TableCell className="text-center ">12/23/2025</TableCell>
                  <TableCell className="text-center ">
                    <div className="flex justify-center items-center">
                      <Status status="online">
                        <StatusIndicator />
                        <StatusLabel>Approved</StatusLabel>
                      </Status>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center items-center gap-2">
                      <Button variant="outline" size={"icon"}>
                        <CheckIcon />
                      </Button>
                      <Button variant="outline" size={"icon"}>
                        <XIcon />
                      </Button>
                    </div>
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
