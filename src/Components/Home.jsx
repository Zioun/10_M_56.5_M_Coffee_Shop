import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="">
      <div className="flex justify-center mt-5">
        <div className="flex flex-col items-center">
          <h1 className="text-[30px] font-bold w-90">Total Coffee : {coffees.length}</h1>
          <div className="flex gap-5">
            <Link to="addCoffee">
              <div className="flex justify-center">
                  <button className="btn btn-success text-white">Add Coffee</button>
              </div>
            </Link>
            <Link to="signIn">
              <div className="flex justify-center">
                  <button className="btn btn-neutral">Sign In</button>
              </div>
            </Link>
            <Link to="signUp">
              <div className="flex justify-center">
                  <button className="btn btn-neutral">Sign Up</button>
              </div>
            </Link>
            <Link to="users">
              <div className="flex justify-center">
                  <button className="btn btn-success text-white">Users</button>
              </div>
            </Link>
          </div>
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
