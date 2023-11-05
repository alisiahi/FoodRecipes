import Logo from "../assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex items-center w-full fixed h-20 z-10 bg-slate-900 opacity-90 shadow-lg">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block w-8 h-8 lg:w-14 lg:h-14"
          />
          <span className="text-rose-500 font-bold">FoodRecipes</span>
        </Link>
        <ul className="hidden md:flex text-white gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Explore</Link>
          </li>
          <li>
            <Link to="/">Favorites</Link>
          </li>
        </ul>
        <button className="bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px] py-2 px-6 outline-none">
          Sign in
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
