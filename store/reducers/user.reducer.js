import { ADD_USER, UPDATE_USER } from "../constants/user";
import { initialState } from "../initialState/initialState";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;

    case UPDATE_USER:
      return action.payload;

    default:
      return state;
  }
};
