"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <header className="w-full max-w-4xl flex items-center justify-between px-6 py-3
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(138,79,255,0.1)]
      ">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          POWER
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">

          {/* App dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-white hover:bg-white/8 rounded-xl transition-all"
            >
              App
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-3.5 w-3.5 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48
                bg-[#0a0a0a]/80 backdrop-blur-2xl
                border border-white/10
                rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)]
                overflow-hidden
              ">
                <div className="py-1.5">
                  {[
                    { href: '/#features', label: 'Features' },
                    { href: '/#benefits', label: 'Benefits' },
                    { href: '/#how-it-works', label: 'How It Works' },
                    { href: '/#testimonials', label: 'Testimonials' },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="px-4 py-2 text-sm font-bold text-white hover:bg-white/8 rounded-xl transition-all">
            Blog
          </Link>

          <Link href="/faq" className="px-4 py-2 text-sm font-bold text-white hover:bg-white/8 rounded-xl transition-all">
            FAQ
          </Link>
        </nav>

        {/* CTA */}
        <a
          href="https://apps.apple.com/us/app/power-quit-porn-now/id6743706444"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white text-sm px-5 py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
        >
          Try for Free
        </a>
      </header>
    </div>
  );
}
