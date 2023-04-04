import { Link } from "react-router-dom";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import Tasks from "../Tasks/Tasks";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const TaskPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        {user !== null ? (
          <div className="grid grid-cols-6">
            <div>
              <DashboardMenu></DashboardMenu>
            </div>
            <div className="col-span-5">
              <Tasks></Tasks>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center mainBG min-h-screen">
            <div>
              <h2 className="uppercase text-2xl font-semibold mb-5">
                Please Log In to Note your tasks
              </h2>
              <Link to="/">
                {" "}
                <button className="btn btn-block"> Log In </button>{" "}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskPage;
