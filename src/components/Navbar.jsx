import React, { useState } from "react";
import { Code, Home, User, Box, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const navLinks = [
    { href: "#home", icon: <Home size={18} />, label: "Home" },
    { href: "#about", icon: <User size={18} />, label: "About" },
    { href: "#projects", icon: <Briefcase size={18} />, label: "Projects" },
    { href: "#skills", icon: <Box size={18} />, label: "Skills" },
    { href: "#contact", icon: <Mail size={18} />, label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/[0.02] backdrop-blur-md border-b border-white/[0.05]">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <div className="relative flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 shadow-lg rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
                Werosh
              </span>
              <span className="text-gray-400">.dev</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 rounded-lg hover:text-white"
                >
                  <span className="relative z-10 transition-all duration-300 text-violet-500 hover:scale-110">
                    {link.icon}
                  </span>
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg shadow-lg md:hidden group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-violet-500 to-indigo-500" />
            <span className="relative z-10">Menu</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 px-4 ${isOpen ? "max-h-[400px] pb-4" : "max-h-0"}`}>
          <div className="space-y-1 bg-white/[0.02] rounded-xl p-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 rounded-lg group hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 transition-all duration-300 text-violet-500 hover:scale-110">
                  {link.icon}
                </span>
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
