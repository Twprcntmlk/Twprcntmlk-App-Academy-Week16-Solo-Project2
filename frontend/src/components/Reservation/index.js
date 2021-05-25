// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
// import { createReservation} from '../../store/session';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReservation} from '../../store/reservations';

function ReservationForm() {
  const { id } = useParams()
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guest, setGuest] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const payload={ userId:sessionUser.id , listingId:id, checkInDate, checkOutDate, guests:guest }
    return dispatch(createReservation(payload))
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          CheckInDate
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </label>
        <label>
            CheckOutDate
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </label>
        <label>
            Guests
          <input
            type="number"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            required
          />
        </label>
        <button type="submit">Make Reservation</button>
      </form>

    </>
  );
}

export default ReservationForm;
