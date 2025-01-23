import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 border-b py-4 max-w-screen px-4">
      <div className="container mx-auto flex justify-between items-center h-[3.5rem]">
        <a className="pt-serif-regular font-extrabold text-xl" href="/">
          Exclusive
        </a>
        <div className="max-md:hidden flex space-x-[4rem] items-center">
          <a className="hover:underline" href="/">
            Home
          </a>
          <a className="hover:underline" href="/signup">
            Signup
          </a>
          <a className="hover:underline" href="/signin">
            Signin
          </a>
        </div>
        <div className="flex col-span-3 justify-end gap-x-4 items-center">
          <div className="flex   items-center ">
            <input
              className="p-2 focus:outline-none bg-gray-100 rounded-tl-md rounded-bl-md"
              type="text"
              placeholder="what are you looking for?"
            />
            <button
              className="bg-blue-200 p-3 rounded-tr-md rounded-br-md "
              type="submit"
            >
              <IoSearch />
            </button>
          </div>

          <CiHeart className="text-black text-3xl" />

          <FaShoppingCart className="text-black text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
