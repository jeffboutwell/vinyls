import React from "react";
import { DiscogsWant } from "@/lib/types";
import { Release } from "@/components/release";

export const WantsList = ({ wants }: { wants: DiscogsWant[] }) => {
  return (
    <div>
      <h2 className="font-heading font-black text-3xl mb-8">
        My Wants List ({wants.length})
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wants.map((release) => (
          <li key={release.id}>
            <Release release={release} />
          </li>
        ))}
      </ul>
    </div>
  );
};
