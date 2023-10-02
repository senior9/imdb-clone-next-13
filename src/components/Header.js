import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="Home" adress="/" Icon={AiFillHome} />
        <MenuItem title="About" adress="/about" Icon={BsFillInfoSquareFill} />
      </div>
      <div className=" flex items-center space-x-4">
        <DarkMode></DarkMode>
        <Link href="/">
          <span className="font-bold py-1 px-2 bg-amber-500 rounded-lg">
            IMDB
          </span>
          <spam className="text-xl hidden sm:inline">Clone</spam>
        </Link>
      </div>
    </div>
  );
};

export default Header;
