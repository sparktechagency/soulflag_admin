import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Sect from "./sect";
import { Button } from "@/components/ui/button";
import {
  BanIcon,
  EditIcon,
  EyeIcon,
  PencilRulerIcon,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"special"}>
                  <PencilRulerIcon />
                  Manage Reasons
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Report Reasons</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Card className="py-2">
                    <CardContent className="flex justify-between items-center">
                      <CardDescription>Spam or Spammer</CardDescription>
                      <Button size={"icon"} variant={"ghost"}>
                        <Trash2Icon />
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="py-2">
                    <CardContent className="flex justify-between items-center">
                      <CardDescription>Inappropriate Messages</CardDescription>
                      <Button size={"icon"} variant={"ghost"}>
                        <Trash2Icon />
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="py-2">
                    <CardContent className="flex justify-between items-center">
                      <CardDescription>Stolen Photos</CardDescription>
                      <Button size={"icon"} variant={"ghost"}>
                        <Trash2Icon />
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="py-2">
                    <CardContent className="flex justify-between items-center">
                      <CardDescription>Fake Profile</CardDescription>
                      <Button size={"icon"} variant={"ghost"}>
                        <Trash2Icon />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <DialogFooter className="border-t pt-4">
                  <Input className="" placeholder="New Reason" />
                  <Button variant={"special"}>Add Reason</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
            <div className="flex gap-4">
              <InputGroup>
                <InputGroupInput placeholder="Search passengers by name,email, or phone...." />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
              </InputGroup>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className="px-8!">
                    <SlidersIcon /> Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  className="w-[600px] grid grid-cols-2 gap-6"
                >
                  <div className="space-y-4">
                    <Label>Profile :</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          Something on their profile
                        </SelectItem>
                        <SelectItem value="male">
                          Behavior on Soulflag
                        </SelectItem>
                        <SelectItem value="female">
                          Behavior off Soulflag
                        </SelectItem>
                        <SelectItem value="non">Fake Profile</SelectItem>
                        <SelectItem value="nons">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <Label>Messages :</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          Inappropriate behavior
                        </SelectItem>
                        <SelectItem value="male">Spam or scam</SelectItem>
                        <SelectItem value="female">Harassment</SelectItem>
                        <SelectItem value="non">Fake Profile</SelectItem>
                        <SelectItem value="nons">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <Label>Gender :</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="non">Non binary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <Label>Subscription Type :</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="No subscription" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plus">Plus</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="all">No Subscription</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </PopoverContent>
              </Popover>
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
