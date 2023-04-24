import aos from 'aos'
import 'aos/dist/aos.css'

import useRouteElement from './useRouteElement'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    aos.init({ duration: 1200 })
    aos.refresh()
  }, [])
  const routeElement = useRouteElement()
  return <>{routeElement}</>
}

export default App
