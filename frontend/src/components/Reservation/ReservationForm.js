// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReservation} from '../../store/reservations';
// import { createReservation} from '../../store/session';
function ReservationForm() {
  const { id } = useParams()
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  console.log(sessionUser.id)
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload={ userId:sessionUser.id , listingId:id, checkInDate, checkOutDate }
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
        <button type="submit">Make Reservation</button>
      </form>

    </>
  );
}

export default ReservationForm;
