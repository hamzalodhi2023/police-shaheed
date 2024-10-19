
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SingleView from './pages/SingleView'
import Error from './pages/Error'
import Layout from './components/layout/Layout'

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

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App