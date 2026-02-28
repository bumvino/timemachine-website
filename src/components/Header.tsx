"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-teal/95 backdrop-blur-sm border-b border-gold-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-orange flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">TM</span>
            </div>
            <span className="text-gold-light font-bold text-lg sm:text-xl tracking-wide">
              Time Machine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gold-light/80 hover:text-orange transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-orange hover:bg-orange/90 text-white px-5 py-2 rounded text-sm font-semibold transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gold-light p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-gold-dark/20 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gold-light/80 hover:text-orange transition-colors text-sm font-medium uppercase tracking-wider py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-orange hover:bg-orange/90 text-white px-5 py-2 rounded text-sm font-semibold transition-colors text-center mt-2"
              >
                Get a Quote
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
