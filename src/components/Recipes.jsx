import { useEffect, useState } from "react";
import Loading from "./Loading";
import Searchbar from "../components/Searchbar";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Pizza");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit });
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchRecipe = async (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
    fetchRecipe();
  };

  useEffect(() => {
    setLoading(true);
    fetchRecipe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10 mb-10">
        <form onSubmit={handleSearchRecipe} className="w-full lg:w-2/4">
          <Searchbar handleInputChange={handleChange} />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>
          <div className="flex w-full items-center justify-center py-10">
            <button
              onClick={showMore}
              className="bg-green-800 text-white px-4 py-2 rounded-full text-sm hover:bg-green-900"
            >
              Show More
            </button>
          </div>
        </>
      ) : (
        <div className="text-white w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
