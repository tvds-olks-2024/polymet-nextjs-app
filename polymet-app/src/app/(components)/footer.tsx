"use client"

import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="w-full border-t border-border/40 bg-background"
    >
      <div className="container flex flex-col gap-6 py-8 md:py-12">
        <div
          className="flex flex-col gap-6 md:flex-row md:justify-between"
        >
          <div className="space-y-4">
            <h3
              className="text-xl font-bold text-blue-700 dark:text-blue-400"
            >
              Het Lotingsbureau
            </h3>
            <p
              className="max-w-[250px] text-sm text-muted-foreground"
            >
              Professional lottery management services with integrity and
              transparency.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Het Lotingsbureau. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-blue-700 dark:hover:text-blue-400"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-blue-700 dark:hover:text-blue-400"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
