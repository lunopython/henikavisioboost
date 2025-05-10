"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NAVIGATION_ITEMS, COMPANY_NAME, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  const socialIcons: Record<string, React.ReactNode> = {
    facebook: <Facebook className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
  };

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-4">{COMPANY_NAME}</h3>
            <p className="mb-4 text-slate-300">
              Premium exporter of spices, fruits, vegetables, and raffia products to global markets.
            </p>
            <div className="flex space-x-4 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-500 transition-colors"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-amber-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/terms"
                  className="text-slate-300 hover:text-amber-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-300 hover:text-amber-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-4">Contactez-nous</h3>
            <address className="not-italic text-slate-300 space-y-2">
              <p>123 henika place</p>
              <p>Mahamasina</p>
              <p>antananarivo</p>
              <p className="mt-4">
                <a href="tel:+1234567890" className="hover:text-amber-500 transition-colors">
                  +261 340 567-890
                </a>
              </p>
              <p>
                <a href="mailto:info@Henika Group.com" className="hover:text-amber-500 transition-colors">
                  info@Henika Group.com
                </a>
              </p>
            </address>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-4">S'abonner</h3>
            <p className="mb-4 text-slate-300">
              Réjoindre nos Newsletter pour recevoir des nouveaux mise à jour.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                required
              />
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900">
                S'abonner
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center text-slate-300 hover:text-amber-500 transition-colors"
            aria-label="Back to top"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}