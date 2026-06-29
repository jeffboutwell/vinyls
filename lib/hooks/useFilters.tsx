"use client";

import { useQueryStates } from "nuqs";
import { collectionFolderSearchParams } from "@/app/actions/nuqs";

export const useFilters = () => {
  const [filters, setFilters] = useQueryStates(collectionFolderSearchParams, {
    shallow: false,
  });

  return {
    filters,
    setFilters,
  };
};
