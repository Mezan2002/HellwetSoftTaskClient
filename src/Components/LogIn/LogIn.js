import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
  const { googleLogIn, userLogIn } = useContext(AuthContext);
  const [logInError, setLogInError] = useState("");
  const navigate = useNavigate();
  const handleLogIn = (event) => {
    setLogInError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogIn(email, password)
      .then((result) => {
        Swal.fire("Logged In Successfully!", "", "success");
        navigate("/taskPage");
      })
      .catch((e) => setLogInError(e.message));
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
          <form onSubmit={handleLogIn} className="">
            <h2 className="card-title">
              <p className="text-center mb-10 text-xl uppercase">Log In</p>
            </h2>
            {logInError && (
              <div>
                <p className="text-red-500 text-center">{logInError}</p>
              </div>
            )}
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
            <div className="card-actions">
              <button className="btn btn-primary btn-block">Log in</button>
            </div>
          </form>
          <div className="divider w-10/12 mx-auto">Or</div>
          <div>
            <button
              type="submit"
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-block"
            >
              Login with Google
            </button>
          </div>
          <p className="text-center mt-3">
            don't have a account{" "}
            <Link to="/signUp" className="text-primary">
              register now
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
