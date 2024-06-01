import axios from "axios";

const API_URL = "/api/user/"


const register = async (formData) => {
    const response = await axios.post(API_URL + "/register" , formData)
    localStorage.setItem("user",JSON.stringify(response.data));
    return response.data;
   
};

const signup = async (login) => {
    const response = await axios.post(API_URL + "/login",login)
    console.log(response)
}

const authService = {
    register : register,
    signup : signup
}

export default authService;