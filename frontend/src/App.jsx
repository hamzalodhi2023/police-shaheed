
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SingleView from './pages/SingleView'
import Error from './pages/Error'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/:id', element: <SingleView /> },
  {
    path: "*",
    element: <Error />,
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