import { RouterProvider } from "react-router-dom";
import { router } from "./lib/router/Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;