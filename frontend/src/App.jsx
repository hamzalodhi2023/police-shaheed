
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SingleView from './pages/SingleView'
import Error from './pages/Error'
import Layout from './components/layout/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
          element: <Home />,
        },
        {
          path: '/:id',
          element: <SingleView />,
        },
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