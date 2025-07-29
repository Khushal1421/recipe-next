"use client";

import Image from "next/image";
import Link from "next/link";

interface Response {
  item: {
    image: string;
    name: string;
    link: string;
  };
}

export default function Card({ item }: Response) {
  const img = item.image; // where reassigning never happens, use const. Else will give error during deployment 
  const name = item.name;
  const link = item.link;

  return (
    <>
      <Link href={`/result/${link}`}> 
           <div className="bg-white w-[100%] h-[100%] shadow-md cursor-pointer hover:shadow-emerald-400    transition-all duration-300 ease-in-out hover:-translate-y-2    flex flex-col gap-5 max-w-100">
              <div className="flex ">
                <Image alt={`${name} cuisine`} width={280} height={200} className="w-full h-full object-cover" src={img} />
              </div>
              
              <div className="flex flex-col gap-5  ">
                <div className="font-bold">
                   <p className="text-center">{name}</p>
                  </div>
                
              </div>
              
           </div>
           </Link>

      {/* <Link href={`/result/${link}`}>
        <div className="bg-white shadow-md cursor-pointer hover:shadow-emerald-400 transition-all duration-300 ease-in-out hover:-translate-y-2 w-full max-w-[80px] flex flex-col rounded-lg overflow-hidden">
          
          <div className="w-full h-[180px] relative">
            <Image
              alt={`${name} cuisine`}
              src={img}
              fill
              className="object-cover"
            />
          </div>

          
          <div className="p-4 text-center">
            <p className="font-bold text-lg">{name}</p>
          </div>
        </div>
      </Link> */}
    </>
  );
}
