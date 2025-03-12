"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon, ShieldIcon, UsersIcon } from "lucide-react";

export function AboutSection() {
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
              Over ons
            </div>
            <h2
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-800 dark:text-blue-300"
            >
              Wie zijn wij
            </h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Het Lotingsbureau is een start-up die gespecialiseerd is in het
              aanbieden van eerlijke, transparante en onafhankelijke
              lotingsprocessen voor sport-, studenten- en andere verenigingen.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
        >
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3
                className="text-2xl font-bold tracking-tighter md:text-3xl text-blue-700 dark:text-blue-400"
              >
                Onze missie
              </h3>
              <p
                className="max-w-[600px] text-muted-foreground md:text-lg/relaxed"
              >
                Wij zetten ons in voor een eerlijk, transparant en onafhankelijk
                lotingsproces op maat. We bieden onze klanten volledige
                ondersteuning en vertrouwen bij het behandelen van vraagstukken
                rondom inschrijvingsprocessen, lotingen, data en privacy.
              </p>
            </div>
            <div className="space-y-2">
              <h3
                className="text-2xl font-bold tracking-tighter md:text-3xl text-blue-700 dark:text-blue-400"
              >
                Onze geschiedenis
              </h3>
              <p
                className="max-w-[600px] text-muted-foreground md:text-lg/relaxed"
              >
                Het Lotingsbureau is in 2021 opgericht door Mats en Tim, die uit
                ervaring de uitdagingen en complexiteiten van lotingsprocessen
                hebben ondervonden. Sindsdien hebben wij een sterke band
                opgebouwd met diverse studentenverenigingen en hen begeleid bij
                meer dan 20 lotingen, evenals bij het opstellen en uitvoeren van
                lotingsprocedures.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className="relative h-[350px] w-full overflow-hidden rounded-xl bg-blue-200 dark:bg-blue-800"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Het Lotingsbureau office"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8"
        >
          <Card className="border-blue-100 dark:border-blue-800">
            <CardContent
              className="p-6 flex flex-col items-center text-center space-y-4"
            >
              <div
                className="rounded-full bg-blue-100 p-3 dark:bg-blue-800"
              >
                <CheckIcon
                  className="h-6 w-6 text-blue-700 dark:text-blue-300"
                />
              </div>
              <div className="space-y-2">
                <h3
                  className="font-bold text-blue-700 dark:text-blue-400"
                >
                  Onafhankelijkheid
                </h3>
                <p className="text-sm text-muted-foreground">
                  Wij garanderen een objectieve en onafhankelijke uitvoering van
                  lotingsprocessen, met notariële controle en aanvullende
                  interne waarborgen.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-blue-100 dark:border-blue-800">
            <CardContent
              className="p-6 flex flex-col items-center text-center space-y-4"
            >
              <div
                className="rounded-full bg-blue-100 p-3 dark:bg-blue-800"
              >
                <ShieldIcon
                  className="h-6 w-6 text-blue-700 dark:text-blue-300"
                />
              </div>
              <div className="space-y-2">
                <h3
                  className="font-bold text-blue-700 dark:text-blue-400"
                >
                  Persoonlijke betrokkenheid
                </h3>
                <p className="text-sm text-muted-foreground">
                  Wij bieden maatwerk en stemmen onze dienstverlening af op de
                  specifieke wensen en behoeften van studentenverenigingen.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card
            className="border-blue-100 dark:border-blue-800 sm:col-span-2 md:col-span-1"
          >
            <CardContent
              className="p-6 flex flex-col items-center text-center space-y-4"
            >
              <div
                className="rounded-full bg-blue-100 p-3 dark:bg-blue-800"
              >
                <UsersIcon
                  className="h-6 w-6 text-blue-700 dark:text-blue-300"
                />
              </div>
              <div className="space-y-2">
                <h3
                  className="font-bold text-blue-700 dark:text-blue-400"
                >
                  Ervaring
                </h3>
                <p className="text-sm text-muted-foreground">
                  Door onze eigen besetuurlijke ervaring begrijpen wij de
                  uitdagingen waarmee bestuurders te maken krijgen en bieden we
                  deskundige ondersteuning in dit proces.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
