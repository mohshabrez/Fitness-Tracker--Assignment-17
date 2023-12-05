import { addFood, deleteFood, getFoods } from "../../services/foodServices";
import { validateFood } from "../../utils/validationUtils";
import {
 FOOD_INPUT ,
 FOODS ,
ADD_FOOD, 
 DELETE_FOOD, 
 FOOD_LOADING, 
 FOOD_ERROR ,
 RESET_FOOD ,
} from "../actionConstants";

export const foodInput = (userInput) => ({
    type: FOOD_INPUT,
    payload: userInput
})

export const addNewFood = (userInput, userId) => async (dispatch) => {
    try{
        dispatch({ type: FOOD_LOADING});

        const isValidated = validateFood(userInput)

        if(!isValidated){
            throw new Error('Please select all the required fields')
        }else{
            dispatch({ type: FOOD_ERROR, payload: ""})
        }

        const foodData = { ...userInput, userId}

        const createdFood = await addFood(foodData)
        dispatch({ type: ADD_FOOD, payload: createdFood})
    }
    catch(error){
        dispatch({ type: FOOD_ERROR, payload: error.message})
    }
}


export const getAllFoods = (userId) => async (dispatch) => {
    try{
        dispatch({ type: FOOD_LOADING})

        const foods = await getFoods(userId)

        dispatch({ type: FOODS, payload: foods})
    }
    catch(error){
        dispatch({ type: FOOD_ERROR, payload: error.message})
    }
}

export const removeFood = (foodId) => async (dispatch) => {
    try{
        dispatch({ type: FOOD_LOADING})

        const deletedFood = await deleteFood(foodId)
        dispatch({ type: DELETE_FOOD, payload: foodId})
    }
    catch(error){
        dispatch({ type: FOOD_ERROR, payload: error.message})
    }
}