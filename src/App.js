import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LogIn></LogIn>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
