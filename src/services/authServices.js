import axios from "axios"
import { BASE_URL } from "../redux/actionConstants"

export const login = async (email, password) => {
    try{
        const response = await axios.post(`${BASE_URL}/login`,
        {
            email, password
        },{
            headers:{
                "Content-Type": "application/json"
            }
        }
        );
        const data = response.data;
        return data;
    }catch(error){
        throw error;
    }
}


export const signup = async (userDetails) =>{
    try{
        const response = await axios.post(`${BASE_URL}/signup`, {
         ...userDetails   
        },{
            headers:{
                "Content-Type": "application/json"
            }
        }
        );
        const data = response.data;
        return data;
    }
    catch(error){
        throw error;
    }
}
