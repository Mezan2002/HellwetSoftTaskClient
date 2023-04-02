import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginAndRegisterLayout from "./Layout/LoginAndRegisterLayout/LoginAndRegisterLayout";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginAndRegisterLayout></LoginAndRegisterLayout>,
      children: [
        {
          path: "/",
          element: <LogIn></LogIn>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
