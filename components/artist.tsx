"use client";

import React, { useEffect, useState } from "react";
import { getArtist } from "@/app/actions/artist";
import { DiscogsArtist } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import Image from "next/image";

export const Artist = ({ artist }: { artist: DiscogsArtist }) => {
  const [artistData, setArtistData] = useState<DiscogsArtist | null>(null);
  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const data = await getArtist(artist.id.toString());
        setArtistData(data);
      } catch (error) {}
    };

    fetchArtist();
  }, [artist.id]);

  if (!artistData) {
    return (
      <Button
        variant="link"
        disabled
        className="hover:no-underline cursor-pointer pl-0 text-muted-foreground hover:text-foreground text-xs h-4"
      >
        {artist.name}
      </Button>
    );
  }

  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className="hover:no-underline cursor-pointer pl-0 text-muted-foreground hover:text-foreground text-xs h-4"
        >
          {artistData.name}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-1">
        <Image
          src={artistData.images[0].resource_url}
          alt={artistData.name}
          width={artistData.images[0].width}
          height={artistData.images[0].height}
        />
        <p className="text-lg/tight font-bold">{artistData.name}</p>
        <Link
          href={artistData.uri}
          target="_blank"
          className="text-sm text-muted-foreground hover:underline"
        >
          View Artist Profile
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
};
