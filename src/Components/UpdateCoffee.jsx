import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const getCoffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    getCoffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 w-full">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0  shadow-2xl bg-base-100">
          <div className="flex justify-center pt-5">
            <img className="h-40 w-40" src={photo} alt="" />
          </div>
          <form onSubmit={handleUpdateCoffee} className="card-body">
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="name"
                  className="input input-bordered"
                  defaultValue={name}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Available Quantity"
                  name="quantity"
                  className="input input-bordered"
                  defaultValue={quantity}
                  required
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  placeholder="Supplier"
                  name="supplier"
                  className="input input-bordered"
                  defaultValue={supplier}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  placeholder="Taste"
                  name="taste"
                  className="input input-bordered"
                  defaultValue={taste}
                  required
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  className="input input-bordered"
                  defaultValue={category}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Details"
                  name="details"
                  className="input input-bordered"
                  defaultValue={details}
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  className="input input-bordered"
                  defaultValue={photo}
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Update Coffee</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
