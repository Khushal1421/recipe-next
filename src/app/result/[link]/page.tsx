import { RandomRecipe } from "@/request/requests";
import { FoodCard } from "@/components/FoodCard";

export default async function ShowDishes({params} :{
    params: Promise<{ link: string }>
})
{
  interface Recipe {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
    summary?: string;
    [key: string]: any; // optional to allow extra Spoonacular fields
  }

  const {link} = await params;
  let z= link.charAt(0).toUpperCase() + link.slice(1); // slice is to ensure that rest of Material is also Added
  

  let recipes:Recipe[]= await RandomRecipe(link); // Great! That error means you're assigning an async function (a Promise) directly to a variable typed as a synchronous array. Here's how to fix it: use await since Promise is returned from requests.ts
  // console.log(recipes);

  return (

      <>
         <div className="m-6">
             <h1 className="text-6xl">{z} Cuisines</h1>
             <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
             {
               recipes.map((recipe) => (
                  <FoodCard key={recipe.id} item={recipe}  />
               ))
             }
             </div>
         </div>
      </>
  )
}