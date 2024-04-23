import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
        })
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0  shadow-2xl bg-base-100">
            <form onSubmit={handleAddCoffee} className="card-body">
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
                    required
                    />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Add Coffee</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
