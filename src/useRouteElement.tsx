import { useRoutes } from 'react-router-dom'
import Layout from './layout/Layout'
import Resume from './pages/Resume/Resume'
import Work from './pages/Work/Work'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <About />
        },
        {
          path: 'resume',
          element: <Resume />
        },
        {
          path: 'works',
          element: <Work />
        },
        {
          path: 'blogs',
          element: <Blog />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ])
  return routeElement
}

export default useRouteElement
