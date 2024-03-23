"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed w-full py-1 bottom-0 transition-all">
      <div className="container mx-auto h-full flex flex-row items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl">©</span> {new Date().getFullYear()}
        </div>
        <div>
          dev:{" "}
          <Link href={"https://github.com/trqlong26/portfolio"} target="_blank">
            qltran
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
