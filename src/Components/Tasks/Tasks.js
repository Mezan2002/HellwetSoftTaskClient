import React, { useContext, useState } from "react";
import {
  FaPencilAlt,
  FaRegChartBar,
  FaSearch,
  FaTrashAlt,
  FaUser,
} from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";
import EditTaksModal from "../EditTaksModal/EditTaksModal";
import TaskDetailsModal from "../TaskDetailsModal/TaskDetailsModal";

const Tasks = () => {
  const { user, logOut } = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [detailsTaskData, setDetailsTaskData] = useState([]);

  const {
    data: task = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [`tasks, ${user?.email}`],
    queryFn: async () => {
      const res = await fetch(
        `https://task-server-three.vercel.app/tasks?userEmail=${user?.email}`
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
        fetch(`https://task-server-three.vercel.app/task/${id}`, {
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
        <div className="px-9 xl:hidden sm:flex items-center justify-between">
          <p className="font-semibold xl:text-2xl md:text-xl">
            Hello {user?.displayName}👋 ,
          </p>
          <div className="dropdown">
            <label tabIndex={0} className="mainBG w-full py-6 px-3">
              <div className="flex items-center">
                {user?.photoURL ? (
                  <div className="avatar mr-2">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} alt="loggedInUserImage" />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-400 p-2 mr-4">
                    <FaUser className="text-3xl"></FaUser>
                  </div>
                )}
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
        <div className="xl:grid xl:grid-cols-9 hidden p-8">
          <div className="xl:col-span-8 flex items-center justify-between">
            <p className="font-semibold xl:text-2xl">
              Hello {user?.displayName}👋 ,
            </p>
            <div className="form-control hidden xl:block w-5/12 xl:mr-5">
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
          <div className="xl:flex items-center justify-end hidden">
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
          <div className="bg-base-100 shadow-xl 2xl:h-[730px] xl:h-[550px] md:h-[1000px] card card-compact">
            <div className="p-4 flex items-center justify-between">
              <div className="2xl:w-8/12 xl:w-6/12 md:w-4/12">
                <h2 className="card-title">All Tasks</h2>
                <p className="text-green-500">
                  Incompleted Taks : {task.length}{" "}
                </p>
              </div>
              <div className="flex items-center justify-between 2xl:w-4/12 xl:w-6/12 md:w-8/12">
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
                      refetch={refetch}
                    ></EditTaksModal>
                  )}
                </div>
              </div>
            </div>
            {isLoading && <Loading></Loading>}
            {task.length > 0 && (
              <div className="px-5 overflow-auto">
                <div className="grid grid-cols-12 gap-2 p-5 bg-slate-200 rounded-xl">
                  <div className="">
                    <h2 className="text-sm capitalize font-semibold">No</h2>
                  </div>
                  <div className="col-span-11 grid grid-cols-4">
                    <h2 className="text-sm capitalize font-semibold">
                      Title and Description
                    </h2>
                    <h2 className="text-sm capitalize font-semibold">Date</h2>
                    <h2 className="text-sm capitalize font-semibold">Status</h2>
                    <h2 className="text-sm capitalize font-semibold">Action</h2>
                  </div>
                </div>
                <div className="">
                  {task.map((task, i) => (
                    <label
                      key={task._id}
                      htmlFor="taskDetailsModal"
                      onClick={() => setDetailsTaskData(task)}
                      className=""
                    >
                      <div className="grid grid-cols-12 gap-2 p-5 border-b items-center align-middle">
                        <div className="">
                          <h2 className="text-sm capitalize font-semibold">
                            {i + 1}
                          </h2>
                        </div>
                        <div className="col-span-11 grid grid-cols-4">
                          <div className="">
                            <h2 className="text-base capitalize font-semibold">
                              {task.title}
                            </h2>
                            <p className="text-sm text-gray-400">
                              {task.description.length > 20
                                ? `${task.description.slice(0, 30)}...`
                                : task.description}
                            </p>
                          </div>
                          <div>
                            <h2 className="text-base mt-3">{task.date}</h2>
                          </div>
                          <div className="">
                            <button className="btn btn-ghost btn-xs mt-3">
                              new
                            </button>
                          </div>
                          <div className="mt-2">
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
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {user && task.length === 0 && (
              <div className="flex items-center justify-center min-h-[80%]">
                <div>
                  <h2 className="uppercase text-2xl font-semibold mb-5">
                    Please Log In to Note your tasks
                  </h2>
                  <label
                    htmlFor="addTaskModal"
                    onClick={() => setModalOpen(true)}
                    className="btn btn-primary btn-block"
                  >
                    Add New Task
                  </label>
                </div>
              </div>
            )}
            {detailsTaskData && (
              <TaskDetailsModal
                detailsTaskData={detailsTaskData}
              ></TaskDetailsModal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
