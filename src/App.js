import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginAndRegisterLayout from "./Layout/LoginAndRegisterLayout/LoginAndRegisterLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginAndRegisterLayout></LoginAndRegisterLayout>,
      children: [
        {
          path: "/",
          element: "",
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
