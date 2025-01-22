import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className="grid  bg-gray-200 p-3 grid-flow-col grid-cols-6 mb-3 sticky top-0 z-10">
            <div className="flex col-span-3 justify-between items-center">
                <a className='pt-serif-regular font-extrabold text-xl' href="/">Exclusive</a>

                <a href="/">Home</a>
                <a href="/signup">Signup</a>
                <a href="/signin">Signin</a>


            </div>
            <div className="flex col-span-3 justify-end gap-x-4 items-center">
                <div className="flex   items-center ">
                    <input className='p-2 focus:outline-none bg-gray-100 rounded-tl-md rounded-bl-md' type="text" placeholder="what are you looking for?" />
                    <button className='bg-blue-200 p-3 rounded-tr-md rounded-br-md ' type="submit"><IoSearch />
                    </button>
                </div>


                <CiHeart className='text-black text-3xl' />

                <FaShoppingCart className='text-black text-2xl' />

            </div>
            
        </nav>
    );
};

export default Navbar;