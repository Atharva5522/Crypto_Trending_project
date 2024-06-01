import {Button, Card, CardContent, Container, LinearProgress, TextField, Typography} from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { loginUser } from "../features/auth/authSlice"


const Login = () => {

  const {user,isLoading,isError,message} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  

  const [login,setLogin] = useState({
    email : "",
    password : "",
  })

  const {email,password} = login;

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(login))
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
    <div>

   

    <Card>
      <CardContent>
      <Typography variant="h3" align="center" sx={{marginTop:"20px"}}>Log In </Typography>



      <form onSubmit={handleSubmit}>
      <TextField label="E-mail"
       variant="outlined"
       name="email"
       type="email"
       onChange={handleChange}
       value={email}
        fullWidth sx={{marginTop:"30px"}}/>


      <TextField label="Password"
       variant="outlined"
       type="password"
       onChange={handleChange}
       value={password}
       name="password"
        fullWidth sx={{marginTop:"20px"}}/>

      <Button variant="contained" type="submit" fullWidth sx={{marginTop:"30px"}}>LOG IN</Button>

      </form>
      </CardContent>
    </Card>

    
      
    </div>
  )
}

export default Login
