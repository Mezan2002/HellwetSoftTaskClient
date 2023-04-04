import React from "react";

const Modal = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="addTaskModal" className="btn btn-primary btn-block">
        <button className=""> Add New Task </button>
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
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
