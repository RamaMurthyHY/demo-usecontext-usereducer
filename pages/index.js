import { useStore } from "../store/store";

import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";

export default function Home() {
  return (
    <>
      <h1>Booking System</h1>
      <BookingForm />
      <BookingList />
    </>
  );
}
