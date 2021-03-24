import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";

import User from "../components/User";

export default function Home() {
  return (
    <>
      <h1>Booking System</h1>
      <BookingForm />
      <BookingList />
      <User />
    </>
  );
}
