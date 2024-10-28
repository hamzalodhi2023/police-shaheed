import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SingleView from './pages/SingleView'
import Error from './pages/Error'
import Layout from './components/layout/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CreateShaheed from './pages/CreateShaheed'
import Login from './pages/Login'
const queryClient = new QueryClient();

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
        {
          path: localStorage.getItem('username') === 'welfare-digpsz' && localStorage.getItem('password') === '$digpsz2024' ? "/view" : "/",
          element: localStorage.getItem('username') === 'welfare-digpsz' && localStorage.getItem('password') === '$digpsz2024' ? <Home /> : <Login />,
        },
        {
          path: localStorage.getItem('username') === 'welfare-digpsz' && localStorage.getItem('password') === '$digpsz2024' ? "/:urlId" : "/",
          element: localStorage.getItem('username') === 'welfare-digpsz' && localStorage.getItem('password') === '$digpsz2024' ? <SingleView /> : <Login />,
        },
        {
          path: localStorage.getItem('username') === 'welfare-digpsz' && localStorage.getItem('password') === '$digpsz2024' ? "/create" : "/",
          element: localStorage.getItem('username') === 'welfare-digpsz' && localStorage.getItem('password') === '$digpsz2024' ? <CreateShaheed /> : <Login />,
        }
      ]
    },
  ])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App