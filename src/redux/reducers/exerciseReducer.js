import {
EXERCISE_INPUT,
EXERCISES,
ADD_EXERCISE,
DELETE_EXERCISE,
EXERCISE_LOADING,
EXERCISE_ERROR,
RESET_EXERCISE
} from "../actionConstants"

const initialState = {
    exercises: [],
    exerciseInput: {
        exerciseName: "",
        durationMinutes: 0
    },
    exerciseLoading: false,
    exerciseError: "",
}

export const exerciseReducer = (state = initialState, action) => {
    switch(action.type){
        case EXERCISE_INPUT:
            return {...state, exerciseInput: action.payload}
        case EXERCISES:
            return {...state, exercises: [...action.payload], exerciseLoading: false, exerciseError: ""}
        case ADD_EXERCISE:
            return {...state, exercises: [...state.exercises, action.payload], exerciseInput: {
                exerciseName: "",
                durationMinutes: 0
            }, exerciseLoading: false}
        case DELETE_EXERCISE:
            const exerciseId = action.payload;
            const updatedExercises = state.exercises.filter(({ _id}, i) => {
                return _id !== exerciseId
            })
            return {...state, exercises: updatedExercises}
        case EXERCISE_LOADING:
            return {...state, exerciseLoading: true}
        case EXERCISE_ERROR:
            return {...state, exerciseError: action.payload, exerciseLoading: false}
        default:
            return {...state}
    }
}