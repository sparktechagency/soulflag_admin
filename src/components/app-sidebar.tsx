"use client";

import * as React from "react";
import {
  BarChartBigIcon,
  BookOpen,
  Bot,
  CreditCardIcon,
  FileBadgeIcon,
  Frame,
  LayoutDashboardIcon,
  LayoutList,
  LifeBuoy,
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  Map,
  NetworkIcon,
  PieChart,
  Send,
  Settings2,
  SettingsIcon,
  SquareTerminal,
  UserCogIcon,
  UsersIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
// import { NavSecondary } from "@/components/nav-secondary";
// import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import Stars from "@/components/stars";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Users",
      url: "/users",
      icon: UsersIcon,
    },
    {
      title: "Moderation",
      url: "/moderation",
      icon: SettingsIcon,
      items: [
        {
          title: "Moderation Queue",
          url: "/moderation/queue",
        },
        {
          title: "Photo Approval",
          url: "/moderation/approval",
        },
      ],
    },
    {
      title: "Affiliate Feeds",
      url: "/affiliate-feeds",
      icon: FileBadgeIcon,
    },
    {
      title: "Reports & Analytics",
      url: "/report",
      icon: BarChartBigIcon,
    },
    {
      title: "Payouts",
      url: "/payouts",
      icon: CreditCardIcon,
    },
    {
      title: "Affiliate Network",
      url: "/network",
      icon: NetworkIcon,
    },
    {
      title: "Content Management",
      url: "/content",
      icon: LayoutList,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader className="pt-12 ">
        <SidebarMenu>
          <div className="w-full flex justify-center items-center ">
            <Link href={"/"} className="w-fit flex justify-center">
              <Image
                src={"/logo.png"}
                height={200}
                width={600}
                alt="icon"
                className="w-2/3 "
              />
            </Link>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-8">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
