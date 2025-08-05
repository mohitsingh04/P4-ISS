"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { API } from "../../context/API";
import GetToken from "../../CallBacks/GetToken";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const token = GetToken();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await API.get(`/profile/logout`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-purple-700 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`${process.env.NEXT_PUBLIC_YP_URL}`}
          className="flex items-center"
        >
          <img
            src="/Images/yogprerna-logo.png"
            alt="Yog Prerna Logo"
            className="h-10 w-auto bg-white p-2 rounded-sm"
          />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* <Link
            href="/about"
            className="text-white hover:text-purple-400 transition"
          >
            About
          </Link>*/}
          {!token ? (
            <Link
              href={`${process.env.NEXT_PUBLIC_YP_URL}/auth/login`}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              Login
            </Link>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-800 px-4 pb-4">
          {/* <Link
            href="/about"
            className="block text-white py-2 hover:text-purple-400"
          >
            About
          </Link> */}
          {!token ? (
            <Link
              href={`${process.env.NEXT_PUBLIC_YP_URL}/auth/login`}
              className="w-full bg-purple-600 text-white px-4 py-2 mt-2 rounded hover:bg-purple-700 transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => handleLogout}
              className="w-full bg-purple-600 text-white px-4 py-2 mt-2 rounded hover:bg-purple-700 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
