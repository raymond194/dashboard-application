import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Bell } from "lucide-react";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const buttonRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex justify-between items-center bg-gray-800 p-4 shadow text-white rounded border-b border-gray-500 w-full">
      <h1 className="text-xl font-bold text-grey-800 cursor-pointer ">
        Dashboard / {pathnames.length === 0 ? "Home" : pathnames.join(" / ")}
      </h1>

      <button
        onClick={() => setOpen(!open)}
        className="inline-block lg-custom:hidden"
        ref={buttonRef}
      >
        <Menu />
      </button>

      {/*  Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 w-screen bg-gray-800 shadow-lg border z-50 "
        >
          {pages.map((page) => {
            return (
              <Link
                key={page.key}
                to={page.path}
                className="flex items-center px-4 py-2 hover:bg-gray-900 border-b last:border-b-0"
                onClick={() => setOpen(false)} // close menu on click
              >
                {page.value}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
const pages = [
  { key: 1, path: "/", icon: "House", value: "Home" },
  { key: 2, path: "/Users", icon: "Users", value: "Users" },
  { key: 3, path: "/Profile", icon: "UserPen", value: "Profile" },
];
export default Navbar;
