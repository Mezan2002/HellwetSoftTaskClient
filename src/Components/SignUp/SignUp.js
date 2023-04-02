import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="card neomorphic mx-auto shadow-xl">
        <div className="card-body">
          <form className="">
            <h2 className="card-title">
              <p className="text-center mb-10 text-xl uppercase">Sign Up</p>
            </h2>
            <div className="mb-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="put user image URL"
                  name="imageURL"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">Sign Up</button>
            </div>
          </form>
          <div className="divider w-10/12 mx-auto">Or</div>
          <div>
            <button className="btn btn-primary btn-outline btn-block">
              Login with Google
            </button>
          </div>
          <p className="text-center mt-3">
            already have a account{" "}
            <Link to="/" className="text-primary">
              login now
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
