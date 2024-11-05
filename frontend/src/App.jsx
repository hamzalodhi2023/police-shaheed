import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SingleView from "./pages/SingleView";
import Error from "./pages/Error";
import Layout from "./components/layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CreateShaheed from "./pages/CreateShaheed";
import Login from "./pages/Login";
const queryClient = new QueryClient();

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
      ],
    },
  ]);
  if (
    localStorage.getItem("username") === "welfare-digpsz" &&
    localStorage.getItem("password") === "$digpsz2024"
  ) {
    routes = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
          {
            path: "/",
            element: <Login />,
          },
          {
            path: "/view",
            element: <Home />,
          },
          {
            path: "/:urlId",
            element: <SingleView />,
          },
          {
            path: "/create",
            element: <CreateShaheed />,
          },
        ],
      },
    ]);
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
