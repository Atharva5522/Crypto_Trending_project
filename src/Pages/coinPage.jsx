import { Button, Card, CardActions, CardContent, CardMedia, Container, LinearProgress, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchcoin } from '../features/coin/coinSlice';
import { addToCart } from '../features/cart/cartSlice';


const coinPage = () => {

  const params = useParams();
  const dispatch = useDispatch();

  const {coin , isLoading,isError} = useSelector(state => state.coins)

  const handleAdd = (cardItem) => {
    dispatch(addToCart(cardItem))
  }

  useEffect(() => {
    dispatch(fetchcoin(params.id));
  },[])

  if(isLoading || !coin) {
    return (
      <Container sx={{padding : "80px 0px"}}>
        <LinearProgress/>
      </Container>
    )
  }

  if(isError) {
    return (
      <Container sx={{padding : "80px 0px"}}>
        <Typography variant='h3'>Something Went Wrong!!</Typography>
      </Container>
    )
  }


  return (
    <Container sx={{padding : "80px 0px"}}>

   

    <Typography variant='h2' align='center'>{coin.name}</Typography>

    <Card sx={{marginTop: "20px"}}>
      <CardContent>
      <CardMedia image={coin.image.large} sx={{height:"400px"}}/>
        <Typography variant='h5' sx={{marginTop : "20px"}}>Symbol : {coin.symbol} </Typography>



        <Typography variant='body2' sx={{marginTop:"10px"}}>Description : {coin.description.en}</Typography>

       <CardActions>
       <Link to={coin.links.homepage[0]}>
       <Button variant='contained' sx={{marginTop: "10px"}}>Official Website</Button>
       </Link>
       <Button variant='contained' color='success' sx={{marginTop: "10px"}} onClick={()=>handleAdd(coin)}>Add to Cart</Button>
       </CardActions>
      </CardContent>
    </Card>
      
    </Container>
  )
}

export default coinPage;
