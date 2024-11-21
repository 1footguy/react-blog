import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Users from "./pages/Users/Users"
import Sac from "./pages/Sac/Sac"
import About from "./pages/About/About"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/sac" element={<Sac/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<h1>Error 404: Not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
