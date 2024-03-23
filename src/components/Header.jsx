"use client";

import Link from "next/link";
import Nav from "./Nav";
import Socials from "./Socials";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 w-full transition-all py-1">
      <div className="container mx-auto flex flex-row items-center justify-between">
        {/* logo */}
        <Link href={"/"} className="relative flex lg:w-4/12 text-4xl font-bold">
          <span>tql.</span>
        </Link>
        {/* title */}
        <span className="hidden lg:block">
          <p>web developer</p>
          <p>software engineer</p>
        </span>
        {/* socials */}
        <div className="hidden lg:block">
          <p>socials:</p>
          <Socials
            containerStyles="hidden lg:flex flex-row mt-1 gap-x-4"
            iconStyles="text-[18px] hover:text-secondary/50"
          />
        </div>
        {/* main nav bar */}
        <Nav
          containerStyles="hidden lg:flex gap-x-5 items-center"
          linkStyles="relative hover:text-secondary/50 transition-all"
          underlineStyles="absolute left-0 top-full h-[2px] bg-black/90 w-full"
        />
        {/* mobile nav bar */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
