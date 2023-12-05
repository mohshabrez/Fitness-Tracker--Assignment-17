import {
GOAL_INPUT,
GOALS,
ADD_GOAL,
DELETE_GOAL,
GOAL_LOADING,
GOAL_ERROR,
RESET_GOAL,
} from "../actionConstants";

const initialState = {
    goals: [],
    goalInput: {
        goalName: "",
        goalDescription: "",
        targetDate: "",
        targetCaloriesValue: 0,
        status: 'In Progress'
    },
    goalLoading: false,
    goalError: ""
}


export const goalReducer = (state = initialState, action) => {
    switch (action.type){
        case GOAL_INPUT:
            return {...state, goalInput: action.payload}
        case GOALS:
            return {...state, goals: [...action.payload], goalLoading: false, goalError: ""}
        case ADD_GOAL:
            return {...state, goals: [...state.goals, action.payload],
            goalInput: {
                goalName: "",
                goalDescription: "",
                targetDate: "",
                targetCaloriesValue: 0,
                status: "In Progress"
            }, goalLoading: false
            }
        case DELETE_GOAL:
           const goalId = action.payload;
           const updatedGoals = state.goals.filter(({ _id}, i) => {
            return _id !== goalId
           }) 
           return {...state, goals: updatedGoals}
        case GOAL_LOADING:
            return {...state, goalLoading: true}
        case GOAL_ERROR: 
            return {...state, goalError: action.payload, goalLoading: false}
        case RESET_GOAL:
            return {...state, goalInput: {
                goalName: "",
                goalDescription: "",
                targetDate: "",
                targetCaloriesValue: 0,
                status: "In Progress"
            }, goalError: ""}
        default:
            return {...state}
    }
}

















