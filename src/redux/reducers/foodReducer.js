import {
FOOD_INPUT,
FOODS ,
ADD_FOOD,
DELETE_FOOD,
FOOD_LOADING,
FOOD_ERROR,
RESET_FOOD,
} from "../actionConstants"

const initialState = {
    foods: [],
    foodInput: {
        foodName: "",
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0
    }, 
    foodLoading: false,
    foodError: ""  
}

export const foodReducer = (state = initialState, action) => {
    switch(action.type){
        case FOOD_INPUT:
            return {...state, foodInput: action.payload}
        case FOODS:
            return {...state, foods: [...action.payload], foodLoading: false, foodError: ""}
        case ADD_FOOD:
            return {...state, foods: [...state.foods, action.payload], foodInput: {
                foodName: "",
                calories: 0,
                protein: 0,
                carbohydrates: 0,
                fat: 0
            }, foodLoading: false}
        case FOOD_LOADING:
            return {...state, foodLoading: true}
        case FOOD_ERROR:
            return {...state, foodError: action.payload, foodLoading: false}
        case DELETE_FOOD:
            const foodId = action.payload;
            const updatedFoods = state.foods.filter(({ _id}, i) => {
                return _id !== foodId
            })
            return { ...state, foods: updatedFoods}
        case RESET_FOOD:
            return {...state, foodInput: {
                foodName: "",
                calories: 0,
                protein: 0,
                carbohydrates: 0,
                fat:0,
            }, foodError: ""}
        default: 
            return {...state}
    }
}