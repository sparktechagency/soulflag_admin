"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/custom-tabs";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CakeIcon,
  CheckIcon,
  SearchIcon,
  Trash2Icon,
  VenusAndMarsIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import Profile from "./profile";
import Subscription from "./subscription";
import Interaction from "./interaction";
import Actions from "./actions";
import Trail from "./trail";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Page() {
  const [tab, setTab] = React.useState("profile");
  return (
    <>
      {" "}
      <Card className="w-full h-[88dvh] flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl">User Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-5 flex-1">
          <div className="h-full w-full border-r flex flex-col justify-center items-center pr-4 gap-6">
            <Avatar className="size-[140px]">
              <AvatarImage src="https://avatar.iran.liara.run/public" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="font-bold text-2xl">Alex Johnson</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-row gap-1">
                <VenusAndMarsIcon />
                Male
              </div>
              <div className="flex flex-row gap-1">
                <CakeIcon />
                28
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Badge variant={"outline"} className="bg-pink-300  text-pink-600">
                Tinder Gold
              </Badge>
              <Status status="online">
                <StatusIndicator />
                <StatusLabel>Active</StatusLabel>
              </Status>
            </div>
            <div className="w-full aspect-square grid grid-cols-2 gap-4">
              <Dialog>
                <DialogTrigger className="w-full h-full bg-blue-100 rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-blue-200 transition-all active:scale-95">
                  <span className="text-cyan-700 text-2xl font-semibold">
                    142
                  </span>
                  <p>Matches</p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>❤️ Match history</DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <InputGroup>
                      <InputGroupInput placeholder="Search by name.." />
                      <InputGroupAddon>
                        <SearchIcon />
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                  <div className="mt-4"></div>
                </DialogContent>
              </Dialog>
              <div className="w-full h-full bg-blue-100 rounded-lg flex flex-col justify-center items-center">
                <span className="text-cyan-700 text-2xl font-semibold">
                  142
                </span>
                <p>Chats</p>
              </div>
              <div className="w-full h-full bg-blue-100 rounded-lg flex flex-col justify-center items-center">
                <span className="text-cyan-700 text-2xl font-semibold">
                  142
                </span>
                <p>Reports</p>
              </div>
              <div className="w-full h-full bg-blue-100 rounded-lg flex flex-col justify-center items-center">
                <span className="text-cyan-700 text-2xl font-semibold">
                  142
                </span>
                <p>Warnings</p>
              </div>
            </div>
          </div>
          <div className="p-6 w-full col-span-4">
            <div className="w-full! h-full ">
              <Tabs value={tab} className="" onValueChange={setTab}>
                <TabsList className="w-full border-b">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="activity">
                    Subscription History
                  </TabsTrigger>
                  <TabsTrigger value="settings">
                    Interaction History
                  </TabsTrigger>
                  <TabsTrigger value="actions">Admin actions</TabsTrigger>
                  <TabsTrigger value="trail">Audit Trail</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="h-full ">
                  <Profile />
                </TabsContent>
                <TabsContent value="activity">
                  <Subscription />
                </TabsContent>
                <TabsContent value="settings">
                  <Interaction />
                </TabsContent>
                <TabsContent value="actions">
                  <Actions />
                </TabsContent>
                <TabsContent value="trail">
                  <Trail />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
      {tab === "profile" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">User Photos</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-4 gap-4">
            <Card className="pt-0 overflow-hidden">
              <Image
                height={500}
                width={500}
                className="h-[300px] object-cover object-top"
                src={
                  "https://images.unsplash.com/photo-1664634178711-79e1c44c36c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="user-image"
              />
              <CardContent className="px-4 text-muted-foreground">
                Uploaded: May 14 , 2025
              </CardContent>
              <CardFooter className="grid grid-cols-2 gap-4!">
                <Button>
                  <CheckIcon />
                  Approve
                </Button>
                <Button variant={"outline"}>
                  <XIcon />
                  Reject
                </Button>
                <Button className="col-span-2" variant={"destructive"}>
                  <Trash2Icon />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
      )}
    </>
  );
}
