import { getCollection, getFolders } from "./actions/collection";
import Image from "next/image";

export default async function Home() {
  const data = await getCollection();
  const foldersData = await getFolders();

  console.log("Collection data:", { data, foldersData });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Discogs</h1>
        <h2>My Folders</h2>
        <ul>
          {foldersData.map((folder) => (
            <li key={folder.id} style={{ margin: "10px 0" }}>
              <strong>{folder.name}</strong> - {folder.count} items
            </li>
          ))}
        </ul>
        <h2>My Vinyl Collection</h2>
        <ul>
          {data.releases?.map((item) => (
            <li key={item.id} style={{ margin: "10px 0" }}>
              <Image
                src={item.basic_information.cover_image}
                alt={item.basic_information.title}
                width={100}
                height={100}
              />
              <strong>{item.basic_information.artists[0].name}</strong> -{" "}
              {item.basic_information.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
