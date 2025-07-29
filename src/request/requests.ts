const SPOONACULAR_API_KEY= process.env.SPOONACULAR_API_KEY;

export async function RandomRecipe(info?: string) {
    // &apiKey=${SPOONACULAR_API_KEY}
    if (!SPOONACULAR_API_KEY) throw new Error("API key is missing");
    // if(!info) throw new Error('Info is missing')
    // console.log(SPOONACULAR_API_KEY)
    
    console.log(info);
    const tagQuery = info ? `&tags=${info}` : '';
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=24&apiKey=${SPOONACULAR_API_KEY}${tagQuery}`,
        {cache: 'no-store'} // ? SEE in GPT SS
    );

    if(!response.ok){
        throw new Error('Failed to fetch Random Recipes');
    }
    else{
        const data= await response.json(); // it was giving error recipes.map is not a function cuz Spoonacular API wraps Array in {"recipes:[]"} as is with JSON. So has to change it
        return data.recipes;
    }
    
}

export async function GetRecipeById(id:number){
    if (!SPOONACULAR_API_KEY)
    {
        throw new Error('SPOONACULAR API_KEY is not present!!!')
    }

    if(!id){
        throw new Error('Id of Recipe is not present');
    }

    const response = await fetch
    (`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${SPOONACULAR_API_KEY}`,
    // {cache: 'no-store'}
    )

    // return response; // it's not wise cuzz it just contains metadata whereas res.json contains actual data
    const data = await response.json();
    return data;
    
}

// CHATGPT TOLDMEHOW TO HANDLE COMPLEX SEARCH
// POINT IS:
// Cuisines , mealTypes have fixed name
// So we can runthem through a function and check if they eexist in SPOONACULAR API or NOT
// If yes, then put them as Query and send to API (like cuisine='' && mealTypes='' acc. to Matching Category)

const cuisines = ["italian", "mexican", "indian", "chinese","french","greek","irish","american","korean","african","asian","japanese","german","spanish","british","european"];
const diets = ["vegetarian", "vegan", "gluten free", "keto"];
const mealTypes = ["main course", "dessert", "snack", "breakfast","drink","soup"];//or type

// interface Params{
//     cuisine:string;
//     diet: string;
//     type:string;
// }

function buildQuery(userInput: string) {
    const input = userInput.toLowerCase();
  
    // const params: any = {};
    const params:{ [key: string]: string } = {}

    // To overcome any , I thought of describing interface Params and initialize each with empty string but it didn't worked
  
    // Match cuisine
    const cuisineMatch = cuisines.find(c => input.includes(c));
    if (cuisineMatch) params.cuisine = cuisineMatch;
  
    // Match diet
    const dietMatch = diets.find(d => input.includes(d));
    if (dietMatch) params.diet = dietMatch;
  
    // Match type
    const typeMatch = mealTypes.find(t => input.includes(t));
    if (typeMatch) params.type = typeMatch;
  
    // If no match, treat the whole input as general query
    if (!params.cuisine && !params.diet && !params.type) {
      params.query = input;
    }
  
    return params;
  }
  


export async function ComplexSearch(info:string){
    if (!SPOONACULAR_API_KEY)
    {
        throw new Error('SPOONACULAR API_KEY is not present!!!')
    }

    const params = buildQuery(info);

    const queryString = new URLSearchParams({
        ...params,
        number: "12",
        apiKey: SPOONACULAR_API_KEY,
    }).toString();

    const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?${queryString}`,
        {cache: 'no-store'}
    )

    const  data = await response.json();
    return data.results;

}



// export async function CategoryRandomRecipe(info: string){
//          const response = await fetch(
//         `https://api.spoonacular.com/recipes/random?number=24&apiKey=${SPOONACULAR_API_KEY}&include-tags=${info}`
//     );

//     if(!response.ok){
//         throw new Error('Failed to fetch Random Recipes');
//     }
//     else{
//         return response.json();
//     }
// }