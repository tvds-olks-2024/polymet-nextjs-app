"use client"

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkedinIcon } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Joost van der Meer",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in lottery management, Joost founded Het Lotingsbureau to provide fair and transparent solutions.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Emma de Vries",
      role: "Operations Director",
      bio: "Emma oversees all operational aspects of our lottery services, ensuring smooth execution and client satisfaction.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      name: "Lucas Bakker",
      role: "Technical Lead",
      bio: "Lucas leads our technical team, developing innovative and secure lottery systems and digital solutions.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Sophie Jansen",
      role: "Client Relations Manager",
      bio: "Sophie works closely with our clients to understand their needs and ensure our solutions meet their requirements.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
  ];

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
              Our Team
            </div>
            <h2
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-800 dark:text-blue-300"
            >
              Meet the Experts Behind Het Lotingsbureau
            </h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Our team of professionals is dedicated to providing the highest
              quality lottery management services.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-blue-100 dark:border-blue-800"
              id={`mb52ei_${index}`}
            >
              <CardContent className="p-4" id={`jvx7ie_${index}`}>
                <div
                  className="aspect-square overflow-hidden rounded-lg"
                  id={`whr08x_${index}`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                    id={`oxxgwf_${index}`}
                  />
                </div>
                <CardHeader className="p-0 pt-4" id={`pgcffb_${index}`}>
                  <CardTitle
                    className="text-lg text-blue-700 dark:text-blue-400"
                    id={`sautun_${index}`}
                  >
                    {member.name}
                  </CardTitle>
                  <CardDescription id={`xjqdhp_${index}`}>
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <div className="pt-2" id={`cq7bo0_${index}`}>
                  <p
                    className="text-sm text-muted-foreground"
                    id={`3numv6_${index}`}
                  >
                    {member.bio}
                  </p>
                  <div
                    className="flex items-center pt-4"
                    id={`g37e2w_${index}`}
                  >
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      id={`r6x68z_${index}`}
                    >
                      <LinkedinIcon
                        className="h-5 w-5"
                        id={`i40ux7_${index}`}
                      />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
