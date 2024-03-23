"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      {/* modified button of cheet in root */}
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Nav
              containerStyles="flex flex-col items-center gap-y-6 text-2xl"
              linkStyles="relative hover:text-secondary/50 transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-black/90 w-full"
            />
            <Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
