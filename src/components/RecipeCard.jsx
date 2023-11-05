import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } =
    recipe?.recipe;

  const id = uri?.split("#")[1];

  return (
    <Link
      to={`/recipes/${id}`}
      className="flex flex-col gap-1 bg-gray-900 w-56 min-h-80 border border-slate-800 rounded-lg hover:scale-125 hover:shadow-xl hover:shadow-sky-200 transition-all duration-200 overflow-hidden"
    >
      <img src={image} alt={label} className="rounded-lg h-52 md:h-40 w-full" />
      <div className="p-3">
        <p className="text-white font-semibold">{label}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="flex items-center justify-center px-2 py-1 text-xs capitalize bg-slate-700 shadow-xl rounded-full text-green-500">
            {cuisineType}
          </span>
          <span className="flex items-center justify-center px-2 py-1 text-xs capitalize bg-slate-700 shadow-xl rounded-full text-green-500">
            {mealType}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
