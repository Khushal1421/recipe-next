import Image from "next/image";
import Link from "next/link";

interface Recipe {
  id: number;
  title: string;
  image: string;
  // readyInMinutes: number;
  summary?: string;
  [key: string]: any; // optional to allow extra Spoonacular fields
}

interface RecipeData {
  item: Recipe;
}

export async function FoodCard({ item }: RecipeData) {
  return (
    <>
      <Link href={`/mealdetail/${item.id}`}>
        {/* <div className="bg-white shadow-lg max-w-350 max-h-120 rounded-2xl p-4 flex flex-col gap-4   hover:shadow-emerald-300 cursor-pointer">
        <div className="w-full h-40 overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-lg font-semibold text-center">{item.title}</h2>
        
      </div> */}

        <div className="bg-white shadow-lg max-w-350 rounded-2xl p-4 flex flex-col gap-4 hover:shadow-emerald-300 cursor-pointer">
          {/* Image wrapper */}
          <div className="relative w-full h-40 overflow-hidden rounded-lg">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Title: Equal height, 2-line clamp */}
          <h2 className="text-lg font-semibold text-center min-h-[3rem] line-clamp-2">
            {item.title}
          </h2>
        </div>
      </Link>
    </>
  );
}
