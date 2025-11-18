import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  EditIcon,
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
            <CardTitle className="text-2xl">Data Retention Policies</CardTitle>
            <Button className="w-fit" variant={"special"}>
              <PlusIcon />
              Create New Policy
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
                  <TableHead className="text-center">Policy Name</TableHead>
                  <TableHead className="text-center">Condition</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                  <TableHead className="text-center">
                    Enforcement Frequency
                  </TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">
                    Inactive User Anonymization
                  </TableCell>
                  <TableCell className="text-center ">
                    Inactive for 2 years
                  </TableCell>
                  <TableCell className="text-center ">Anonymize</TableCell>
                  <TableCell className="text-center ">Monthly</TableCell>
                  <TableCell className="text-center ">
                    <Status status="online">
                      <StatusIndicator />
                      <StatusLabel>Active</StatusLabel>
                    </Status>
                  </TableCell>
                  <TableCell className="text-center flex gap-2">
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
