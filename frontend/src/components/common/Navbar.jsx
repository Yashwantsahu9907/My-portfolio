import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skill", path: "/skill" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-red-700 text-white flex items-center justify-center text-xl font-bold shadow-lg">
              YS
            </div>

            <h1 className="text-2xl font-bold tracking-wide text-gray-900">
              YASHWANT
              <span className="text-red-700"> SAHU</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-[15px] font-semibold uppercase tracking-wide transition-all duration-300 
                  ${
                    isActive
                      ? "text-red-700"
                      : "text-gray-700 hover:text-red-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-red-700 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:scale-105">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-5" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wider ${
                  isActive ? "text-red-700" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="bg-red-700 text-white px-6 py-3 rounded-lg font-medium">
            Contact Me
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;