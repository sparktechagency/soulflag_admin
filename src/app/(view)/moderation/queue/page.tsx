import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/kibo-ui/status";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import {
  ArrowRight,
  BanIcon,
  CheckCircleIcon,
  ShareIcon,
  Trash2Icon,
  TriangleAlertIcon,
  XCircleIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="h-full flex flex-col flex-1 gap-6">
      <h2 className="text-2xl">Report Details</h2>
      <div className="flex-1 h-full w-full grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Report Overview</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label>Report ID</Label>
              <Input value="REP-2023-0421" readOnly />
            </div>
            <div className="space-y-4">
              <Label>Report Type</Label>
              <Input placeholder="Message" readOnly />
            </div>
            <div className="space-y-4">
              <Label>Current Status</Label>
              <Status status="degraded">
                <StatusIndicator />
                <StatusLabel>Pending</StatusLabel>
              </Status>
            </div>
            <div className="space-y-4">
              <Label>Reason</Label>
              <Input value="Harrasement" readOnly />
            </div>
            <div className="col-span-2">
              <h4 className="mb-4 font-semibold">Reported User</h4>
              <Card>
                <CardContent className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={"https://avatar.iran.liara.run/public"}
                      />
                      <AvatarFallback>UI</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold">Raven</h4>
                  </div>
                  <Button variant={"link"} className="cursor-pointer" asChild>
                    <Link href={"/users/id"}>
                      View Profile <ArrowRight />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-2">
              <h4 className="mb-4 font-semibold">Reported By</h4>
              <Card>
                <CardContent className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={"https://avatar.iran.liara.run/public"}
                      />
                      <AvatarFallback>UI</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold">Raven</h4>
                  </div>
                  <Button variant={"link"} className="cursor-pointer" asChild>
                    <Link href={"/users/id"}>
                      View Profile <ArrowRight />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between border-b">
            <CardTitle>Evidence</CardTitle>
            <Button className="w-fit" variant={"outline"} size={"sm"}>
              <ShareIcon />
              View all
            </Button>
          </CardHeader>
          <CardContent className="h-full">
            <div className="full w-4/5 mx-auto relative">
              <ImageZoom>
                <Image
                  alt="evidence#303"
                  height={1200}
                  width={900}
                  className="w-full! object-cover"
                  src={
                    "https://images.unsplash.com/photo-1762115839625-8f793c491f54?q=80&w=907&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </ImageZoom>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className=" flex justify-end gap-4">
        <Button className="bg-green-600 hover:bg-green-500">
          <CheckCircleIcon />
          Mark as Resolved
        </Button>
        <Button variant={"destructive"}>
          <XCircleIcon />
          Dismiss Report
        </Button>
        <Button className="bg-amber-600 hover:bg-amber-500">
          <TriangleAlertIcon />
          Warn User
        </Button>
        <Button variant={"destructive"}>
          <Trash2Icon />
          Delete Content
        </Button>
        <Button className="bg-lime-600 hover:bg-lime-500">
          <BanIcon />
          Suspend User
        </Button>
      </div>
    </div>
  );
}
