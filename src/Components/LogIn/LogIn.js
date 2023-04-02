import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
  const { googleLogIn } = useContext(AuthContext);
  const handleLogIn = (event) => {
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    event.preventDefault();
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        Swal.fire("Logged In Successfully!", "", "success");
        console.log(user);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <div className="card neomorphic mx-auto shadow-xl">
        <div className="card-body">
          <form onSubmit={handleLogIn} className="">
            <h2 className="card-title">
              <p className="text-center mb-10 text-xl uppercase">Log In</p>
            </h2>
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
