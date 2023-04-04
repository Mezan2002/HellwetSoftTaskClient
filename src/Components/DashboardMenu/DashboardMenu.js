import React, { useContext } from "react";
import ProCard from "../ProCard/ProCard";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const DashboardMenu = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="">
      <div className="min-h-screen relative">
        <div className="">
          <p className="pt-4 pb-2 font-semibold text-4xl text-center px-2">
            Dashboard <span className="text-xs">Demo</span>
          </p>
        </div>
        <div className="px-2">
          <div className="menu bg-base-100 p-2 rounded-box">
            <div className="flex items-center hover:bg-gray-200 2xl:p-3 2xl:m-1 lg:p-3 lg:m-1 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/F32zxjZ/action.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">All Task</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 2xl:p-3 2xl:m-1 lg:p-3 lg:m-1 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/TY9wBs9/task-actions.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Completed Task</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 2xl:p-3 2xl:m-1 lg:p-3 lg:m-1 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/zZ5XPy3/task.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Incompleted Task</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 2xl:p-3 2xl:m-1 lg:p-3 lg:m-1 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/RSnNj91/clipboard.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Important Task</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 2xl:p-3 2xl:m-1 lg:p-3 lg:m-1 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/6BywRwr/user-3.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Personal Task</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 2xl:p-3 2xl:m-1 lg:p-3 lg:m-1 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/SRt8KrS/community.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Team Task</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 2xl:p-3 2xl:m-1 lg:p-3 lg:m-1 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/Yh5x0Rw/work-time.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Proccessed Task</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 2xl:p-3 2xl:m-1 lg:p-3 lg:m-1 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/1TBPTLM/bookmark.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Bookmarked Task</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 2xl:p-3 2xl:m-1 lg:p-3 lg:m-1 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/KWWHzjh/folder.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Folder</p>
            </div>
            <div className="flex items-center hover:bg-gray-200 2xl:p-3 2xl:m-1 lg:p-3 lg:m-1 rounded-2xl">
              <img
                draggable={false}
                src="https://i.ibb.co/9bhWHcD/tag-1.png"
                alt=""
                className="w-6 mr-5"
              />
              <p className="">Tags</p>
            </div>
          </div>
        </div>
        <div className="px-4">
          <ProCard></ProCard>
        </div>
        <div className="dropdown-right dropdown-end absolute bottom-0 w-full dropdown">
          <label
            tabIndex={0}
            className="flex items-center justify-between mainBG absolute bottom-0 w-full py-6 px-3"
          >
            <div className="flex items-center">
              <div className="avatar mr-2">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} alt="loggedInUserImage" />
                </div>
              </div>
              <div>
                <div>
                  <h2 className="mr-5 font-bold">{user.displayName}</h2>
                  <p className="text-gray-400">user</p>
                </div>
              </div>
            </div>
            <div>
              <span>
                {" "}
                <IoIosArrowDown></IoIosArrowDown>{" "}
              </span>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <button onClick={logOut} className="btn">
              Log Out{" "}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
