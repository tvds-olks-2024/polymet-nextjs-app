"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div
              className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800"
            >
              Contact Us
            </div>
            <h2
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-800 dark:text-blue-300"
            >
              Get in Touch
            </h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Have questions or ready to discuss your lottery needs? Contact our
              team today.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2"
        >
          <div className="space-y-6">
            <Card className="border-blue-100 dark:border-blue-800">
              <CardContent
                className="p-6 flex items-start space-x-4"
              >
                <div
                  className="rounded-full bg-blue-100 p-3 dark:bg-blue-800"
                >
                  <MapPinIcon
                    className="h-6 w-6 text-blue-700 dark:text-blue-300"
                  />
                </div>
                <div>
                  <h3
                    className="font-bold text-blue-700 dark:text-blue-400"
                  >
                    Our Office
                  </h3>
                  <p className="text-muted-foreground">
                    Herengracht 123
                    <br />
                    1015 BR Amsterdam
                    <br />
                    The Netherlands
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-100 dark:border-blue-800">
              <CardContent
                className="p-6 flex items-start space-x-4"
              >
                <div
                  className="rounded-full bg-blue-100 p-3 dark:bg-blue-800"
                >
                  <MailIcon
                    className="h-6 w-6 text-blue-700 dark:text-blue-300"
                  />
                </div>
                <div>
                  <h3
                    className="font-bold text-blue-700 dark:text-blue-400"
                  >
                    Email Us
                  </h3>
                  <p className="text-muted-foreground">
                    info@hetlotingsbureau.nl
                    <br />
                    support@hetlotingsbureau.nl
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-100 dark:border-blue-800">
              <CardContent
                className="p-6 flex items-start space-x-4"
              >
                <div
                  className="rounded-full bg-blue-100 p-3 dark:bg-blue-800"
                >
                  <PhoneIcon
                    className="h-6 w-6 text-blue-700 dark:text-blue-300"
                  />
                </div>
                <div>
                  <h3
                    className="font-bold text-blue-700 dark:text-blue-400"
                  >
                    Call Us
                  </h3>
                  <p className="text-muted-foreground">
                    +31 20 123 4567
                    <br />
                    Monday - Friday, 9:00 - 17:00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="border-blue-100 dark:border-blue-800">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    className="border-blue-200 focus:border-blue-500 dark:border-blue-800 dark:focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-blue-200 focus:border-blue-500 dark:border-blue-800 dark:focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea
                    placeholder="Enter your message"
                    className="min-h-[120px] border-blue-200 focus:border-blue-500 dark:border-blue-800 dark:focus:border-blue-400"
                  />
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
