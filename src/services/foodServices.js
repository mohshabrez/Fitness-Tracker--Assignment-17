import axios from "axios"
import { BASE_URL } from "../redux/actionConstants"
const token = localStorage.getItem('token')

export const addFood = async (foodDeatils) => {
    try{
        const response = await axios.post(`${BASE_URL}/foods`, {
            ...foodDeatils
        },{
            headers:{
                "Content-Type": "application/json",
                authorization: token
            }
        });

        const {addedFood} = response.data;
        return addedFood
    }
    catch(error){
        throw error
    }
}

export const getFoods = async (userId) => {
    try{
        const response = await axios.get(`${BASE_URL}/foods/${userId}`,{
            headers:{
                "Content-Type":"application/json",
                authorization: token,
            }
        })
        const {foods} = response.data;
        return foods;
    }
    catch(error){
        throw error
    }
}

export const deleteFood = async(foodId) => {
    try{
        const response = await axios.delete(`${BASE_URL}/foods/${foodId}`,{
            headers:{
                "Content-Type":"application/json",
                authorization: token,
            }
        })
        const {deletedFood} = response.data;
        return deletedFood
    }
    catch(error){
        throw error
    }
}