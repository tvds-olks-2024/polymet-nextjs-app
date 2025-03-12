"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950"
    >
      <div className="container px-4 md:px-6">
        <div
          className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
        >
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-800 dark:text-blue-300"
              >
                Een eerlijk, transparant en onafhankelijk lotingsproces
              </h1>
              <p
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                Het Lotingsbureau biedt professionele en onafhnakelijke, op maat
                gemaakt ondersteuning bij de uitvoering van toelatingslotingen.
              </p>
            </div>
            <div
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Discover Our Services
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="relative h-[350px] w-full overflow-hidden rounded-xl bg-blue-200 dark:bg-blue-800"
            >
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop"
                alt="Professional team conducting a lottery"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
