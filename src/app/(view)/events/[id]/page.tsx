import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { CalendarIcon, ImagesIcon, MapPinIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <section className="space-y-4">
      <h4 className="text-3xl">Event Details</h4>
      <div
        className="h-[300px] bg-cover bg-center w-full rounded-lg border relative overflow-hidden text-background p-6 space-y-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h3 className="text-3xl font-semibold">Summer Music Festival 2025</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <CalendarIcon />
            Saturday, July 15, 2023 at 06:00 PM
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon />
            Central Park, New York
          </div>
        </div>
        <Button variant={"special"} size={"lg"} className="rounded-full">
          Concert
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-7 gap-6">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="text-2xl">Event Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Description</p>
            <CardDescription>
              An immersive experience bringing together the best talent in the
              industry for a night of unforgettable performances.
            </CardDescription>
          </CardContent>
          <CardFooter className="border-t grid grid-cols-2 gap-4 space-y-6">
            <div className="">
              <p className="text-sm font-semibold text-muted-foreground">
                Description
              </p>
              <p>Global Events Co.</p>
            </div>
            <div className="">
              <p className="text-sm font-semibold text-muted-foreground">
                Contact
              </p>
              <p>contact@levents.co</p>
            </div>
            <div className="">
              <p className="text-sm font-semibold text-muted-foreground">
                Ticket Price
              </p>
              <p>$193.93 </p>
            </div>
            <div className="">
              <p className="text-sm font-semibold text-muted-foreground">
                Event ID
              </p>
              <p>EVT - 1001</p>
            </div>
          </CardFooter>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <ButtonGroup>
              <Button variant={"special"}>
                <ImagesIcon />
                Photos
              </Button>
              <Button variant={"secondary"}>
                <VideoIcon />
                Videos
              </Button>
            </ButtonGroup>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <ImageZoom key={i}>
                  <Image
                    alt="event-img"
                    height={600}
                    width={900}
                    className="aspect-video object-cover rounded-lg"
                    src={
                      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  />
                </ImageZoom>
              ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
