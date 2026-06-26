import React from "react";
import { DiscogsRelease, DiscogsFolder } from "@/lib/types";
import { Release } from "@/components/release";
import { Filters } from "@/components/ui/filters";

export const ReleaseList = ({
  collection,
  folders,
}: {
  collection: DiscogsRelease[];
  folders?: DiscogsFolder[];
}) => {
  return (
    <div>
      <h2 className="font-heading font-black text-3xl mb-8">
        My Vinyl Collection
      </h2>
      <Filters folders={folders} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collection.map((release) => (
          <li key={release.id}>
            <Release release={release} />
          </li>
        ))}
      </ul>
    </div>
  );
};
