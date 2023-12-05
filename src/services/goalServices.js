import axios from "axios";
import { BASE_URL } from "../redux/actionConstants";
const token = localStorage.getItem("token");

export const addGoal = async (goalData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/goals`,
      {
        ...goalData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      }
    );

    const { addedGoal } = response.data;

    return addedGoal;
  } catch (error) {
    throw error;
  }
};

export const getGoals = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/goals/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });

    const { goals } = response.data;

    return goals;
  } catch (error) {
    throw error;
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/goals/${goalId}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });

    const { deletedGoal } = response.data;

    return deletedGoal;
  } catch (error) {
    throw error;
  }
};


