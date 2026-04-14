"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "News", href: "/news" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-brand-dark">
          GPP
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#projects"
            className="text-sm font-medium text-brand-dark hover:bg-brand-dark/5 px-3 py-1.5 rounded-full transition-colors"
          >
            Portfolio
          </Link>
          <button className="bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-dark/90 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
