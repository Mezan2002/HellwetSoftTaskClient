import React from "react";

const Modal = () => {
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
    };
  };
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="addTaskModal" className="btn btn-primary btn-block">
        Add New Task
      </label>

      {/* Put this part before </body> tag */}
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
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description of the task</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date of the task</span>
              </label>
              <input
                type="text"
                name="date"
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
