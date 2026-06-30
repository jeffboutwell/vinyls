import {
  Sort,
  SortOrder,
  SortLabels,
  SortOrderLabels,
} from "@/app/actions/nuqs";

export { Sort, SortOrder, SortLabels, SortOrderLabels };

type DiscogosArtistImage = {
  height: number;
  resource_url: string;
  type: "primary" | "secondary";
  uri: string;
  uri150: string;
  width: number;
};

export type DiscogsArtist = {
  anv: string;
  id: number;
  join: string;
  name: string;
  resource_url: string;
  role: string;
  tracks: string;
  uri: string;
  images: DiscogosArtistImage[];
};

export type DiscogsBasicInformation = {
  artists: DiscogsArtist[];
  artists_sort: string;
  cover_image: string;
  formats: Array<{ name: string; qty: number }>;
  genres: string[];
  id: number;
  labels: Array<{ name: string }>;
  master_id: number;
  master_url: string;
  resource_url: string;
  styles: string[];
  thumb: string;
  title: string;
  year: number;
};

export type DiscogsRelease = {
  id: number;
  basic_information: DiscogsBasicInformation;
  instance_id: number;
  date_added: string;
  rating: number;
  folder_id: number;
};

export interface DiscogsWantlistResponse {
  pagination: DiscogsPagination;
  wants: DiscogsWant[];
}

export interface DiscogsPagination {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: {
    first?: string;
    prev?: string;
    next?: string;
    last?: string;
  };
}

export interface DiscogsWant {
  id: number; // Represents the Release ID
  resource_url: string;
  date_added: string;
  rating: number;
  notes?: string;
  basic_information: DiscogsBasicInformation;
}

export type DiscogsCollectionResponse = {
  releases?: DiscogsRelease[];
};

export type DiscogsFolder = {
  count: number;
  id: number;
  name: string;
  resource_url: string;
};

export type DiscogsFolderResponse = {
  folders?: DiscogsFolder[];
};
