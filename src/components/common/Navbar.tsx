import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

type NavItem = {
  id: number;
  icon: React.ReactNode;
  path: string
};

const Navbar: React.FC = () => {
  const [active, setActive] = useState<number>(1);
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: 1,  icon: <FiHome size={22}/>, path: "/" },
    { id: 2,  icon: <BsBriefcase size={22}/>, path: "/Jobs" },
    { id: 3,  icon: <BsChatSquareText size={22}/>, path: "/Messages" },
    { id: 4,  icon: <CiUser size={22}/>, path: "/profile" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-full bg-white/20 backdrop-blur-lg z-[999]">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center text-sm transition-colors ${
              location.pathname === item.path ? "text-purple-600" : "text-white"
            }`}
          >
            <div className="relative ">
              {item.icon}
              {active === item.id && (
                <span className="absolute mt-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-600"></span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;