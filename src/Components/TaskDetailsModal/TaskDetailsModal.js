import React from "react";

const TaskDetailsModal = ({ detailsTaskData }) => {
  console.log(detailsTaskData);
  return (
    <div>
      <input type="checkbox" id="taskDetailsModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="taskDetailsModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{detailsTaskData.title}</h3>
          <p className="py-4">{detailsTaskData.description}</p>
          <p>Date: {detailsTaskData.date}</p>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <button className="btn btn-block btn-success">Completed</button>
            <button className="btn btn-block">Proccessed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
