import {Typography,Card, CardContent,TextField, Button, Container, LinearProgress} from "@mui/material"
import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { registerUser } from "../features/auth/authSlice"


const Register = () => {

  const {user,isLoading,isError,message} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [formData,setFormData] = useState({
    name : "",
    email : "",
    password : "",
    password2 : "",
  })

  const {name,email,password,password2} = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
  };

  useEffect(() => {
    if(user) {
      navigate("/")
    }

    if(isError || message) {
      toast.error(message)
    }

  },[user,isError,message,navigate]);

  if(isLoading) {
    return (
      <Container sx={{padding: "80px 0px"}}>
        <LinearProgress/>
      </Container>
    )
  }

 
  


  return (
    <Card>

    <CardContent>

    <Typography variant="h3" align="center" sx={{marginTop:"10px"}}>Register</Typography>

    <form onSubmit={handleSubmit}>

    <TextField label="Name" type="Name" value={name} fullWidth variant="outlined" onChange={handleChange}  name="name" sx={{marginTop:"30px"}} />
    <TextField label="Email" type="email" value={email}  fullWidth variant="outlined" onChange={handleChange}  name="email" sx={{marginTop:"15px"}} />
    <TextField label="Password" type="password" value={password} fullWidth variant="outlined" onChange={handleChange} name="password" sx={{marginTop:"15px"}} />
    <TextField label="Confirm-Password" type="password" value={password2}  fullWidth variant="outlined" onChange={handleChange} name="password2" sx={{marginTop:"15px"}} />

    <Button variant="contained" type="submit" fullWidth sx={{marginTop:"20px"}}>REGISTER</Button>

    </form>



    </CardContent>
    
      
    </Card>
  )
}

export default Register
