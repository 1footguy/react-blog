import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Users from "./pages/Users/Users"
import Sac from "./pages/Sac/Sac"
import About from "./pages/About/About"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import { AuthProvider } from "./context/Auth"

function App() {


  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/sac" element={<Sac/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h1>Error 404: Not found</h1>}/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
