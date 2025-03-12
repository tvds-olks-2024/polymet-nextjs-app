"use client"

import React from "react";
import { HeroSection } from "(components)/hero-section";
import { AboutSection } from "(components)/about-section";
import { ServicesSection } from "(components)/services-section";
import { TeamSection } from "(components)/team-section";
import { TestimonialsSection } from "(components)/testimonials-section";
import { ContactSection } from "(components)/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
