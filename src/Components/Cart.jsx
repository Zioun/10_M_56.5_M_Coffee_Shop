import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({coffee, coffees, setCoffees}) => {
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;
    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining);
                    }
                })
            }
          });
    }
  return (
    <div>
      <div className="hero border">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={photo}
            className="max-w-sm rounded-lg h-40"
          />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <div className="flex gap-5 font-bold">
                <p className="py-2">Quantity : {quantity}</p>
                <p className="py-2">Supplier : {supplier}</p>
                <p className="py-2">Taste : {taste}</p>
            </div>
            <div className="flex gap-5 font-bold">
                <p className="py-2">Category : {category}</p>
                <p className="py-2">Details : {details}</p>
            </div>
            <div className="join">
                <button className="btn btn-success text-white join-item">View</button>
                <Link to={`updateCoffee/${_id}`}><button className="btn btn-primary text-white join-item">Update</button></Link>
                <button onClick={()=> handleDelete(_id)} className="btn btn-error text-white join-item">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
