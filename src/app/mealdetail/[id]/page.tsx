import Image from "next/image";
import { GetRecipeById } from "@/request/requests";

interface Recipe {
  id: number;
  image: string;
  title: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
//   extendedIngredients: Array;
 extendedIngredients: Ingredient[],
 summary: string
}

interface Ingredient {
  name: string;
  original: string;
  amount: number;
  unit: string;
  image: string;
}

export default async function MealDetails({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const param = await params;

  const data: Recipe = await GetRecipeById(param.id); // await is necessaryhere otherwise would Show Error :-Remove await to see Error

  const ingredients:Ingredient[] = data.extendedIngredients.map( // how did Ingredient[] solved problem at ul with ing and index
    (ingredient: Ingredient) => ({
      name: ingredient.name,
      original: ingredient.original,
      amount: ingredient.amount,
      unit: ingredient.unit,
      image: `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`,
    })
  );

  return (
    <>
      <div className="m-10">
        <div className="flex justify-between gap-10">
          <div className="mt-10 font-semibold text-7xl">{data.title}</div>
          <div className="flex">
            <Image src={data.image} height={300} width={300} alt={data.title} />
          </div>
        </div>

        <div className="mt-10">
          <h1 className="font-sans font-medium ">
            Ingredients Required For Making Recipe
          </h1>
          <ul className="mt-8">
            {ingredients.map((ing, index) => (
              <li key={index} className="flex items-center gap-3 mb-2">
                <Image
                  src={ing.image}
                  alt={ing.name}
                  width={100}
                  height={100}
                  className="w-10 h-10 object-contain"
                />
                <span>{ing.original}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-15">
            {data.summary}
        </div>

        <div className="mt-20">
            <h3 className="font-sans font-medium">
                Sources
            </h3>

            <div className="mt-8 flex flex-col gap-5">
                <div> 
                  {data.sourceUrl}
                </div>
                <div>
                {data.spoonacularSourceUrl}
                </div>
                
                
            </div>

        </div>
      </div>
    </>
  );
}
