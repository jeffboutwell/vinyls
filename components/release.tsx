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
import { Badge } from "@/components/ui/badge";

export const Release = ({ release }: { release: DiscogsRelease }) => {
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
          <p>{release.basic_information.year}</p>
        </CardContent>
        <CardFooter className="p-0 flex items-center justify-between">
          {release.basic_information.styles.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {release.basic_information.styles.map((style) => (
                <Badge key={style} variant="secondary">
                  {style}
                </Badge>
              ))}
            </ul>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};
