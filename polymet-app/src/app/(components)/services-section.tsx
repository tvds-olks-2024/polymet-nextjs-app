"use client"

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutIcon, SettingsIcon, UsersIcon, GlobeIcon } from "lucide-react";

export function ServicesSection() {
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
              What We Offer
            </div>
            <h2
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-800 dark:text-blue-300"
            >
              Our Comprehensive Services
            </h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Het Lotingsbureau provides a range of lottery management solutions
              tailored to meet the specific needs of our clients.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12"
        >
          <Card className="border-blue-100 dark:border-blue-800">
            <CardHeader className="pb-2">
              <div
                className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center mb-4 dark:bg-blue-800"
              >
                <LayoutIcon
                  className="h-6 w-6 text-blue-700 dark:text-blue-300"
                />
              </div>
              <CardTitle
                className="text-blue-700 dark:text-blue-400"
              >
                Custom Lottery Systems
              </CardTitle>
              <CardDescription>
                Tailored lottery solutions designed to meet your specific
                requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We design and implement custom lottery systems for various
                purposes, including housing allocations, school admissions,
                event ticket distributions, and more. Our systems are built with
                fairness and transparency as core principles.
              </p>
            </CardContent>
          </Card>
          <Card className="border-blue-100 dark:border-blue-800">
            <CardHeader className="pb-2">
              <div
                className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center mb-4 dark:bg-blue-800"
              >
                <SettingsIcon
                  className="h-6 w-6 text-blue-700 dark:text-blue-300"
                />
              </div>
              <CardTitle
                className="text-blue-700 dark:text-blue-400"
              >
                Lottery Management
              </CardTitle>
              <CardDescription>
                End-to-end management of your lottery process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                From planning to execution and result verification, we handle
                the entire lottery process. Our experienced team ensures that
                every step is conducted with integrity and in compliance with
                relevant regulations.
              </p>
            </CardContent>
          </Card>
          <Card className="border-blue-100 dark:border-blue-800">
            <CardHeader className="pb-2">
              <div
                className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center mb-4 dark:bg-blue-800"
              >
                <UsersIcon
                  className="h-6 w-6 text-blue-700 dark:text-blue-300"
                />
              </div>
              <CardTitle
                className="text-blue-700 dark:text-blue-400"
              >
                Public Draws & Events
              </CardTitle>
              <CardDescription>
                Professional facilitation of public lottery events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We organize and facilitate public lottery draws and events,
                ensuring a professional, transparent, and engaging experience
                for all participants. Our team handles all aspects, from venue
                setup to result announcement.
              </p>
            </CardContent>
          </Card>
          <Card className="border-blue-100 dark:border-blue-800">
            <CardHeader className="pb-2">
              <div
                className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center mb-4 dark:bg-blue-800"
              >
                <GlobeIcon
                  className="h-6 w-6 text-blue-700 dark:text-blue-300"
                />
              </div>
              <CardTitle
                className="text-blue-700 dark:text-blue-400"
              >
                Digital Solutions
              </CardTitle>
              <CardDescription>
                Advanced digital lottery platforms and tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our digital lottery solutions include secure online platforms,
                random selection software, and verification tools. These
                solutions combine convenience with the highest standards of
                security and fairness.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
