import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import aos from 'aos'
import 'react-toastify/dist/ReactToastify.css'
import 'aos/dist/aos.css'
import useRouteElement from './useRouteElement'

function App() {
  useEffect(() => {
    aos.init({ duration: 1200 })
    aos.refresh()
  }, [])
  const routeElement = useRouteElement()
  return (
    <>
      {routeElement}
      <ToastContainer autoClose={2000} closeOnClick pauseOnFocusLoss draggable />
    </>
  )
}

export default App
