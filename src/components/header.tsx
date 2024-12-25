"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const linkData = [
    { name: "Performance", path: "/performance" },
    { name: "Reliability", path: "/reliability" },
    { name: "Scale", path: "/scale" },
  ];
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white px-12 items-center">
        <Link className="text-6xl font-bold" href="/">
          Home
        </Link>
        <div className="text-4xl space-x-14">
          {linkData.map((link) => (
            <Link
              key={link.path}
              className={pathname === link.path ? "active" : ""}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
