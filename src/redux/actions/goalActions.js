import { addGoal, deleteGoal, getGoals } from "../../services/goalServices";
import { validateGoal } from "../../utils/validationUtils";
import {
 GOAL_INPUT ,
 GOALS ,
ADD_GOAL, 
 DELETE_GOAL, 
 GOAL_LOADING, 
 GOAL_ERROR ,
 RESET_GOAL ,
} from "../actionConstants";

export const GoalInput = (userInput) => ({
    type: GOAL_INPUT,
    payload: userInput
})

export const addNewGoal = (userInput, userId) => async (dispatch) => {
    try{
        dispatch({ type: GOAL_LOADING});

        const isValidated = validateGoal(userInput)

        if(!isValidated){
            throw new Error('Please select all the required fields')
        }else{
            dispatch({ type: GOAL_ERROR, payload: ""})
        }

        const GoalData = { ...userInput, userId}

        const createdGoal = await addGoal(GoalData)
        dispatch({ type: ADD_GOAL, payload: createdGoal})
    }
    catch(error){
        dispatch({ type: GOAL_ERROR, payload: error.message})
    }
}


export const getAllGoals = (userId) => async (dispatch) => {
    try{
        dispatch({ type: GOAL_LOADING})

        const Goals = await getGoals(userId)

        dispatch({ type: GOALS, payload: Goals})
    }
    catch(error){
        dispatch({ type: GOAL_ERROR, payload: error.message})
    }
}

export const removeGoal = (GoalId) => async (dispatch) => {
    try{
        dispatch({ type: GOAL_LOADING})

        const deletedGoal = await deleteGoal(GoalId)
        dispatch({ type: DELETE_GOAL, payload: GoalId})
    }
    catch(error){
        dispatch({ type: GOAL_ERROR, payload: error.message})
    }
}