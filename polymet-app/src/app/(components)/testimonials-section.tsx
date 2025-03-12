"use client"

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Het Lotingsbureau provided an exceptionally fair and transparent lottery system for our housing allocation project. Their professionalism and attention to detail were outstanding.",
      author: "Martijn de Jong",
      position: "Housing Director, Amsterdam Municipality",
      avatar: "MJ",
    },
    {
      quote:
        "We've been working with Het Lotingsbureau for our school admissions process for three years now. Their system has significantly improved transparency and parent satisfaction.",
      author: "Annemarie Visser",
      position: "Principal, Utrecht International School",
      avatar: "AV",
    },
    {
      quote:
        "The digital lottery platform developed by Het Lotingsbureau for our annual festival ticket allocation was exceptional. The process was smooth, secure, and completely fair.",
      author: "Thomas Smit",
      position: "Event Coordinator, Rotterdam Festival",
      avatar: "TS",
    },
  ];

  // Sample client logos for the marquee
  const clientLogos = [
    { name: "Amsterdam Municipality", placeholder: "AM" },
    { name: "Utrecht International School", placeholder: "UIS" },
    { name: "Rotterdam Festival", placeholder: "RF" },
    { name: "Dutch Housing Association", placeholder: "DHA" },
    { name: "National Education Board", placeholder: "NEB" },
    { name: "Cultural Events Foundation", placeholder: "CEF" },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950"
    >
      <div className="container px-4 md:px-6">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div
              className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800"
            >
              Testimonials
            </div>
            <h2
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-800 dark:text-blue-300"
            >
              What Our Clients Say
            </h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Dont just take our word for it - hear from some of our satisfied
              clients.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-blue-100 dark:border-blue-800"
              id={`m3daoy_${index}`}
            >
              <CardContent
                className="p-6 pt-10 relative"
                id={`ajcvpt_${index}`}
              >
                <div className="absolute -top-5 left-6" id={`xbaoai_${index}`}>
                  <div
                    className="rounded-full bg-blue-100 p-3 dark:bg-blue-800"
                    id={`4rpa36_${index}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700 dark:text-blue-300"
                      id={`jtzsik_${index}`}
                    >
                      <path
                        d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                        id={`ic2ma7_${index}`}
                      />

                      <path
                        d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                        id={`7b705z_${index}`}
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-muted-foreground" id={`c4xw9r_${index}`}>
                  {testimonial.quote}
                </p>
              </CardContent>
              <CardFooter
                className="px-6 py-4 border-t border-blue-100 dark:border-blue-800 flex items-center"
                id={`wn5dnr_${index}`}
              >
                <Avatar
                  className="h-10 w-10 mr-3 border-2 border-blue-200 dark:border-blue-700"
                  id={`ofzbwq_${index}`}
                >
                  <AvatarFallback
                    className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300"
                    id={`pwknkf_${index}`}
                  >
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div id={`sadicz_${index}`}>
                  <p
                    className="font-medium text-blue-700 dark:text-blue-400"
                    id={`8t1zie_${index}`}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    id={`c7hhqg_${index}`}
                  >
                    {testimonial.position}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Client Logos Marquee Section */}
        <div className="mt-16 text-center">
          <h3
            className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-6"
          >
            Trusted by Leading Organizations
          </h3>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden py-6">
            <div
              className="flex justify-center flex-wrap gap-6 max-w-5xl mx-auto"
            >
              {clientLogos.map((client, index) => (
                <div
                  key={`client-logo-${index}`}
                  className="flex items-center justify-center w-[180px] h-20 bg-white dark:bg-blue-900 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800"
                  id={`fvnggp_${index}`}
                >
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 font-bold text-lg"
                    id={`w1ae90_${index}`}
                  >
                    {client.placeholder}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            These are just a few of the organizations that rely on Het
            Lotingsbureau for their lottery needs.
            <br />
            Contact us to join our growing list of satisfied clients.
          </p>
        </div>
      </div>
    </section>
  );
}
