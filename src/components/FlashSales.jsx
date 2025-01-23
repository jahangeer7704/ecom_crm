import { BsArrowRightShort } from "react-icons/bs";
import React from "react";
import Card from "./Card";
import { data } from "../../data";
import { useState, useRef } from "react";
function FlashSales() {
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

  const addToCart = (id) => {
    let cart = data.filter((i) => i.id == id);
    console.log(cart);
  };
  const addToWishList = (id) => {
    let cart = data.filter((i) => i.id == id);
    console.log(cart);
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2 text-xl items-center">
            <div className="h-full w-5 rounded bg-red-600"></div>
            <p className="p-2 text-red-600 text-sm">Today's</p>
          </div>
          <div className="flex justify-between items-end w-full">
            <div className="">
              <h2 className="font-bold text-4xl">Flash Sales</h2>
              {/* time */}
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
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto p-4   scroll-smooth scrollbar-hide"
      >
        {data.map((i) => (
          <Card
            key={i.id}
            wish={addToWishList}
            cart={addToCart}
            img={i.image}
            price={i.price}
            title={i.title}
            id={i.id}
          />
        ))}
      </div>
    </div>
  );
}

export default FlashSales;
