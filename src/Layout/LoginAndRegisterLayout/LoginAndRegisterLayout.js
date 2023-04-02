import React from "react";
import "./LoginAndRegisterLayout.css";
import { Link, Outlet } from "react-router-dom";
import LogIn from "../../Components/LogIn/LogIn";

const LoginAndRegisterLayout = () => {
  return (
    <div className="min-h-screen p-5 flex items-center justify-center">
      <div className="">
        <div className="grid grid-cols-2 gap-2">
          <div className="mr-10">
            <div className="md:relative md:text-left text-center">
              <h1 className="lg:text-3xl md:text-2xl text-3xl text-primary font-bold capitalize">
                Join here and make your task noted
              </h1>
              <p className="py-3 w-8/12 md:w-full mx-auto">
                Provide your name and your working sector and follow us
              </p>
              <img
                draggable={false}
                src="https://i.ibb.co/HDSFB0v/Screenshot-2022-12-23-233201-removebg-preview.png"
                alt=""
                className="lg:absolute top-0 left-[-50px] md:rotate-45 w-full"
              />
            </div>
          </div>
          <div className="">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegisterLayout;
