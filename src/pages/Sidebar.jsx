import React from "react";
import { Link } from "react-router-dom";
import { UserPen, Home, Users } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-[260px] flex-shrink-0 h-screen bg-gray-800 text-white flex flex-col p-4 border border-gray-500 hidden lg-custom:flex">
      <div className="text-2xl font-bold mb-8">My App</div>
      {pages.map((page) => {
        const PageIcon = page.icon;
        return (
          <Link
            key={page.key}
            to={page.path}
            className="mb-3 hover:bg-gray-700 p-2 rounded flex gap-4 align-middle"
          >
            {PageIcon === "House" ? (
              <Home />
            ) : PageIcon === "Users" ? (
              <Users />
            ) : PageIcon === "UserPen" ? (
              <UserPen />
            ) : (
              ""
            )}{" "}
            {page.value}
          </Link>
        );
      })}

      
    </div>
  );
};

export default Sidebar;

export const pages = [
  { key: 1, path: "/", icon: "House", value: "Home" },
  { key: 2, path: "/Users", icon: "Users", value: "Users" },
  { key: 3, path: "/Profile", icon: "UserPen", value: "Profile" },
];
