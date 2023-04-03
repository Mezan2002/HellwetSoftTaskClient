import React from "react";
import { Outlet } from "react-router-dom";

const LoginAndRegisterLayout = () => {
  return (
    <div className="p-5 flex items-center justify-center min-h-screen main">
      <div className="grid grid-cols-2 gap-2 items-center">
        <div className="mr-10">
          <div className="md:relative md:text-left text-center">
            <h1 className="lg:text-3xl md:text-2xl text-3xl text-primary font-bold capitalize">
              Join here and make your task noted
            </h1>
            <p className="py-3 w-8/12 md:w-full mx-auto">
              Be the user of our app and keep your task noted here
            </p>
            <img
              draggable={false}
              src="https://i.ibb.co/Dk3x4PZ/Screenshot-2022-12-23-233201-removebg-preview-1.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegisterLayout;
