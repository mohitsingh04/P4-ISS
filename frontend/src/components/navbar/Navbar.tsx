"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu, LuX, LuSearch } from "react-icons/lu";
import SearchModal from "../searchModal/SearchModal";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Institutes", href: "/institutes" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      window.location.href = `/search?q=${encodeURIComponent(
        searchQuery.trim()
      )}`;
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-xs border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative h-6 w-52">
                <Image
                  src="/images/logo.png"
                  alt="Indian Sainik School Logo"
                  fill
                  className="object-contain"
                  sizes="auto"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative overflow-hidden group ${
                  isActive(href)
                    ? "text-indigo-700 bg-indigo-50 border border-indigo-100"
                    : "text-gray-700 hover:text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                <span className="relative z-10">{name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors duration-200"
            >
              <LuSearch className="w-5 h-5" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors duration-200"
            >
              {isMobileOpen ? (
                <LuX className="w-6 h-6" />
              ) : (
                <LuMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xs">
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors duration-200"
            >
              <LuSearch className="w-5 h-5" />
              <span>Search</span>
            </button>
            {isSearchOpen && (
              <form onSubmit={handleSearchSubmit} className="mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                />
              </form>
            )}

            {navItems.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setIsMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(href)
                    ? "text-indigo-700 bg-indigo-50 border-l-4 border-indigo-600"
                    : "text-gray-700 hover:text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </nav>
  );
}
