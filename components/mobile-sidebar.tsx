"use client";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export default function MobileSidebar() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                  <Sidebar/>
              </SheetContent>
      </Sheet>
    </>
  );
}
