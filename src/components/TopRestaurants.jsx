import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Card from "./Card";

export default function TopRestaurants() {
  // const [categories, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    console.log(data.length);
    if (data.length - 8 == slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };

  const [data, setData] = useState([]);

  const fetchTopRestraurant = async () => {
    const response = await fetch({ BACKEND_URL } + `/top-restaurant-chains`);
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestraurant();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto cursor-pointer px-2">
      <div className="my-3 flex items-center justify-between">
        <div className="text-[30px] font-bold">
          Top restaurants chain in Pune
        </div>
        <div className="flex">
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 hover:text-[#fc8019]"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 hover:text-[#fc8019]"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex gap-5 overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-500"
          style={{
            transform: `translateX(-${slide * 100}%)`, // SLIDER WORKS NOW
          }}
        >
          {data.map((data, index) => {
            return <Card width="w-full md:w-[273px]" {...data} key={index} />;
          })}
        </div>
        <hr className="my-4" />
      </div>
    </div>
  );
}
