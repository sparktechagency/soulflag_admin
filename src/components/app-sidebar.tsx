"use client";

import * as React from "react";
import {
  AlertCircleIcon,
  BadgeDollarSignIcon,
  CalendarIcon,
  ChartNetworkIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  LayoutList,
  LockIcon,
  NetworkIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
// import { NavSecondary } from "@/components/nav-secondary";
// import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

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
      title: "Analytics",
      url: "/analytics",
      icon: ChartNetworkIcon,
    },
    {
      title: "Moderation",
      url: "/moderation",
      icon: AlertCircleIcon,
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
      title: "Revenue",
      url: "/revenue/plan",
      icon: BadgeDollarSignIcon,
      items: [
        {
          title: "Subscription Plan",
          url: "/revenue/plan",
        },
        {
          title: "Digital Products",
          url: "/revenue/products",
        },
        {
          title: "Transactions",
          url: "/revenue/transactions",
        },
        {
          title: "Cancellations",
          url: "/revenue/cancellation",
        },
        {
          title: "Refund",
          url: "/revenue/refund",
        },
        {
          title: "Campaign",
          url: "/revenue/campaign",
        },
      ],
    },
    {
      title: "Events & Marketing",
      url: "/events",
      icon: CalendarIcon,
      items: [
        {
          title: "Events",
          url: "/events",
        },
        {
          title: "Push Notification",
          url: "/events/notif",
        },
      ],
    },
    {
      title: "KVKK",
      url: "/kvvk",
      icon: LockIcon,
      items: [
        {
          title: "DSAR Portal",
          url: "/kvvk",
        },
        {
          title: "Consent Log",
          url: "/kvvk/log",
        },
        {
          title: "Data Retention",
          url: "/kvvk/data",
        },
        {
          title: "Data Deletion",
          url: "/kvvk/delete",
        },
      ],
    },
    {
      title: "Admin Accounts",
      url: "/admin-accounts",
      icon: NetworkIcon,
    },
    {
      title: "Settings",
      url: "/settings/profile",
      icon: SettingsIcon,
      items: [
        {
          title: "Reward Systems",
          url: "/settings/reward",
        },
        {
          title: "Profile",
          url: "/settings/profile",
        },
        {
          title: "Privacy Policy",
          url: "/settings/privacy",
        },
        {
          title: "Terms & Conditions",
          url: "/settings/terms",
        },
      ],
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
                className="w-2/3"
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
