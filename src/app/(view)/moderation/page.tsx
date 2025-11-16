import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sect from "./sect";
import { Button } from "@/components/ui/button";
import {
  BanIcon,
  EditIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
  SlidersIcon,
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
        <Card className="lg:h-[400px] flex flex-col">
          <CardHeader className="flex flex-wrap justify-between items-center gap-3">
            <CardTitle className="text-2xl">Pending Reports</CardTitle>
            <Button variant={"special"}>
              <PlusIcon />
              Add Reason
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
                  <TableHead className="text-center">Report ID</TableHead>
                  <TableHead className="text-center">Reporter</TableHead>
                  <TableHead className="text-center">Reported User</TableHead>
                  <TableHead className="text-center">Reason</TableHead>
                  <TableHead className="text-center">Content</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">Rep-1234</TableCell>
                  <TableCell className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                    <Avatar>
                      <AvatarImage
                        src={"https://avatar.iran.liara.run/public"}
                      />
                      <AvatarFallback>UI</AvatarFallback>
                    </Avatar>
                    John Doe
                  </TableCell>
                  <TableCell className="">
                    <div className="text-center font-medium flex flex-row gap-2 justify-center items-center">
                      <Avatar>
                        <AvatarImage
                          src={"https://avatar.iran.liara.run/public"}
                        />
                        <AvatarFallback>UI</AvatarFallback>
                      </Avatar>
                      John Doe
                    </div>
                  </TableCell>
                  <TableCell className="text-center ">Harassment</TableCell>
                  <TableCell className="text-center ">Profile</TableCell>
                  <TableCell className="text-center ">
                    <Status status="degraded" className="mx-auto">
                      <StatusIndicator />
                      <StatusLabel>Pending</StatusLabel>
                    </Status>
                  </TableCell>
                  <TableCell className="text-center space-x-2">
                    <Button
                      variant={"outline"}
                      size={"icon"}
                      className="cursor-pointer"
                      asChild
                    >
                      <Link href={"/users/id"}>
                        <EyeIcon />
                      </Link>
                    </Button>
                    <Button variant={"outline"} size={"icon"}>
                      <BanIcon />
                    </Button>
                    <Button variant={"outline"} size={"icon"}>
                      <EditIcon />
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
