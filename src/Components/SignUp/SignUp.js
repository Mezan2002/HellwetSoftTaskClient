import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { googleLogIn, signUpUser, updateUser } = useContext(AuthContext);
  const [logInError, setLogInError] = useState("");

  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageURL = form.imageURL.value;
    signUpUser(email, password)
      .then((result) => {
        handleUser(fullName, imageURL);
        Swal.fire("Signing Up Successfully!", "", "success");
        navigate("/taskPage");
      })
      .catch((e) => setLogInError(e.message));
  };

  const handleUser = (fullName, imageURL) => {
    const userInfo = {
      displayName: fullName,
      photoURL: imageURL,
    };

    updateUser(userInfo)
      .then((result) => {})
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        Swal.fire("Logged In Successfully!", "", "success");
        navigate("/taskPage");
      })
      .catch((e) => setLogInError(e.message));
  };
  return (
    <div>
      <div className="card neomorphic mx-auto shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSignUp} className="">
            <h2 className="card-title">
              <p className="text-center mb-10 text-xl uppercase">Sign Up</p>
            </h2>
            {logInError && (
              <div>
                <p className="text-red-500 text-center">{logInError}</p>
              </div>
            )}
            <div className="mb-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  name="fullName"
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
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
          </form>
          <div className="divider w-10/12 mx-auto">Or</div>
          <div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-block"
            >
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
