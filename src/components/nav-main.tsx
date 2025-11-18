"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const path = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem
              className={cn(
                "text-background font-semibold",
                path === `${item.url}` && "text-foreground"
              )}
            >
              <SidebarMenuButton
                size={"lg"}
                variant={path === `${item.url}` ? "outline" : "default"}
                asChild
                className="px-4"
                tooltip={item.title}
              >
                <Link href={`${item.url}`}>
                  <item.icon
                    className={cn(
                      "w-5 h-5",
                      path === item.url &&
                        "fill-transparent stroke-[3px] [stroke:url(#grad)]"
                    )}
                  />
                  <svg
                    width="0"
                    height="0"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <title>Icon gradient definition</title>
                    <defs>
                      <linearGradient
                        id="grad"
                        x1="0%"
                        y1="100%"
                        x2="0%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#05C3DD" />
                        <stop offset="100%" stopColor="#B14EFF" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span
                    className={cn(
                      path === `${item.url}` &&
                        "bg-linear-to-t from-[#05C3DD] to-[#B14EFFaa] bg-clip-text text-transparent"
                    )}
                  >
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger className="mt-1 text-background" asChild>
                    <SidebarMenuAction className="flex items-center justify-center data-[state=open]:rotate-90 transition-transform duration-200">
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            className="py-6 px-4 text-background font-semibold"
                            size="md"
                            asChild
                          >
                            <Link href={`${subItem.url}`}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
