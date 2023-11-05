import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../assets/images";
import TypeWriter from "./TypeWriter";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = ({ title, image, type }) => {
  return (
    <div className="relative w-full h-[100vh]">
      <div className="w-full h-screen">
        <img
          className="w-full h-full object-cover"
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt="Recipes"
        />
      </div>

      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 ">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          {title}
        </h1>
        {type && (
          <p className="flex items-center text-xl font-bold mt-4 text-center text-green-500 px-6 py-4">
            <TypeWriter />
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
