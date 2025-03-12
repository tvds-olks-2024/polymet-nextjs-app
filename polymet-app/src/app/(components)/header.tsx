"use client"

import React from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div
        className="container flex h-16 items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div
            className="font-bold text-2xl text-blue-700 dark:text-blue-400"
          >
            <img
              src="/logo.jpeg"
              alt="Het Lotingsbureau Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-700 dark:hover:text-blue-400"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-700 dark:hover:text-blue-400"
          >
            What We Offer
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-700 dark:hover:text-blue-400"
          >
            Our Team
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-700 dark:hover:text-blue-400"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get in Touch
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t border-border/40 bg-background"
        >
          <div className="container py-4 flex flex-col space-y-4">
            <button
              onClick={() => {
                scrollToSection("about");
                toggleMenu();
              }}
              className="text-sm font-medium py-2 text-muted-foreground hover:text-blue-700 dark:hover:text-blue-400"
            >
              About Us
            </button>
            <button
              onClick={() => {
                scrollToSection("services");
                toggleMenu();
              }}
              className="text-sm font-medium py-2 text-muted-foreground hover:text-blue-700 dark:hover:text-blue-400"
            >
              What We Offer
            </button>
            <button
              onClick={() => {
                scrollToSection("team");
                toggleMenu();
              }}
              className="text-sm font-medium py-2 text-muted-foreground hover:text-blue-700 dark:hover:text-blue-400"
            >
              Our Team
            </button>
            <button
              onClick={() => {
                scrollToSection("contact");
                toggleMenu();
              }}
              className="text-sm font-medium py-2 text-muted-foreground hover:text-blue-700 dark:hover:text-blue-400"
            >
              Contact
            </button>
            <Button
              onClick={() => {
                scrollToSection("contact");
                toggleMenu();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
