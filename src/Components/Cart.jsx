import { Button, Card, CardContent,  Typography } from "@mui/material"


const Cart = () => {
  return (
    <>


        <Card sx={{marginTop:"20px"}}>
        <CardContent>
            <Typography variant="h6" gutterBottom>Coin Name</Typography>
            <Typography variant="body1" gutterBottom>$199</Typography>
            <Button size="small" variant="contained" color="error" sx={{marginTop:"10px"}} fullWidth>Remove Cart</Button>
            
        </CardContent>

        </Card>
    
      
    </>
  )
}

export default Cart
