import axios from "axios"
import { BASE_URL } from "../redux/actionConstants"
const token = localStorage.getItem('token')

export const addExercise = async (exerciseData) => {
    try{
        const response = await axios.post(`${BASE_URL}/exercises`, {
            ...exerciseData
        },{
            headers:{
                "Content-Type":"application/json",
                authorization: token
            }
        }
        )
        const {createdExercise} = response.data;
        return createdExercise;
    }
    catch(error){
        throw error
    }
}


export const getExercises = async (userId) =>{
    try{
        const response = await axios.get(`${BASE_URL}/exercises/${userId}`,{
            headers:{
                "Content-Type": "application/json",
                authorization: token
            }
        })
        const {exercises} = response.data;
        return exercises;
    }
    catch(error){
         throw error;
    }
}


export const deleteExercise = async (exerciseId) => {
    try{
        const response = await axios.delete(`${BASE_URL}/exercises/${exerciseId}`,{
            headers:{
                "Content-Type":"application/json",
                authorization: token,
            }
             })
             const {deletedExercise} = response.data;
             return deletedExercise;
    }
    catch(error){
        throw error;
    }
}

