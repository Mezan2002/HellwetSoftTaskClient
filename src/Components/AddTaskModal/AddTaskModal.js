import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Modal = ({ setModalOpen, refetch }) => {
  const { user } = useContext(AuthContext);
  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const date = form.date.value;
    const taskData = {
      title,
      description,
      date,
      userEmail: user.email,
      createdAt: new Date().toISOString(),
    };
    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Task Added Successfully!", "", "success");
          refetch();
          setModalOpen(false);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="addTaskModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addTaskModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add a task</h3>
          <form onSubmit={handleAddTask} className="mt-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Title of the task</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description of the task</span>
              </label>
              <textarea
                name="description"
                required
                placeholder="Description"
                className="h-40 textarea border border-gray-300"
              ></textarea>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date of the task</span>
              </label>
              <input
                type="text"
                name="date"
                required
                placeholder="example: 04/04/2023"
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-5">
              {" "}
              Add Task{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
