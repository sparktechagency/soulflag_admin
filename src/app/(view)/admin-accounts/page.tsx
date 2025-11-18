import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  EditIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
  SlidersIcon,
  Trash2Icon,
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
            <CardTitle className="text-2xl">Admin Accounts</CardTitle>
            <Button className="w-fit" variant={"special"}>
              <PlusIcon />
              Create Admin
            </Button>
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
                  <TableHead className="text-center">Admin</TableHead>
                  <TableHead className="text-center">Role </TableHead>
                  <TableHead className="text-center">Email Address</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Last Login</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">Gloirepaluku</TableCell>
                  <TableCell className="text-center ">Super Admin</TableCell>
                  <TableCell className="text-center ">
                    example@gmail.com
                  </TableCell>
                  <TableCell className="text-center flex justify-center items-center">
                    <Status status="online">
                      <StatusIndicator />
                      <StatusLabel>Active</StatusLabel>
                    </Status>
                  </TableCell>
                  <TableCell className="text-center ">Nov 12, 2025</TableCell>
                  <TableCell className="text-center flex gap-2 justify-center">
                    <Button variant="outline" size={"icon"}>
                      <EyeIcon />
                    </Button>
                    <Button variant="outline" size={"icon"}>
                      <EditIcon />
                    </Button>
                    <Button variant="outline" size={"icon"}>
                      <Trash2Icon />
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
