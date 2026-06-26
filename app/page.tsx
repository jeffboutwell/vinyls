import { getCollection, getFolders } from "./actions/collection";
import { ReleaseList } from "@/components/release-list";
import { loadCollectionFolderSearchParams } from "@/actions/nuqs";
import { SearchParams } from "nuqs/server";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { folder_id, sort, sort_order } =
    await loadCollectionFolderSearchParams(searchParams);
  const { folders } = await getFolders();
  const { releases } = await getCollection({ folder_id, sort, sort_order });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="font-heading font-black text-6xl mb-4">Discogs</h1>
        {releases && <ReleaseList collection={releases} folders={folders} />}
      </main>
    </div>
  );
}
