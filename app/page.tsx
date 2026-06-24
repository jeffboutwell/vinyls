import { getCollection } from "./actions/collection";
import { ReleaseList } from "@/components/release-list";

export default async function Home() {
  const { releases } = await getCollection();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Discogs</h1>
        {releases && <ReleaseList collection={releases} />}
      </main>
    </div>
  );
}
