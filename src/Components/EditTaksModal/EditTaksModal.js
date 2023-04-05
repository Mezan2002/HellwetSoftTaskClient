import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const EditTaskModal = ({
  editModalOpen,
  setEditModalOpen,
  taskData,
  refetch,
}) => {
  const [currentTaskData, setCurrentTaskData] = useState(null);

  useEffect(() => {
    setCurrentTaskData(taskData);
  }, [taskData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTaskData({
      ...currentTaskData,
      [name]: value,
    });
  };

  const handleEditTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedTitle = form.title.value;
    const updatedDescription = form.description.value;
    const updatedDate = form.date.value;
    const updatedTaskData = {
      updatedTitle,
      updatedDescription,
      updatedDate,
    };
    fetch(`http://localhost:5000/updatedTask/${taskData._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTaskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Task Updated Successfully!", "", "success");
          setEditModalOpen(false);
        }
      });
  };

  return (
    <div>
      {editModalOpen && (
        <div>
          <input type="checkbox" id="editTaskModal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="editTaskModal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">Edit the task</h3>
              <form onSubmit={handleEditTask} className="mt-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Title of the task</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={currentTaskData?.title || ""}
                    onChange={handleInputChange}
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
                    value={currentTaskData?.description || ""}
                    onChange={handleInputChange}
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
                    value={currentTaskData?.date || ""}
                    onChange={handleInputChange}
                    placeholder="example: 04/04/2023"
                    className="input input-bordered w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-5"
                >
                  {" "}
                  Edit Task{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTaskModal;
