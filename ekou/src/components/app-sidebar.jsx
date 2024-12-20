import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, Settings, SquarePlus, SquarePlusIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const sideBarItems = [
  {
    title: "Post",
    url: "#",
    icon: SquarePlus,
  },
  {
    title: "Calander",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-none">
      <SidebarHeader className="pl-10">
        <SidebarMenu>
          <SidebarMenuItem className="font-bold"> Demsei</SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="pl-10">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="cursor-default w-5 flex items-center"
                >
                  <Link href={item.url} className="cursor-default peer">
                    <item.icon
                      className={`h-5 w-5 hover:text-black dark:hover:text-white cursor-default text-muted-foreground transition delay-100`}
                    />
                  </Link>
                  <div
                    className={`transition delay-300 duration-500 ease-in-out peer-hover:opacity-100 dark:peer-hover:opacity-100 opacity-0 absolute left-9 z-50 rounded-md border-popover border bg-popover px-3 py-2 text-popover-foreground shadow-md outline-none`}
                  >
                    {item.title}
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="pl-10">
        <SidebarMenu>
          <SidebarMenuItem>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
