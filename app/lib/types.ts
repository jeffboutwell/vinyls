export type DiscogsRelease = {
  id: number;
  basic_information: {
    title: string;
    artists: Array<{ name: string }>;
  };
};

export type DiscogsCollectionResponse = {
  releases?: DiscogsRelease[];
};
