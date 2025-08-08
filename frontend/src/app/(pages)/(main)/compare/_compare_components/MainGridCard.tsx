import React from "react";
import { LuPlus } from "react-icons/lu";

export default function MainGridCard({
  onClick,
  title,
  index,
}: {
  onClick: () => void;
  title: string;
  index: number;
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden border-2 border-dashed border-indigo-200 hover:border-indigo-400 bg-indigo-50 hover:bg-indigo-100 rounded-2xl flex flex-col items-center justify-center py-12 px-6 transition-all duration-500 hover:shadow-md hover:scale-105 hover:-translate-y-2"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 right-4 w-16 h-16 bg-indigo-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-indigo-400 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-indigo-100 group-hover:bg-indigo-200 flex items-center justify-center rounded-full mb-4 transition-all duration-500 shadow-xs group-hover:shadow-sm group-hover:scale-110">
          <LuPlus
            size={24}
            className="text-indigo-600 group-hover:text-indigo-700 transition-all duration-300 group-hover:rotate-90"
          />
        </div>

        <div className="text-center">
          <p className="text-indigo-800 text-lg font-bold group-hover:text-indigo-900 transition-colors duration-300 mb-2">
            {title} {index + 1}
          </p>
          <p className="text-indigo-500 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            Click to select Institute
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/5 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
    </div>
  );
}
