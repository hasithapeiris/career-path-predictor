"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-cyan-500 to-blue-500">
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
              D
            </div>
          </div>
          <span className="text-lg font-bold text-foreground">DevPath</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            How It Works
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-4">
          <ThemeToggle />
          <button className="hidden text-sm font-medium text-foreground/80 hover:text-foreground md:block">
            Log In
          </button>
          <button className="hidden bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium text-white rounded-lg shadow-sm hover:shadow-md transition-all md:block">
            Sign Up
          </button>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground/80 hover:text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container bg-background md:hidden">
          <nav className="flex flex-col space-y-4 pb-6 pt-2">
            <Link
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <button
                className="text-left text-sm font-medium text-foreground/80 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </button>
              <button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium text-white rounded-lg shadow-sm hover:shadow-md transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
