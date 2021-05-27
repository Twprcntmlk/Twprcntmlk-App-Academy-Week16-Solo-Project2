// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
// import { createReservation} from '../../store/session';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReservation} from '../../store/reservations';
import './reservationform.css';

function ReservationForm({price}) {

  const { id } = useParams()
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guest, setGuest] = useState(1);


  const handleSubmit = (e) => {
    e.preventDefault();

    const payload={ userId:sessionUser.id , listingId:id, checkInDate, checkOutDate, guests:guest }
    history.push(`/users/${sessionUser.id}`)
    return dispatch(createReservation(payload))

  };


  return (
    <div className='Reservation_Form-Holder'>
      <form className='Reservation_Form' onSubmit={handleSubmit}>
        <label className='Reservation_Form-checkin'>
          CheckInDate
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </label>
        <label className="Reservation_Form-checkout">
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
      <div>
        Total:{price*Number(guest)}
      </div>
    </div>
  );
}

export default ReservationForm;
