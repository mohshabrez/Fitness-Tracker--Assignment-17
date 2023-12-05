export const validateSignUp = (userDetails) => {
    const {email, password, profilePictureUrl, username} = userDetails;

    if(!email || !password || !profilePictureUrl || !username){
        return false;
    }
    return true;
}


export const validateLogin = (email, password) => {
    if(!email || !password){
        return false;
    }
    return true;
}

export const validateExercise = (userInput) => {
    const { exerciseName, durationMinutes} = userInput;

    if( !exerciseName || !durationMinutes || exerciseName === "Select an exercise" || durationMinutes === "Select duration"){
        return false;
    }
    return true;
}


export const validateFood = (userInput) => {
    const { foodName, calories, protein, carbohydrates, fat} = userInput;

    if(!foodName || !calories || !protein || !carbohydrates || !fat){
        return false;
    }
    return true;
}


export const validateGoal = (userInput) => {
    const { goalName, goalDescription, targetDate, targetCaloriesValue, status} = userInput;

    if( !goalName || !goalDescription || !targetDate || !targetCaloriesValue || !status){
        return false;
    }
    return true
}