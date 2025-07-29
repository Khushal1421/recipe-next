import { ComplexSearch } from "@/request/requests";
import { FoodCard } from "@/components/FoodCard";

interface Recipes{
    id: number,
    image: string,
    title: string
}

// IMP Here how I  call params is IMP 
export default async function SearchResult({
    params,
  }: {
      params:{name: string}
    }){
    // const {name} = params;
   
    const response:Recipes[]= await ComplexSearch(params.name);

    return(
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {
              response.map((res) =>(
                  
                  <FoodCard key={res.id} item={res} />
              ))
          }
          </div>
        </>
    )
}