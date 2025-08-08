"use client";
import Link from "next/link";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found - Indian Sainik School";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-800 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-300 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center z-10 px-6 max-w-2xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-indigo-400 opacity-20 blur-sm">
            404
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Lost in the Flow?
          </h2>
          <p className="text-xl text-indigo-200 leading-relaxed">
            Even in training, we sometimes miss the target. This page seems to
            have marched off the parade ground.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-600 text-white font-semibold rounded-full hover:from-indigo-500 hover:to-indigo-500 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <FaHome className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
