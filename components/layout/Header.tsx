"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS, COMPANY_NAME, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const socialIcons: Record<string, React.ReactNode> = {
    facebook: <Facebook className="h-4 w-4" />,
    twitter: <Twitter className="h-4 w-4" />,
    instagram: <Instagram className="h-4 w-4" />,
    linkedin: <Linkedin className="h-4 w-4" />,
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 sticky-header", 
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-playfair font-bold text-emerald-700">
                {COMPANY_NAME}
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "nav-link text-sm font-medium transition-colors hover:text-emerald-600",
                  pathname === item.href 
                    ? "text-emerald-700 font-semibold" 
                    : "text-slate-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Social icons - desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-emerald-700 transition-colors"
                aria-label={social.name}
              >
                {socialIcons[social.icon]}
              </a>
            ))}
            <Button size="sm" className="ml-4 bg-emerald-700 hover:bg-emerald-800">
              Contactez-nous
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-700 hover:text-emerald-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-[500px] opacity-100 visible" 
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-white shadow-lg`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "block py-2 text-base font-medium nav-link",
                pathname === item.href 
                  ? "text-emerald-700 font-semibold" 
                  : "text-slate-700"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 flex items-center space-x-4 border-t border-slate-200 mt-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-emerald-700 transition-colors"
                aria-label={social.name}
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
          <Button className="w-full mt-4 bg-emerald-700 hover:bg-emerald-800">
            Contactez-nous
          </Button>
        </div>
      </div>
    </header>
  );
}