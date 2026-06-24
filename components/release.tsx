import React from "react";
import { DiscogsRelease } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Release = ({ release }: { release: DiscogsRelease }) => {
  console.log("Release", release);
  return (
    <Link
      href={`https://www.discogs.com/release/${release.id}`}
      className="w-full hover:shadow-lg transition-shadow"
    >
      <Card className="w-full p-4 gap-4">
        <CardHeader className="p-0">
          <CardTitle>{release.basic_information.title}</CardTitle>
          <CardDescription>
            {release.basic_information.artists[0].name}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Image
            src={release.basic_information.cover_image}
            alt={release.basic_information.title}
            width={500}
            height={500}
          />
        </CardContent>
        <CardFooter className="p-0">
          <p>{release.basic_information.year}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};
