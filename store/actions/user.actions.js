import { ADD_USER, UPDATE_USER } from "../constants/user";

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});
