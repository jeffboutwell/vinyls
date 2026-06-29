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

export type DiscogsRelease = {
  id: number;
  basic_information: {
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
  instance_id: number;
  date_added: string;
  rating: number;
  folder_id: number;
};

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
