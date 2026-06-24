import React from "react";
import { DiscogsRelease } from "@/lib/types";
import { Release } from "@/components/release";

export const ReleaseList = ({
  collection,
}: {
  collection: DiscogsRelease[];
}) => {
  return (
    <div>
      <h2>My Vinyl Collection</h2>
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
