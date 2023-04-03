import React from "react";
import { FaRegChartBar, FaSearch } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";

const Tasks = () => {
  return (
    <div className="min-h-screen mainBG">
      <div className="grid grid-cols-9 p-8">
        <div className="col-span-8 flex items-center relative">
          <p className="font-semibold text-2xl">Hello Iron👋 , </p>
          <input
            type="text"
            className="py-3 relative pl-4 pr-12 font-medium text-lg rounded-full focus:outline-none w-5/12 mx-auto"
            placeholder="Search"
          />
          <p className="absolute top-1/3 right-1/4">
            <FaSearch className=""></FaSearch>
          </p>
        </div>
        <div className="flex items-center justify-end">
          <p>
            <FaRegChartBar className="text-2xl font-semibold text-gray-400"></FaRegChartBar>
          </p>
          <p>
            <MdNotificationsActive className="text-2xl font-semibold text-gray-400 mx-4"></MdNotificationsActive>
          </p>
          <p>
            <RiSettings4Fill className="text-2xl font-semibold text-gray-400"></RiSettings4Fill>
          </p>
        </div>
      </div>
      <div className="px-8">
        <div className="card card-compact bg-base-100 shadow-xl">
          <div className="p-4 flex items-center justify-between">
            <div className="w-8/12">
              <h2 className="card-title">All Tasks</h2>
              <p className="text-green-500">Incompleted Taks : 3 </p>
            </div>
            <div className="flex items-center justify-between w-4/12">
              <div className="relative w-8/12">
                <input
                  type="text"
                  className="py-3 w-full relative mainBG pr-4 pl-12 font-medium text-lg rounded-full focus:outline-none"
                  placeholder="Search"
                />
                <p className="absolute top-1/3 left-5">
                  <FaSearch className=""></FaSearch>
                </p>
              </div>
              <div className="">
                <button className="btn btn-primary"> Add new task </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 h-96">
          <div className="overflow-x-auto">
            <table className="table rounded-full max-h-[30%] w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Completed</td>
                  <td className="">
                    <button className="btn btn-sm mr-4">edit</button>
                    <button className="btn btn-sm">delete</button>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Completed</td>
                  <td className="">
                    <button className="btn btn-sm mr-4">edit</button>
                    <button className="btn btn-sm">delete</button>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Completed</td>
                  <td className="">
                    <button className="btn btn-sm mr-4">edit</button>
                    <button className="btn btn-sm">delete</button>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Completed</td>
                  <td className="">
                    <button className="btn btn-sm mr-4">edit</button>
                    <button className="btn btn-sm">delete</button>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Completed</td>
                  <td className="">
                    <button className="btn btn-sm mr-4">edit</button>
                    <button className="btn btn-sm">delete</button>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Completed</td>
                  <td className="">
                    <button className="btn btn-sm mr-4">edit</button>
                    <button className="btn btn-sm">delete</button>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Completed</td>
                  <td className="">
                    <button className="btn btn-sm mr-4">edit</button>
                    <button className="btn btn-sm">delete</button>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Completed</td>
                  <td className="">
                    <button className="btn btn-sm mr-4">edit</button>
                    <button className="btn btn-sm">delete</button>
                  </td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Completed</td>
                  <td className="">
                    <button className="btn btn-sm mr-4">edit</button>
                    <button className="btn btn-sm">delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
