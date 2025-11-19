import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function Category() {
    const [categories, setCategory] = useState([]);

    const [slide, setSlide] = useState(0);

    const fetchcategory = async () =>{
        const response = await fetch(`${BACKEND_URL}/categories`);
        const data = await response.json();
        setCategory(data);

    }

    useEffect(() => {
      fetchcategory();
    }, []);


    const nextSlide = () =>{
        console.log(categories.length);
        if(categories.length - 8 == slide) return false;
        setSlide(slide + 3);
    }

    const prevSlide = () => {
        if(slide == 0) return false;
        setSlide(slide - 3);
    };

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    
  return (
    <div className="max-w-[1200px] mx-auto cursor-pointer">
      <div className="my-3 flex items-center justify-between">
        <div className="text-[30px] font-bold">what's on your mind?</div>
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

      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              style={{ transform: `translateX(-${slide * 100}%)` }}
              key={index}
              className="w-[150px] shrink-0 duration-500"
            >
              <img src={"http://localhost:5000/images/" + cat.image} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="my-6" />
    </div>
  );
}
