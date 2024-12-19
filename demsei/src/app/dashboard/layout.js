import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        {/* Side Bar Trigger open and closes side bar */}
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
  );
}
