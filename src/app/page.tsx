// import { RandomRecipe } from "@/request/requests";
// import Card from '@/components/Card';
// import Data from '@/data.json'

// interface Recipe{
//   id: number,
//   summary: string,
//   image: string,
//   title: string
// }
// interface RecipeData{
//   recipes: Recipe[]
// }

// I'll LOOK at FONT LATER
// import { Roboto } from "next/font/google"

// const bokorFont = Roboto({
//     subsets:["latin"],
//     weight: "400",
// })

// export default function Home(){
//     return(
//         <>
//         <div className={`m-6 ${bokorFont.className}`}>
//             <h1>Bokor</h1>
//             <p>
//              Lorem ipsum dolor sit amet consectetur
//              adipisicing elit. Eius possimus porro deleniti esse numquam
//              sed temporibus ipsam nemo corrupti ab?
//         </p>
//         </div>

//         </>
//     )
// } '/images2/food-stack.jpg

import Image from "next/image";
import foodImage1 from "../../public/images2/food-stack.jpg";
import foodImage2 from "../../public/images2/food-stock.jpg";
import Card from "@/components/Card";
import { Search } from "@/components/Search";

// link: "https://api.spoonacular.com/recipes/random?number=2&tags=chinese&apiKey=7268a2163fa4473fb274c27eba013038",
const cuisines = [
  {
    image: "/image/chinese-tofu.jpg",
    name: "Chinese",
    link:'chinese'
  },
  {
    image: "/image/french.jpg",
    name: "French",
    link: "french",
  },
  {
    image: "/image/italian-pizza.jpg",
    name: "Italian",
    link: "italian",
  },
  {
    image: "/image/indian-food-dosa.jpg",
    name: "Indian",
    link: "indian",
  },
];

export default async function Home() {
  return (
    <>
      <Search />
      <div className="m-18">
        <h1 className="font-bold text-6xl text-center">Food Recipe App</h1>

        <div className="mt-10 relative h-[400px] ">
          <div className=" absolute z-10 w-full flex  justify-center flex-col mt-30 text-white text-4xl">
            <h3 className="font-bold text-center">Skip the Stress</h3>
            <h3 className="font-bold text-center mt-5">
              Find the Best Recipes for any Food
            </h3>
          </div>
          <Image
            src="/images2/food-stock.jpg"
            fill
            className="object-cover"
            alt="Food Image"
          />
        </div>

        <div className="mt-[10rem]">
          <p className="text-5xl">Popular Cuisines</p>

          <div className="mt-5 flex flex-wrap justify-center gap-6">
            {cuisines.map((cuisine, index) => (
              <Card key={index} item={cuisine} />
            ))}
          </div>
        </div>

        <div className="mt-35 pb-8 bg-emerald-200">
          <div className="font-extrabold">
            <p className="text-center md:text-5xl lg:text-7xl">Deliciousness</p>
            <p className="text-center md:text-5xl mt-4 text-7xl">
              to your Inbox
            </p>
          </div>
          <div className="mt-10">
            <p className="text-xl text-center">
              Enjoy weekly hand picked recipes
            </p>
            <p className="text-xl text-center">and recommendations</p>
          </div>

          <div className="mt-20 bg-white flex justify-center mx-auto w-[50%]">
            <input
              type="email"
              className="flex-1 px-2 py-2"
              placeholder="Email Address"
            />
            <div className="flex justify-center bg-[#ff8052] items-center my-[2px] w-[20%]">
              JOIN
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
