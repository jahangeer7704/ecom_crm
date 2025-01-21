import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

import {motion} from 'framer-motion'
function Card({ img, title, price,id,cart,wish }) {

    
    return (
        <div key={id} className='h-72 w-60 bg-white relative p-2 m-2 rounded-md flex-shrink-0'>
            <CiHeart onClick={()=>wish(id)}  className='absolute right-2 text-2xl top-2' />
            <FaShoppingCart onClick={()=>cart(id)} className='absolute left-2 text-xl top-[10px] text-gray-600' />
            <motion.div className='h-2/3 flex items-center justify-center '>
                <img src={img} alt="" />
            </motion.div>
            <div className='flex flex-col justify-around  h-1/3'>
                <p className='font-semibold'>{title}</p>
                <p className='font-bold'><span className='line-through mr-4'>Rs.600</span> {price}</p>

            </div>
        </div>
    )
}


export default Card