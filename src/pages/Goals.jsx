import { useDispatch, useSelector } from "react-redux"
import { GoalInput, addNewGoal } from "../redux/actions/goalActions"
import { useEffect } from "react"
import { RESET_GOAL } from "../redux/actionConstants"
import { goalStatus } from "../utils/goalUtils"
import { GoalCard } from "../components/GoalCard"

export const Goals = () => {
    const { _id: userId} = useSelector((state) => state.authState.user)
    const userInput = useSelector((state) => state.goalState.goalInput)
    const goals = useSelector((state) => state.goalState.goals)
    const error = useSelector((state) => state.goalState.gpalError)
    const dispatch = useDispatch()

    const handleAddGoal = () => {
        dispatch(addNewGoal(userInput, userId))
    }

    useEffect(() => {
        return function (){
            dispatch({ type: RESET_GOAL, payload: ""})
        }
    },[])

    return(
        <div className="p-4 flex flex-col gap-4 text-white">
      <h2>Add a new goal:</h2>

      <div className="flex gap-2 flex-wrap items-center">
        <label className="flex flex-col">
          Goal Name:
          <input
            onChange={(e) =>
              dispatch(
                GoalInput({
                  ...userInput,
                  goalName: e.target.value,
                })
              )
            }
            value={userInput.goalName}
            type="text"
            placeholder="enter food name"
            className="border-2 mt-2 rounded-md text-black max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <label className="flex flex-col">
          Description:
          <input
            onChange={(e) =>
              dispatch(
                GoalInput({
                  ...userInput,
                  goalDescription: e.target.value,
                })
              )
            }
            value={userInput.goalDescription}
            type="text"
            placeholder="enter description"
            className="border-2 mt-2 rounded-md text-black max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <label className="flex flex-col">
          Target Date:
          <input
            onChange={(e) =>
              dispatch(
                GoalInput({
                  ...userInput,
                  targetDate: e.target.value,
                })
              )
            }
            value={userInput.targetDate}
            type="date"
            placeholder="enter target calories"
            className="border-2 mt-2 rounded-md text-black max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <label className="flex flex-col">
          Target Calories:
          <input
            onChange={(e) =>
              dispatch(
                GoalInput({
                  ...userInput,
                  targetCaloriesValue: e.target.value,
                })
              )
            }
            value={userInput.targetCaloriesValue}
            type="number"
            placeholder="enter target calories"
            className="border-2 mt-2 rounded-md text-black max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <select
          onChange={(e) =>
            dispatch(
                GoalInput({
                ...userInput,
                status: e.target.value,
              })
            )
          }
          value={userInput.status}
          className="border-2 mt-2 rounded-md text-black max-w-[10rem] px-1 outline-2 outline-blue-500"
        >
          {goalStatus.map((status) => {
            return (
              <option key={status} className="bg-blue-100">
                {status}
              </option>
            );
          })}
        </select>

        <button
          onClick={handleAddGoal}
          className="text-blue bg-gradient-to-r from-orange-700 to-red-500 text-transparent bg-clip-text font-semibold px-2   rounded-md border-2 border-cyan-300"
        >
          Add
        </button>
      </div>

      {error && <small className="text-red-600">{`* ${error}`}</small>}

      <h2>All Goals:</h2>

      <div className="flex flex-wrap gap-4">
        {goals.map((goal, i) => {
          return (
            <GoalCard goal={goal} key={goal._id} />
          );
        })}
      </div>
    </div>
    )

}