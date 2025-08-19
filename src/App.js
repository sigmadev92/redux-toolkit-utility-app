import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/general.css";
import "./styles/forms.css";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Notes from "./pages/Notes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/todos", element: <Todo /> },
        { path: "/notes", element: <Notes /> },
      ],
    },
  ]);
  return (
    <div className="App" id="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
