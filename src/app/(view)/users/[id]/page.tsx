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
      <Card className="w-full lg:h-[88dvh] flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">User Details</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-6 h-full">
          {/* LEFT PANEL */}
          <div className="w-full sm:border-r flex flex-col items-center gap-6 pr-0 sm:pr-4">
            <Avatar className="size-[110px] sm:size-[100px]">
              <AvatarImage src="https://avatar.iran.liara.run/public" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <h1 className="font-bold text-xl sm:text-2xl text-center">
              Alex Johnson
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex items-center gap-1">
                <VenusAndMarsIcon size={18} />
                Male
              </div>
              <div className="flex items-center gap-1">
                <CakeIcon size={18} />
                28
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-1  gap-4">
              <Badge variant="outline" className="bg-pink-300 text-pink-600">
                Tinder Gold
              </Badge>

              <Status status="online">
                <StatusIndicator />
                <StatusLabel>Active</StatusLabel>
              </Status>
            </div>

            {/* Stats */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-1 gap-3">
              <Dialog>
                <DialogTrigger className="w-full bg-blue-100 rounded-lg p-3 sm:p-4 flex flex-col justify-center items-center hover:bg-blue-200 transition active:scale-95">
                  <span className="text-cyan-700 text-xl font-semibold">
                    142
                  </span>
                  <p className="text-sm sm:text-base">Matches</p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>❤️ Match history</DialogTitle>
                  </DialogHeader>

                  <InputGroup>
                    <InputGroupInput placeholder="Search by name.." />
                    <InputGroupAddon>
                      <SearchIcon />
                    </InputGroupAddon>
                  </InputGroup>
                </DialogContent>
              </Dialog>

              <div className="w-full bg-blue-100 rounded-lg p-3 sm:p-4 flex flex-col justify-center items-center">
                <span className="text-cyan-700 text-xl font-semibold">142</span>
                <p className="text-sm sm:text-base">Chats</p>
              </div>

              <div className="w-full bg-blue-100 rounded-lg p-3 sm:p-4 flex flex-col justify-center items-center">
                <span className="text-cyan-700 text-xl font-semibold">142</span>
                <p className="text-sm sm:text-base">Reports</p>
              </div>

              <div className="w-full bg-blue-100 rounded-lg p-3 sm:p-4 flex flex-col justify-center items-center">
                <span className="text-cyan-700 text-xl font-semibold">142</span>
                <p className="text-sm sm:text-base">Warnings</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-4 w-full">
            <Tabs value={tab} onValueChange={setTab} className="w-full h-full">
              <TabsList className="w-full border-b overflow-x-auto flex-nowrap no-scrollbar">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="activity">Subscription History</TabsTrigger>
                <TabsTrigger value="settings">Interaction History</TabsTrigger>
                <TabsTrigger value="actions">Admin actions</TabsTrigger>
                <TabsTrigger value="trail">Audit Trail</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
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
        </CardContent>
      </Card>

      {/* USER PHOTOS */}
      {tab === "profile" && (
        <Card className="mt-4 h-screen  ">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">User Photos</CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <Card className="overflow-hidden flex flex-col">
              <Image
                height={500}
                width={500}
                className="h-[200px] xl:h-[240px] md:h-[260px] lg:h-[280px] object-cover object-top"
                src="https://images.unsplash.com/photo-1664634178711-79e1c44c36c7?q=80&w=687&auto=format&fit=crop"
                alt="user-image"
              />

              <CardContent className="px-4 py-2 text-sm text-muted-foreground">
                Uploaded: May 14, 2025
              </CardContent>

              <CardFooter className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-auto">
                <Button className="w-full">
                  <CheckIcon className="mr-2 h-4 w-4" />
                  Approve
                </Button>

                <Button variant="outline" className="w-full">
                  <XIcon className="mr-2 h-4 w-4" />
                  Reject
                </Button>

                <Button className="w-full xl:col-span-2" variant="destructive">
                  <Trash2Icon className="mr-2 h-4 w-4" />
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
