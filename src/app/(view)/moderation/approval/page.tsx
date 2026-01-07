import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Avatar } from "@radix-ui/react-avatar";
import { CheckIcon, SearchIcon, User2Icon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Photo Approvals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center gap-4">
          <InputGroup>
            <InputGroupInput placeholder="Search passengers by name,email, or phone...." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <Button className="ml-12">
            <CheckIcon /> Approve
          </Button>
          <Button variant={"secondary"}>
            <XIcon /> Reject
          </Button>
        </div>
        <div className="mt-6 w-full lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="py-0 overflow-hidden">
            <CardHeader className="aspect-[3/2] relative">
              <Checkbox className="absolute z-20 bg-background top-4 left-4" />
              <Image
                src={
                  "https://c7.alamy.com/comp/2DBX3TR/angel-sculpture-by-giulio-monteverde-for-the-oneto-family-monument-in-staglieno-cemetery-genoa-italy-1882-2DBX3TR.jpg"
                }
                alt="user#23"
                className="object-cover object-top"
                fill
              />
            </CardHeader>
            <CardContent>
              <div className="w-full flex items-center gap-4 pb-4">
                <Avatar className="size-14">
                  <AvatarImage src={"https://avatar.iran.liara.run/public"} />
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
                <div className="">
                  <h4 className="font-bold">Monteverde Angel</h4>
                  <p className="text-muted-foreground text-sm">
                    Uploaded:May 14, 2025
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mb-4 flex justify-between items-center gap-4">
              <Button className="flex-1">
                <CheckIcon /> Approve
              </Button>
              <Button variant={"secondary"}>
                <XIcon /> Reject
              </Button>
              <div className="">
                <Button variant={"outline"} size={"icon"} asChild>
                  <Link href={"/users/id"}>
                    <User2Icon />
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
