import { bookingReducer } from "./bookings.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = (state, action) => {
  return {
    user: userReducer(state.user, action),
    bookings: bookingReducer(state.bookings, action),
  };
};
