import Navbar from "./Components/Navbar"
import {Container} from "@mui/material"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import CoinPage from "./Pages/coinPage"
import Cartpage from "./Pages/Cartpage"





const App = () => {
  return (
    <div>

    <Router>
    
    <Navbar/>

    <Container sx={{padding: "80px 0px"}}>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/coin/:id"  element={<CoinPage/>}/>
        <Route path="/cart" element={<Cartpage/>}/>
        
        
      </Routes>
      <ToastContainer/>
    </Container>

    </Router>
      
    </div>
  )
}

export default App
