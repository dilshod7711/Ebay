import RouteController from "./routes/RouteController"
import {useEffect} from "react"
import {useLocation} from "react-router-dom"
function App() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return (
    <>
      <RouteController/>
    </>
  )
}

export default App
