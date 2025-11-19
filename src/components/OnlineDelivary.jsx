import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function OnlineDelivary() {
  const [data, setData] = useState([]);

  const fetchTopRestraurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
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
          Restaurant with online ordering in Pune
        </div>
      </div>

      <div>
        <div className="max-w-[1200px] mx-auto flex my-4 gap-2">
          <div className="p-3 rounded-md shadow">Filter</div>
          <div className="p-3 rounded-md shadow">Sort</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.map((data, index) => {
          return <Card {...data} key={index} />;
        })}
      </div>
    </div>
  );
}
