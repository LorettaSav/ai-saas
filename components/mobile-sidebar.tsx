"use client"

import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function MobileSidebar() {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu />
    </Button>
  );
}
