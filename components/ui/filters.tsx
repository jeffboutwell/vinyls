"use client";

import React from "react";
import { useFilters } from "@/lib/hooks/useFilters";
import { Sort, SortLabels, SortOrder, SortOrderLabels } from "@/lib/types";
import { ArrowUpNarrowWide, ArrowDownWideNarrow } from "lucide-react";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const Filters = () => {
  const { filters, setFilters } = useFilters();

  const handleSortChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    const value = event.currentTarget.value;
    if (Sort.includes(value as (typeof Sort)[number])) {
      setFilters({ sort: value as (typeof Sort)[number] });
    }
  };

  const handleSortOrderChange = (value: string) => {
    if (SortOrder.includes(value as (typeof SortOrder)[number])) {
      setFilters({ sort_order: value as (typeof SortOrder)[number] });
    }
  };

  return (
    <div className="flex items-center gap-2 justify-between my-8">
      <div className="flex items-center gap-2">
        <Label htmlFor="sort">Sort by:</Label>
        <NativeSelect
          onChange={handleSortChange}
          value={filters.sort}
          name="sort"
          id="sort"
        >
          {Sort.map((value) => (
            <NativeSelectOption key={value} value={value}>
              {SortLabels[value]}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="sort_order">Sort order:</Label>
        <ToggleGroup
          variant="outline"
          type="single"
          onValueChange={handleSortOrderChange}
          value={filters.sort_order}
          id="sort_order"
        >
          <ToggleGroupItem value="asc" aria-label="Toggle ascending">
            <ArrowUpNarrowWide />
          </ToggleGroupItem>
          <ToggleGroupItem value="desc" aria-label="Toggle descending">
            <ArrowDownWideNarrow />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};
