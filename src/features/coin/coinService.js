
import axios from "axios"

const fetchTrandingCoins = async () => {
    const response = await axios.get("https://api.coingecko.com/api/v3/search/trending")
    return response.data.coins;
    
};

const fetchcoin = async(id) => {
    const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return response.data
}

const coinService = {
    fetchTrandingCoins,
    fetchcoin,
}

export default coinService