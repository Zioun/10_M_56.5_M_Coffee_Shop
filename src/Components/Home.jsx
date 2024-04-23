import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="">
      <div className="flex justify-center mt-5">
        <div>
          <h1 className="text-[30px] font-bold">Total Coffee : {coffees.length}</h1>
          <Link to="addCoffee">
            <div className="flex justify-center">
                <button className="btn">Add Coffee</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="border px-5 mt-5 grid grid-cols-2">
        {
            coffees.map(coffee => <Cart coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Cart>)
        }
      </div>
    </div>
  );
};

export default Home;
