import Header from "../components/Header";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Header
        title={
          <p>
            Discover the world of foods with
            <br />{" "}
            <span className="animate-pulse text-rose-500">FoodRecipes!</span>
          </p>
        }
        type="home"
      />

      <Recipes />
    </main>
  );
};

export default Home;
