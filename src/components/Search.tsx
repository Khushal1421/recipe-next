// import { HiMagnifyingGlass } from "react-icons/hi2";
// import { HiDotsVertical } from "react-icons/hi";

// import { ComplexSearch } from "@/request/requests";
// import Link from "next/link";

// export async function Search(){

//     function SendMe(){
//        <Link href={`/searchresults/${data}`} />
//     }
//     return(
//         <>
//          <div className="mt-10">
//              <form onSubmit={SendMe} className="justify-center flex mx-auto w-[50%]" >
//                  <input type="text" name="data" className="focus:outline-none border flex-1 py-2 px-4" placeholder="Search Recipes or Cuisines" />
//                  <button type="submit" className="mx-2 bg-ros-100 cursor-pointer hover:bg-emerald-400 rounded-lg">Click to Submit</button>
//              </form>
//          </div>
//         </>
//     )
// }

'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/searchresults/${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div className="mt-10">
      <form
        onSubmit={handleSubmit}
        className="justify-center flex mx-auto w-[50%]"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Recipes or Cuisines"
          className="focus:outline-none border flex-1 py-2 px-4"
        />
        <button
          type="submit"
          className="mx-2 bg-ros-100 cursor-pointer hover:bg-emerald-400 rounded-lg"
        >
          Click to Submit
        </button>
      </form>
    </div>
  );
}
