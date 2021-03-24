import { ADD_BOOKING } from "../constants/bookings";
import { initialState } from "../initialState/initialState";

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return [...state, action.booking];
    default:
      return state;
  }
};
