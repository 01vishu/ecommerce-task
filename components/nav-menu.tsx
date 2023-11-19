"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
const NavMenu = () => {
  const navMenu = [
    {
      id: 1,
      name: "Home",
      pathname: "/",
    },
    {
      id: 2,
      name: "Products",
      pathname: "/products",
    },
  ];

  const pathName = usePathname();

  return (
    <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
      {navMenu.map((nav) => (
        <Link
          key={nav.id}
          href={`${nav.pathname}`}
          className={cn(
            "hover:text-black cursor-pointer",
            pathName === nav.pathname && "text-black"
          )}
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
