import React from "react";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Tasks from "../Tasks/Tasks";

const TaskPage = () => {
  return (
    <div>
      <div className="grid grid-cols-6">
        <div>
          <DashboardMenu></DashboardMenu>
        </div>
        <div className="col-span-5">
          <Tasks></Tasks>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
