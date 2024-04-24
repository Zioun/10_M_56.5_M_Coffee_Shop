import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const SignIn = () => {
  const {signInUser} = useContext(AuthContext);
  const handleLoginUser = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email,password)
    signInUser(email, password)
    .then((result)=>{
      console.log(result.user);
      const user = {
        email,
        lastLoggedAt: result.user?.metadata?.lastSignInTime,
      }
      //update last logged at in the database
      fetch('https://coffee-store-server-theta-two.vercel.app/user', {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully sign in",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch((error)=>{
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "something went wrong",
            showConfirmButton: false,
            timer: 1500
          });
    })

}
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">      
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
