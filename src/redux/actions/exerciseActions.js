import { addExercise, deleteExercise, getExercises } from "../../services/exerciseServices";
import { allExercises } from "../../utils/exerciseUtils";
import { validateExercise } from "../../utils/validationUtils";
import {
 EXERCISE_INPUT,
 EXERCISES ,
 ADD_EXERCISE, 
 DELETE_EXERCISE, 
 EXERCISE_LOADING, 
EXERCISE_ERROR, 
 RESET_EXERCISE, 
} from "../actionConstants";

export const exerciseInput = (userInput) => ({
    type: EXERCISE_INPUT,
    payload: userInput
})

export const addNewExercise =  (userInput, userId) => async (dispatch) => {
    try{
        dispatch({ type: EXERCISE_LOADING});

        const isValidated = validateExercise(userInput)

        if(!isValidated){
            throw new Error('Please select all required fields')
        }
        else{
            dispatch({ type: EXERCISE_ERROR, payload: ""})
        }

        const duration = parseInt(userInput.durationMinutes)

        const caloriesBurned = allExercises[userInput.exerciseName].calorieRate * duration;

        const exerciseData = {
            ...userInput, durationMinutes: duration, caloriesBurned, userId
        }
        const createdExercise = await addExercise(exerciseData);

        dispatch({ type: ADD_EXERCISE, payload: createdExercise})
    }
    catch(error){
        dispatch({ type: EXERCISE_ERROR, payload: error.message})
    }
}


export const getAllExercises = (userId) => async (dispatch) =>{
    try{
        dispatch({ type: EXERCISE_LOADING})

        const exercises = await getExercises(userId);

        dispatch({ type: EXERCISES, payload: exercises})
        
    }
    catch(error){
        dispatch({ type: EXERCISE_ERROR, payload: error.message})
    }
} 


export const removeExercise = (exerciseId) => async (dispatch) => {
    try{
        dispatch({ type: EXERCISE_LOADING})

        const deletedExercise = await deleteExercise(exerciseId)

        dispatch({ type: DELETE_EXERCISE, payload: exerciseId})
    }
    catch(error){
        dispatch({ type: EXERCISE_ERROR, payload: error.message})
    }
}