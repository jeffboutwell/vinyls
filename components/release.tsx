import React from "react";
import { DiscogsRelease, DiscogsWant } from "@/lib/types";
import Image from "next/image";
import { Artist } from "@/components/artist";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Release = ({
  release,
}: {
  release: DiscogsRelease | DiscogsWant;
}) => {
  return (
    <Card className="w-full p-4 gap-4">
      <CardHeader className="p-0">
        <CardTitle className="font-bold text-2xl">
          {release.basic_information.title}
        </CardTitle>
        <CardDescription className="flex flex-wrap gap-2">
          {release.basic_information.artists.map((artist) => (
            <Artist key={artist.id} artist={artist} />
          ))}
        </CardDescription>
        <div className="flex gap-2">
          <p>{release.basic_information.year}</p>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Image
          src={release.basic_information.cover_image}
          alt={release.basic_information.title}
          width={500}
          height={500}
        />
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
  );
};
