import React, { useContext, useState } from "react";
import {
  FaPencilAlt,
  FaRegChartBar,
  FaSearch,
  FaTrashAlt,
} from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";
import EditTaksModal from "../EditTaksModal/EditTaksModal";

const Tasks = () => {
  const { user } = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [taskData, setTaskData] = useState([]);

  const { data: task = [], refetch } = useQuery({
    queryKey: [`tasks, ${user?.email}`],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/tasks?userEmail=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/task/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleEdit = (taskData) => {
    setTaskData(taskData);
    setEditModalOpen(true);
  };

  return (
    <div className="mainBG min-h-screen">
      <div>
        <div className="grid grid-cols-9 p-8">
          <div className="col-span-8 flex items-center justify-between">
            <p className="font-semibold text-2xl">
              Hello {user?.displayName}👋 ,
            </p>
            <div className="form-control w-5/12">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="p-3 font-medium text-lg focus:outline-none w-full mx-auto"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
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
          <div className="bg-base-100 shadow-xl h-[730px] card card-compact">
            <div className="p-4 flex items-center justify-between">
              <div className="w-8/12">
                <h2 className="card-title">All Tasks</h2>
                <p className="text-green-500">
                  Incompleted Taks : {task.length}{" "}
                </p>
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
                  <label
                    htmlFor="addTaskModal"
                    onClick={() => setModalOpen(true)}
                    className="btn btn-primary btn-block"
                  >
                    Add New Task
                  </label>
                  {modalOpen && (
                    <AddTaskModal
                      refetch={refetch}
                      setModalOpen={setModalOpen}
                    ></AddTaskModal>
                  )}
                </div>
                <div>
                  {editModalOpen && taskData !== [] && (
                    <EditTaksModal
                      editModalOpen={editModalOpen}
                      setEditModalOpen={setEditModalOpen}
                      taskData={taskData}
                    ></EditTaksModal>
                  )}
                </div>
              </div>
            </div>
            {task.length !== 0 ? (
              <div className="h-[80%] overflow-auto px-5">
                <div className="mt-5">
                  <div className="overflow-x-auto">
                    <table className="table rounded-none w-full">
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
                        {task.map((task, i) => (
                          <tr key={task._id}>
                            <th>{i + 1}</th>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.date}</td>
                            <td>
                              <button className="btn btn-ghost btn-xs">
                                new
                              </button>
                            </td>
                            <td className="">
                              <label
                                htmlFor="editTaskModal"
                                className="btn btn-sm mr-4"
                                onClick={() => handleEdit(task)}
                              >
                                <FaPencilAlt></FaPencilAlt>
                              </label>
                              <button
                                onClick={() => handleDelete(task._id)}
                                className="btn btn-error text-white btn-sm"
                              >
                                <FaTrashAlt></FaTrashAlt>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <Loading></Loading>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
