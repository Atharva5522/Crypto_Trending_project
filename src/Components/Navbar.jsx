import {AppBar,Toolbar,Typography,Button, Badge} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../features/auth/authSlice'

const Navbar = () => {

  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const {cartItem} = useSelector(state => state.cart)

  const handlelogout = () => {
    dispatch(loginUser)
  }

  return (
    <AppBar>
    <Toolbar>
    
    <Typography variant="h6" sx={{flexGrow : 1}}>
    <Link to={"/"}> Crypto App </Link>
    </Typography>
  
    {
        
        !user ? 
      <>
      <Link to={"/register"}>
    <Button variant="contained" color="success">Register</Button>
    </Link>
   
   <Link to={"/login"}>
   <Button variant="contained" color="success" sx={{marginLeft:"10px",marginRight:"10px"}}>login</Button>
   </Link> 
        </>
       : (
        <>

        <Link to={"/cart"}>
        <Badge badgeContent={cartItem.length} color='error' sx={{marginRight:"15px"}}>
        <Button variant='contained' color='success'>Add Cart</Button>
        </Badge>
        </Link>

         <Button variant="contained" color="error" onClick={handlelogout}>log out</Button>

         </>
      )
    }
  
    </Toolbar>
    </AppBar>
  )
}

export default Navbar
