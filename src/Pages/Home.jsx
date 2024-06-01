import { Container, Grid, LinearProgress, Typography} from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CoinCard from "../Components/CoinCard";
import { fetchTrending } from "../features/coin/coinSlice";

const Home = () => {

  const {user,isLoading} = useSelector(state => state.auth)
  const {coins} = useSelector(state => state.coins)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if(!user) {
      navigate("/login")
    }

    dispatch(fetchTrending())


  });

  if(isLoading || coins.length === 0){
    return (
      <Container sx={{padding:"80px 0px"}}>
      <LinearProgress/>

      </Container>
    )
  }




  return (

    <>
    <div>

    <Typography variant="h3" align="center">Trending Crypto Currencies</Typography>

    </div>

    <Container sx={{padding:"20px 0px", margin:"50px 40px"}}>

    <Grid container spacing={12}>
   
    {
      coins.map(coin => <CoinCard key={coin.item.coin_id} coin={coin.item}/>)
    }
    


    
    </Grid>
  
      </Container>

   

    </>

    


  )
}

export default Home;
