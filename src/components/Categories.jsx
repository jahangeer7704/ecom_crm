import React from 'react';
import { BsArrowRightShort } from "react-icons/bs";
import { useState, useRef } from "react";




function Categories() {
  const scrollRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrollPosition = (scroll) => {
    const maxScroll =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    let newScrollPosition = scrollPosition + scroll;

    if (newScrollPosition < 0) {
      newScrollPosition = 0;
    } else if (newScrollPosition > maxScroll) {
      newScrollPosition = maxScroll;
    }

    setScrollPosition(newScrollPosition);
    scrollRef.current.scrollLeft = newScrollPosition;

    console.log(newScrollPosition);
  };
  return (
    <div>
  
      <div className="relative flex items-center text-zinc-800 gap-1 w-full py-2">
        <div className="h-[1px] w-full bg-zinc-300 "></div>
        <p className=" absolute left-[50%] translate-x-[-50%] px-2 bg-white"> </p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2 text-xl items-center">
            <div className="h-full w-5 rounded bg-red-600"></div>
            <p className="p-2 text-red-600 text-sm">Categories</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end w-full">
        <div className="flex justify-between ">
          <h2 className="font-bold text-5xl py-3">Browse By Category </h2>
        </div>
        <div>
          <button onClick={() => handleScrollPosition(-240)}>
            <BsArrowRightShort className="text-3xl rotate-180 text-gray-400 hover:text-black" />
          </button>
          <button onClick={() => handleScrollPosition(240)}>
            <BsArrowRightShort className="text-3xl text-gray-400 hover:text-black" />
          </button>
        </div>
        </div>
  
    </div>
  )
}

export default Categories