import { Copyright } from "lucide-react";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-600 text-white py-4 text-center">
      <p className="text-sm">
        &copy;
        <a
          href={`${process.env.NEXT_PUBLIC_YP_URL}`}
          rel="noopener noreferrer"
          className="underline hover:text-white/80 transition-colors ms-2"
        >
          Yogprerna
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
