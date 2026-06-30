import { getWantlist } from "@/app/actions/wantlist";
import { WantsList } from "@/components/wants-list";

export default async function WantList() {
  const { wants, warning } = await getWantlist();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="font-heading font-black text-6xl mb-4">Discogs</h1>
        {warning && (
          <p className="mb-6 rounded border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200">
            {warning}
          </p>
        )}
        {wants && <WantsList wants={wants} />}
      </main>
    </div>
  );
}
