import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string; // Add this to accept dynamic classes
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, className }) => {
  return (
    <Link href={`/${href}`} className={`block py-2 pl-3 pr-4 rounded md:p-0 ${className}`}>
      {title}
    </Link>
  );
};

export default NavLink;
