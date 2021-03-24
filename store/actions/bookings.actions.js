import { ADD_BOOKING } from "../constants/bookings";

export const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking,
});
