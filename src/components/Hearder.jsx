import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

export default function Hearder() {
  const [toggle, setToggle] = useState(false);

  const showsideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoSearchSharp />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup:"New"
    },
    {
      icon: <IoMdHelpCircleOutline />,
      name: "Help",
    },
    {
      icon: <MdOutlinePersonOutline />,
      name: "Sign In",
    },
    {
      icon: <IoCartOutline />,
      name: "Cart",
      sup:"(0)"
    },
  ];

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>

      <header className="p-[15px] shadow-xl sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center cursor-pointer">
          <div className="w-[100px]">
            <img src="images/logo.png" className="w-full" alt="" />
          </div>

          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              {" "}
              Pune
            </span>
            , Maharashtra, India
            <RxCaretDown
              onClick={showsideMenu}
              fontSize={25}
              className="font-bold inline text-[#fc8019]"
            />
          </div>

          <nav className="hidden md:flex list-none gap-7 ml-auto font-semibold text-[18px] cursor-pointer">
            {links.map((links, index) => {
              return (
                <li
                  key={index}
                  className="flex hover:text-[#fc8019] items-center gap-2"
                >
                  {links.icon}
                  {links.name}
                  <sup className="text-[#fc8019]">{links.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
