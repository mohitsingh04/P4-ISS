"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu, LuX, LuUser, LuLogOut, LuSearch } from "react-icons/lu";
import { getProfile, getToken, handleLogout } from "@/contexts/getAssets";
import { UserProps } from "@/types/types";
import SearchModal from "../searchModal/SearchModal";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Yoga Institutes", href: "/yoga-institutes" },
  {
    name: "Jobs",
    href: `${process.env.NEXT_PUBLIC_CAREER_URL}`,
    external: true,
  },
  { name: "Blog", href: "/blog" },
];

const userMenuItems = [
  { name: "Profile", href: "/profile", icon: LuUser },
  { name: "Professional", href: "/profile/professional", icon: LuUser },
  { name: "Logout", href: "/logout", icon: LuLogOut },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState<UserProps | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const tokenRes = await getToken();
      const profileRes = await getProfile();
      if (profileRes) {
        setProfile(profileRes);
      }
      if (tokenRes) {
        setToken(tokenRes);
      }
    };
    checkToken();
  }, []);

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

  const renderUserMenuItems = () =>
    userMenuItems
      .filter((item) => {
        if (item.name === "Profile" && profile?.role === "Professional") {
          return false;
        }
        if (item.name === "Professional" && profile?.role !== "Professional") {
          return false;
        }
        return true;
      })
      .map((item) =>
        item.name === "Logout" ? (
          <button
            key={item.name}
            onClick={async () => {
              await handleLogout();
              setIsUserMenuOpen(false);
              setIsMobileOpen(false);
            }}
            className="w-full text-left flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors duration-200"
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
          </button>
        ) : (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => {
              setIsUserMenuOpen(false);
              setIsMobileOpen(false);
            }}
            className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors duration-200"
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
          </Link>
        )
      );

  return (
    <nav className="bg-white shadow-xs border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative h-6 w-52">
                <Image
                  src="/images/logo.png"
                  alt="Yogprerna Logo"
                  fill
                  className="object-contain"
                  sizes="auto"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ name, href, external }) =>
              external ? (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative overflow-hidden group ${
                    isActive(href)
                      ? "text-purple-700 bg-purple-50 border border-purple-100"
                      : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  <span className="relative z-10">{name}</span>
                </a>
              ) : (
                <Link
                  key={name}
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative overflow-hidden group ${
                    isActive(href)
                      ? "text-purple-700 bg-purple-50 border border-purple-100"
                      : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  <span className="relative z-10">{name}</span>
                </Link>
              )
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-colors duration-200"
            >
              <LuSearch className="w-5 h-5" />
            </button>

            {!token ? (
              <Link
                href={`/auth/login`}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-sm"
              >
                Login
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex cursor-pointer items-center space-x-1 text-purple-700 hover:text-white px-3 py-2 rounded-lg bg-purple-200 hover:bg-purple-600 transition-all duration-200"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src={
                        profile?.avatar?.[0]
                          ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${profile?.avatar?.[0]}`
                          : "/images/course_banner.png"
                      }
                      alt={profile?.username || "User avatar"}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {profile?.username}
                  </span>
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-sm border border-gray-100 z-50">
                    {renderUserMenuItems()}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-colors duration-200"
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
              className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-colors duration-200"
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
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  autoFocus
                />
              </form>
            )}

            {navItems.map(({ name, href, external }) =>
              external ? (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(href)
                      ? "text-purple-700 bg-purple-50 border-l-4 border-purple-600"
                      : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(href)
                      ? "text-purple-700 bg-purple-50 border-l-4 border-purple-600"
                      : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  {name}
                </Link>
              )
            )}

            <div className="pt-4 border-t border-gray-100 mt-4 space-y-2">
              {!token ? (
                <Link
                  href={`/auth/login`}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
                >
                  Login
                </Link>
              ) : (
                <div className="pt-2 space-y-1">{renderUserMenuItems()}</div>
              )}
            </div>
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
