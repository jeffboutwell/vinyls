import { getCollection } from "./actions/collection";

export default async function Home() {
  const data = await getCollection();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>My Vinyl Collection</h1>
        <ul>
          {data.releases?.map((item) => (
            <li key={item.id} style={{ margin: "10px 0" }}>
              <strong>{item.basic_information.artists[0].name}</strong> -{" "}
              {item.basic_information.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
