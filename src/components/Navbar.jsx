import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ cartCount, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <header className="fixed w-full top-0 z-50  backdrop-blur-md bg-white/70 dark:bg-gray-900/60 border-b border-white/20 shadow-sm transition">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text tracking-tight"
        >
          ShopEase
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `relative font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 transition 
                ${isActive ? "text-blue-600" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 rounded-full transition-all duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            title="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-700" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 transition"
          >
            <ShoppingCart className="w-6 h-6 text-blue-600 dark:text-blue-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <nav className="flex flex-col items-center py-4 space-y-3">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                end
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive
                      ? "text-blue-600 underline"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
