"use client"

import React, { useState } from "react";
import { Header } from "(components)/header";
import { Footer } from "(components)/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950"
    >
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
