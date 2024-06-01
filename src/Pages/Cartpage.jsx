import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material"
import Cart from "../Components/Cart"


const Cartpage = () => {
  return (
    <div>

    <Container sx={{padding: "20px 0px"}}>
        <Typography variant="h4" align="center">Your Cart</Typography>
    </Container>

    <Grid container spacing={8}>

    <Grid item sm={12} md={8}>

   <Cart/>
   

   </Grid>

   




    <Grid item sm={12} md={4}>
        <Card>
        <CardContent>
            <Typography variant="h6">Total :</Typography>
            <Typography variant="h4" gutterBottom>$999</Typography>
            <Button variant="contained">Buy Now</Button>
        </CardContent>
            
        </Card>
    </Grid>

    </Grid>
      
    </div>
  )
}

export default Cartpage
