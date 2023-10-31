import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { TbMenu } from "react-icons/tb";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 lg:px-12 h-20 lg:py-5 fixed right-0 top-0 left-0 z-10">
      {/* my name  */}
      <Link
        to={"/"}
        className="text-xl lg:text-3xl font-semibold cursor-pointer"
      >
        Wahid.
      </Link>

      {/* for large devices  */}
      <div className="lg:flex lg:space-x-5 lg:text-lg hidden">
        {navItems?.map((item, index) => (
          <NavLink key={index} to={item?.href}>
            {item?.label}
          </NavLink>
        ))}
      </div>

      {/* for small devices  */}
      <div className="dropdown dropdown-end dropdown-hover lg:hidden">
        <label tabIndex="0" className="btn m-1 btn-accent btn-xl">
          <TbMenu />
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52 flex flex-col gap-2"
        >
          {navItems?.map((item, index) => (
            <li key={index}>
              <NavLink to={item?.href}>{item?.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
